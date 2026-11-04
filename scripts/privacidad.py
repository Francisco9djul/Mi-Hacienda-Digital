"""Protección de los datos del productor.

Los documentos del repo usan datos ficticios (productor, establecimiento, ubicación,
códigos SENASA y montos). Los datos reales están solo en privado/, que está en
.gitignore y nunca se sube. Este script no contiene ningún dato real: los lee de
privado/datos-reales.json.

Uso (desde la raíz del repo):
    python scripts/privacidad.py verificar   # busca datos reales en lo que git puede subir
    python scripts/privacidad.py entrega     # genera privado/entrega/ con los datos reales

`verificar` corre solo antes de cada commit (hook .git/hooks/pre-commit) y cancela
el commit si encuentra algún dato real fuera de privado/.
"""
import json
import re
import shutil
import subprocess
import sys
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
PRIVADO = RAIZ / "privado"
DATOS = PRIVADO / "datos-reales.json"
ENTREGA = PRIVADO / "entrega"

TEXTO = {".md", ".html", ".css", ".js", ".json", ".txt", ".svg", ".py", ".yml", ".yaml", ".gitignore"}

# PDFs con datos reales que van en la entrega en lugar de su versión ficticia.
PDF_REALES = {
    "docs/07-modelado/flujos-mockups.pdf": PRIVADO / "pdf" / "flujos-mockups.pdf",
    "docs/07-modelado/modelo-de-dominio.pdf": PRIVADO / "pdf" / "modelo-de-dominio.pdf",
}

AVISO_RE = re.compile(r"> \*\*Versión pública\.\*\*.*?\n\n", re.S)


def cargar_datos():
    if not DATOS.exists():
        return None
    return json.loads(DATOS.read_text(encoding="utf-8"))


def archivos_subibles():
    """Archivos que git puede subir: versionados y nuevos que no estén ignorados."""
    salida = subprocess.run(
        ["git", "ls-files", "-z", "--cached", "--others", "--exclude-standard"],
        cwd=RAIZ, capture_output=True, check=True,
    ).stdout.decode("utf-8")
    return sorted({p for p in salida.split("\0") if p and (RAIZ / p).is_file()})


def texto_de_pdf(ruta: Path) -> str:
    try:
        import pypdfium2
    except ImportError:
        return ruta.read_bytes().decode("latin-1")
    doc = pypdfium2.PdfDocument(str(ruta))
    return "\n".join(doc[i].get_textpage().get_text_range() for i in range(len(doc)))


def verificar() -> int:
    datos = cargar_datos()
    if datos is None:
        print("Aviso: no está privado/datos-reales.json; no se puede verificar.")
        return 0
    regex = re.compile("|".join(datos["prohibidos"]), re.IGNORECASE)
    fugas = []
    for rel in archivos_subibles():
        if rel.startswith("privado/"):
            fugas.append(f"{rel}: está dentro de privado/ y no debería poder subirse")
            continue
        ruta = RAIZ / rel
        if regex.search(rel):
            fugas.append(f"{rel}: nombre de archivo")
        sufijo = ruta.suffix.lower() or ruta.name
        if sufijo in TEXTO:
            for n, linea in enumerate(ruta.read_text(encoding="utf-8", errors="replace").splitlines(), 1):
                m = regex.search(linea)
                if m:
                    fugas.append(f"{rel}:{n}: '{m.group(0)}'")
        elif sufijo == ".pdf":
            m = regex.search(texto_de_pdf(ruta))
            if m:
                fugas.append(f"{rel}: el PDF contiene '{m.group(0)}'")
        else:
            m = regex.search(ruta.read_bytes().decode("latin-1"))
            if m:
                fugas.append(f"{rel}: el binario contiene '{m.group(0)}'")
    if fugas:
        print(f"Datos reales del productor en {len(fugas)} lugar(es) que se subirían:")
        for f in fugas:
            print("  " + f)
        print("Reemplazalos por los datos ficticios (ver privado/datos-reales.json).")
        return 1
    print("Verificación OK: no hay datos reales fuera de privado/.")
    return 0


def a_real(texto: str, rel: str, datos) -> str:
    for patron, real in datos["entrega"]:
        texto = re.sub(patron, real, texto)
    if rel.startswith("docs/07-modelado/"):
        montos = datos["montos_reales"]
        rx = re.compile(r"(?<![\d.])(" + "|".join(re.escape(k) for k in sorted(montos, key=len, reverse=True)) + r")(?![\d])(?!\.\d)")
        texto = rx.sub(lambda m: montos[m.group(1)], texto)
    if rel == "README.md":
        texto = AVISO_RE.sub("", texto, count=1)
    return texto


def entrega() -> int:
    datos = cargar_datos()
    if datos is None:
        print("ERROR: falta privado/datos-reales.json.")
        return 1
    if ENTREGA.exists():
        shutil.rmtree(ENTREGA)
    n = 0
    for rel in archivos_subibles():
        if not (rel.startswith("docs/") or rel == "README.md"):
            continue
        origen, destino = RAIZ / rel, ENTREGA / rel
        destino.parent.mkdir(parents=True, exist_ok=True)
        if rel in PDF_REALES and PDF_REALES[rel].exists():
            shutil.copy2(PDF_REALES[rel], destino)
        elif origen.suffix.lower() in TEXTO:
            destino.write_text(a_real(origen.read_text(encoding="utf-8"), rel, datos), encoding="utf-8", newline="")
        else:
            shutil.copy2(origen, destino)
        n += 1
    for rel, ruta in PDF_REALES.items():
        if ruta.exists() and not (ENTREGA / rel).exists():
            (ENTREGA / rel).parent.mkdir(parents=True, exist_ok=True)
            shutil.copy2(ruta, ENTREGA / rel)
            n += 1
    print(f"Entrega con datos reales en {ENTREGA}: {n} archivos.")
    return 0


if __name__ == "__main__":
    comando = sys.argv[1] if len(sys.argv) > 1 else ""
    if comando == "verificar":
        sys.exit(verificar())
    if comando == "entrega":
        sys.exit(entrega())
    print(__doc__)
    sys.exit(2)
