# Validación de los mockups con el productor

> Lista de todos los flujos de la aplicación, para mostrárselos al productor uno por uno (preguntas 41 a 44 de la [guía de entrevista](guia-entrevista-productor.md)). Cuando da el visto bueno, se tilda el casillero (`- [ ]` → `- [x]`) y se anota la fecha. Si pide cambios, se anotan en **Observaciones** y el flujo queda sin tildar hasta volver a mostrarlo.

**Cómo abrir los mockups:** `start docs\07-modelado\mockups\index.html` (o hacer clic en cada enlace). Los datos son de ejemplo y los botones "Guardar" no guardan nada.

**En cada flujo preguntarle:** ¿se entiende? ¿Es así como lo hace? ¿Le falta o le sobra algo? ¿Usaría otras palabras? *(pregunta 44: anotar los nombres que use él)*

## Avance

| Módulo | Flujos | Aprobados |
|---|---|---|
| 1. Entrada y tablero | 3 | 0 |
| 2. Animales | 6 | 0 |
| 3. Jornadas | 14 | 0 |
| 4. Sanidad | 6 | 0 |
| 5. Reproducción | 5 | 0 |
| 6. Reportes | 6 | 0 |
| 7. Alimentación | 1 | 0 |
| 8. Configuración | 3 | 0 |
| **Total** | **44** | **0** |

---

## 1. Entrada y tablero

- [ ] **F01 — Iniciar sesión y recuperar la contraseña** · [login](../07-modelado/mockups/login.html) · [recuperar](../07-modelado/mockups/recuperar.html)
  - Mostrar: entrar con email y contraseña; qué pasa si se la olvida.
  - Fecha OK: ____ · Observaciones:
- [ ] **F02 — Tablero de inicio** · [inicio](../07-modelado/mockups/inicio.html) *(pregunta 41)*
  - Mostrar: accesos rápidos, rodeo por categoría, pendientes del día, preñez, enfermos y mortalidad de terneros, últimas jornadas.
  - Preguntar: ¿qué agregaría o sacaría?
  - Fecha OK: ____ · Observaciones:
- [ ] **F03 — Pendientes** · [pendientes](../07-modelado/mockups/alertas.html)
  - Mostrar: vacunas obligatorias, ventana del plan abierta, animales en tratamiento (llevan a Sanidad y se actualizan solos), revisiones de animales tratados, vacas que faltan parir, terneros sin castrar, cuotas por cobrar, apartados, rollos.
  - Preguntar: ¿los 30 días de anticipación le sirven?
  - Fecha OK: ____ · Observaciones:

## 2. Animales

- [ ] **F04 — Listado de animales** · [animales](../07-modelado/mockups/animales.html)
  - Mostrar: buscar por caravana (o la de la madre), filtros, terneros al pie como "Cría de …", exportar a PDF y Excel.
  - Fecha OK: ____ · Observaciones:
- [ ] **F05 — Ficha del animal** · [ficha](../07-modelado/mockups/animal-ficha.html) *(pregunta 42)*
  - Mostrar: datos, resumen, pestañas de reproducción, sanidad, pesadas, categorías, crías y genealogía; corregir la madre; servicio individual con toro conocido.
  - Preguntar: ¿es la información que busca de una vaca?
  - Fecha OK: ____ · Observaciones:
- [ ] **F06 — Nuevo animal y reingreso** · [nuevo animal](../07-modelado/mockups/animal-nuevo.html)
  - Mostrar: caravana SENASA con formato validado, caravana electrónica, raza preseleccionada, aviso de reingreso de un animal que vuelve de otro campo.
  - Fecha OK: ____ · Observaciones:
- [ ] **F07 — Dar de baja** · [ficha → Dar de baja](../07-modelado/mockups/animal-ficha.html)
  - Mostrar: venta, muerte (causa si la sabe), traslado a otro campo propio.
  - Fecha OK: ____ · Observaciones:
