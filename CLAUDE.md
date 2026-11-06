# CLAUDE.md

## Proyecto

**Mi Hacienda Digital**: aplicación web para la gestión del rodeo bovino del establecimiento Los Álamos (Provincia de Buenos Aires). Práctica Supervisada de Ingeniería en Sistemas de Información, UTN FRLP. Cliente: Juan Pérez (productor). Alumno: Francisco Garcia Martinez.

**Estado:** solo documentación y relevamiento. No hay código de aplicación, ni build, ni tests. Lo único ejecutable son los mockups HTML estáticos.

## Estructura

- `docs/`: toda la documentación, numerada (00-glosario a 09-riesgos). Ver [docs/README.md](docs/README.md) para el índice y las convenciones.
- `docs/07-modelado/`: historias de usuario, DER, diagrama de clases, plan de pruebas, roles y permisos.
- `docs/07-modelado/mockups/`: pantallas HTML estáticas (P01 a P18) con `assets/estilos.css` y `assets/app.js` (arma el menú lateral y la barra superior). Se ven abriendo `index.html` en el navegador, sin servidor.
- `docs/relevamiento/`: guía de entrevista al productor (con sus respuestas) y plan sanitario real.

## Privacidad del productor (importante)

El repo se publica en GitHub. **Los nombres de este repo son ficticios**: "Juan Pérez", "Los Álamos", los códigos SENASA (`AB123`, `CD456`…) y los montos de los mockups reemplazan a los datos reales.

- Los datos reales están solo en `privado/` (en `.gitignore`): la tabla de equivalencias (`privado/datos-reales.json`), los PDFs originales y el respaldo del 2026-11-03.
- **Nunca escribir datos reales del productor fuera de `privado/`**: ni su nombre, ni el del establecimiento, ni la localidad, ni el código SENASA, ni el legajo del alumno, ni montos o fechas sacados del cuaderno. Si el alumno los dicta, escribirlos con su equivalente ficticio.
- Antes de cada commit corre `python scripts/privacidad.py verificar` (hook `pre-commit`): si encuentra un dato real, cancela el commit. No saltearlo con `--no-verify`.
- Para la entrega a la facultad con los datos reales: `python scripts/privacidad.py entrega` genera `privado/entrega/`.
- Si aparece un dato real nuevo (otro nombre, otro código), agregarlo a `prohibidos` y a `entrega` en `privado/datos-reales.json`.

## Cómo ver los mockups

```powershell
start docs\07-modelado\mockups\index.html
```

## Convenciones de la documentación

- Idioma: español rioplatense. Lenguaje de campo en las pantallas ("Nuevo animal", "Vacunar", "Tacto"), nunca jerga técnica.
- Códigos: `OE-` objetivo, `RF-` requisito funcional, `RNF-` no funcional, `RN-` regla de negocio, `HU-` historia de usuario, `CP-` caso de prueba, `R-` riesgo, `M` módulo. Mantener la trazabilidad entre ellos (ver [matriz](docs/04-matriz-trazabilidad.md)).
- Supuestos sin validar se marcan `> ⚠️ **Supuesto — a validar con el productor.**`. Lo confirmado en la entrevista se marca `> ✅ **Validado en la entrevista.**`. Al validar un supuesto, quitar la marca y registrar el cambio.
- Cada documento termina con una tabla de historial de versiones. Al modificar un documento, agregar una fila (versión, fecha, autor, cambios).
- Diagramas en Mermaid.
- Si un cambio afecta requisitos, historias, mockups o pruebas, actualizar también los documentos relacionados para que sigan consistentes.

## Dominio (puntos que conviene no pisar)

- Rodeo Aberdeen Angus con caravanas SENASA (y electrónica); los terneros al pie no tienen caravana, se identifican por pelaje y seña.
- Sin potreros ni inseminación. Temporada de servicio con los toros en grupo.
- Rol "Peón" (antes "Encargado").
- Los wireframes ASCII de `mockups.md` son de la primera versión y no se actualizan; la referencia vigente son los HTML.

## Git

Repo público: https://github.com/Francisco9djul/Mi-Hacienda-Digital. Se trabaja sobre la rama `develop`; `main` es la rama principal y recibe lo estable desde `develop` (la rama local `master` sigue a `origin/main`). Commits en español, descriptivos.