- [ ] **F08 — Apartar para vender o descartar** · [animales](../07-modelado/mockups/animales.html) · [ficha → Apartar](../07-modelado/mockups/animal-ficha.html)
  - Mostrar: marcar animales apartados, verlos en el listado y cargarlos en la venta.
  - Fecha OK: ____ · Observaciones:
- [ ] **F09 — Importar el rodeo desde una planilla** · [importar](../07-modelado/mockups/importar.html)
  - Mostrar: planilla modelo, revisión de errores fila por fila.
  - Preguntar: ¿prefiere cargar el rodeo inicial a mano o con una planilla?
  - Fecha OK: ____ · Observaciones:

## 3. Jornadas (cargar muchos animales de una vez) *(pregunta 43)*

- [ ] **F10 — Vacunar** (por categoría, con marca, serie y vencimiento) · [abrir](../07-modelado/mockups/jornada-nueva.html?tipo=vacunar)
  - Mostrar: si faltaron animales, carga una o varias caravanas o, si no se acuerda, por categoría con pelaje y observación ("vaca colorada, la que estaba renga"). Queda con aviso en [Pendientes](../07-modelado/mockups/alertas.html) y con **Resolver** elige la caravana entre las vacas coloradas, marca que ya la vacunó o que no se va a vacunar.
  - Fecha OK: ____ · Observaciones:
- [ ] **F11 — Desparasitar** (por categoría, contra qué, aviso para rotar la droga) · [abrir](../07-modelado/mockups/jornada-nueva.html?tipo=desparasitar)
  - Mostrar: los que faltaron, igual que en la vacunación; un animal identificado también queda con aviso y figura en su [ficha](../07-modelado/mockups/animal-ficha.html).
  - Fecha OK: ____ · Observaciones:
- [ ] **F12 — Enfermos** (cada animal por caravana, por la madre o sin identificar) · [abrir](../07-modelado/mockups/jornada-nueva.html?tipo=enfermos)
  - Fecha OK: ____ · Observaciones:
- [ ] **F13 — Análisis** (raspaje de toros, sangrado, resultado por animal) · [abrir](../07-modelado/mockups/jornada-nueva.html?tipo=analisis)
  - Fecha OK: ____ · Observaciones:
- [ ] **F14 — Tacto** (preñada o vacía, parición esperada) · [abrir](../07-modelado/mockups/jornada-nueva.html?tipo=tacto)
  - Fecha OK: ____ · Observaciones:
- [ ] **F15 — Servicio** (entrada y salida de los 4 toros) · [abrir](../07-modelado/mockups/jornada-nueva.html?tipo=servicio)
  - Fecha OK: ____ · Observaciones:
- [ ] **F16 — Castración** · [abrir](../07-modelado/mockups/jornada-nueva.html?tipo=castrar)
  - Fecha OK: ____ · Observaciones:
- [ ] **F17 — Destete** (por sexo y pelaje, caravanas con AB123 automático) · [abrir](../07-modelado/mockups/jornada-nueva.html?tipo=destete)
  - Fecha OK: ____ · Observaciones:
- [ ] **F18 — Venta** (kilos del lote, desbaste, precio, comisión, neto, cuotas de cobro) · [abrir](../07-modelado/mockups/jornada-nueva.html?tipo=venta)
  - Preguntar: ¿los datos de la venta son los que anota en el cuaderno?
  - Fecha OK: ____ · Observaciones:
- [ ] **F19 — Compra** (vacas con ternero al pie, forma de pago) · [abrir](../07-modelado/mockups/jornada-nueva.html?tipo=compra)
  - Fecha OK: ____ · Observaciones:
- [ ] **F20 — Pesar** · [abrir](../07-modelado/mockups/jornada-nueva.html?tipo=pesar)
  - Fecha OK: ____ · Observaciones:
- [ ] **F21 — Alimentación** (rollos, silo, parcela) · [abrir](../07-modelado/mockups/jornada-nueva.html?tipo=alimentar)
  - Fecha OK: ____ · Observaciones:
- [ ] **F22 — Historial de jornadas** · [jornadas](../07-modelado/mockups/jornadas.html)
  - Fecha OK: ____ · Observaciones:
- [ ] **F23 — Detalle y anulación de una jornada** · [detalle](../07-modelado/mockups/jornada-detalle.html)
  - Fecha OK: ____ · Observaciones:

## 4. Sanidad

- [ ] **F24 — Vacunas pendientes según el plan** · [sanidad](../07-modelado/mockups/sanidad.html)
  - Fecha OK: ____ · Observaciones:
- [ ] **F25 — Tratamiento del animal enfermo y aviso para revisarlo** · [sanidad → Animal enfermo](../07-modelado/mockups/sanidad.html) · [sanidad → enfermos → Tratar](../07-modelado/mockups/sanidad.html#enfermos)
  - Mostrar: el enfermo y su tratamiento en una sola carga, agregar otro después, retiro calculado, "avisarme en 3 días".
  - Preguntar: lo que no es una enfermedad (una herida, una vitamina), ¿lo cargaría con la enfermedad "Otra" o suma opciones al catálogo? ¿Algún tratamiento no tiene que quedar en seguimiento?
  - Fecha OK: ____ · Observaciones:
- [ ] **F26 — Animales enfermos** · [sanidad → enfermos](../07-modelado/mockups/sanidad.html#enfermos)
  - Mostrar: una sola grilla, con o sin tratamiento, y sus filtros; finalizar un animal (se recuperó o murió) y ver que el aviso desaparece de Pendientes; un caso sin identificar ("ternero colorado, estaba rengo") en el historial y sin ficha. Confirmar con el productor qué pasa si muere: cuenta en la mortalidad y el stock baja en 1 (RN-028).
  - Fecha OK: ____ · Observaciones:
- [ ] **F27 — Análisis y período de retiro** · [análisis](../07-modelado/mockups/sanidad.html#analisis) · [retiro](../07-modelado/mockups/sanidad.html#retiro)
  - Fecha OK: ____ · Observaciones:
- [ ] **F28 — Historial y búsqueda por serie de vacuna** · [historial](../07-modelado/mockups/sanidad.html#historial)
  - Fecha OK: ____ · Observaciones:
- [ ] **F29 — Plan sanitario anual** · [plan sanitario](../07-modelado/mockups/plan-sanitario.html)
  - Mostrar: vacunas, desparasitaciones y análisis con sus meses; ítems inactivos (neumonía, aftosa estratégica).
  - Preguntar: ¿está bien el plan? Confirmar que la mosca va de diciembre a marzo. Llevar también el [plan relevado](plan-sanitario-establecimiento.md).
  - Fecha OK: ____ · Observaciones:

## 5. Reproducción

- [ ] **F30 — Avance de la parición** · [reproducción](../07-modelado/mockups/reproduccion.html#paricion)
  - Mostrar: paridas, nacidos por pelaje y sexo, mellizos, vacas que faltan parir.
  - Fecha OK: ____ · Observaciones:
- [ ] **F31 — Registrar un parto (y mellizos)** · [parto](../07-modelado/mockups/paricion.html)
  - Fecha OK: ____ · Observaciones:
- [ ] **F32 — Temporada de servicio y servicio individual** · [temporada](../07-modelado/mockups/reproduccion.html#temporada)
  - Fecha OK: ____ · Observaciones:
- [ ] **F33 — Vacías** · [vacías](../07-modelado/mockups/reproduccion.html#vacias)
  - Fecha OK: ____ · Observaciones:
- [ ] **F34 — Terneros al pie** · [terneros](../07-modelado/mockups/reproduccion.html#terneros)
  - Fecha OK: ____ · Observaciones:

## 6. Reportes

- [ ] **F35 — Stock y cómo varía en el año** · [stock](../07-modelado/mockups/reportes.html#stock)
  - Fecha OK: ____ · Observaciones:
- [ ] **F36 — Índices y conteo de la parición** · [índices](../07-modelado/mockups/reportes.html#indices)
  - Fecha OK: ____ · Observaciones:
- [ ] **F37 — Mortalidad y enfermedades de terneros** · [terneros](../07-modelado/mockups/reportes.html#terneros)
  - Fecha OK: ____ · Observaciones:
- [ ] **F38 — Ventas, compras y cobros** · [ventas](../07-modelado/mockups/reportes.html#ventas)
  - Fecha OK: ____ · Observaciones:
- [ ] **F39 — Bajas** · [bajas](../07-modelado/mockups/reportes.html#bajas)
  - Fecha OK: ____ · Observaciones:
- [ ] **F40 — Cobertura sanitaria** · [cobertura](../07-modelado/mockups/reportes.html#cobertura)
  - Fecha OK: ____ · Observaciones:

## 7. Alimentación

- [ ] **F41 — Alimentación y reservas** · [alimentación](../07-modelado/mockups/alimentacion.html)
  - Mostrar: stock de rollos y silo, últimas entregas, entrada de rollos.
  - Fecha OK: ____ · Observaciones:

## 8. Configuración

- [ ] **F42 — Establecimiento y copia de seguridad** · [establecimiento](../07-modelado/mockups/configuracion.html)
  - Mostrar: código AB123, avisos a 30 días, temporada habitual, copia de seguridad.
  - Fecha OK: ____ · Observaciones:
- [ ] **F43 — Catálogos** · [catálogos](../07-modelado/mockups/catalogos.html)
  - Mostrar: productos con marca y forma de aplicación, enfermedades, toros, categorías, razas.
  - Fecha OK: ____ · Observaciones:
- [ ] **F44 — Usuarios y auditoría** · [usuarios](../07-modelado/mockups/usuarios.html)
  - Mostrar: él como administrador, la familia como consulta, qué hace cada rol.
  - Fecha OK: ____ · Observaciones:

---

## Dudas para aprovechar el encuentro

- [ ] ¿Qué significa "(Azul)" al lado de algunas vacas en el cuaderno?
- [ ] En la vacunación, "la fecha de la categoría": ¿es la fecha en que se vacunó cada categoría?
- [ ] ¿De qué tamaño es la pantalla de su PC?
- [ ] Cuando falta un animal y no se acuerda de la caravana, ¿le sirve anotar la categoría, el pelaje y una observación ("vaca colorada, la que estaba renga")? ¿Le sirve que todos los que no se vacunaron queden con aviso hasta resolverlos, y elegir la caravana después entre las vacas de ese pelaje? *(RN-027)*

## Nombres que usa el productor *(pregunta 44)*

| Dice | En la app dice | ¿Cambiar? |
|---|---|---|
| | | |

## Historial de versiones

| Versión | Fecha | Autor | Cambios |
|---|---|---|---|
| 0.1 | 2026-11-03 | Francisco Garcia Martinez | Versión inicial: 44 flujos para validar con el productor |
| 0.2 | 2026-11-03 | Francisco Garcia Martinez | Datos del productor reemplazados por datos ficticios (nombre, establecimiento, ubicación, códigos SENASA y montos) para publicar el repositorio |
| 0.3 | 2026-11-04 | Francisco Garcia Martinez | Faltantes sin identificar en F10 y F11, y duda para confirmar RN-027 con el productor |
| 0.4 | 2026-11-06 | Francisco Garcia Martinez | Faltantes con pelaje y observación, aviso para todos y duda de RN-027 ampliada |
| 0.5 | 2026-11-06 | Francisco Garcia Martinez | F10: se pueden cargar varias caravanas |
| 0.6 | 2026-11-06 | Francisco Garcia Martinez | F12: filas de animales enfermos |
| 0.7 | 2026-11-07 | Francisco Garcia Martinez | F12 y F26: animales sin identificar; RN-028 a confirmar con el productor |
| 0.8 | 2026-11-07 | Francisco Garcia Martinez | F03: animales en tratamiento |
| 0.9 | 2026-11-07 | Francisco Garcia Martinez | F25: tratamiento dentro del animal enfermo; consulta por lo que no es una enfermedad |
| 0.10 | 2026-11-07 | Francisco Garcia Martinez | F03, F25 y F26: tratar y finalizar en Sanidad |
| 0.11 | 2026-11-07 | Francisco Garcia Martinez | F26: grilla única de enfermos y filtros |
