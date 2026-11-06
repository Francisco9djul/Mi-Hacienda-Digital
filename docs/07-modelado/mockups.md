# Mockups de la Interfaz

> Anexo 1, punto 4 de la guía de la cátedra. Entrega incremental. Son **wireframes de baja fidelidad** para validar con el productor la estructura y el flujo de las pantallas antes del diseño visual.

## Mockups navegables en HTML

Los mockups de alta fidelidad están en [`mockups/`](mockups/index.html): son pantallas HTML estáticas, navegables entre sí y con datos de ejemplo. Para verlas, abrí [`mockups/index.html`](mockups/index.html) en el navegador (doble clic en el archivo). No necesitan servidor ni conexión a internet.

El recorrido de todas las pantallas está descripto en `flujos-mockups.pdf`, que se guarda fuera del repositorio porque contiene datos reales del productor: 24 flujos (más las 10 variantes de la Nueva jornada), con sus puntos de entrada, pasos, resultado y roles, y un anexo con una captura de cada pantalla.

| Código | Pantalla | Archivo | RF |
|---|---|---|---|
| P01 | Inicio de sesión | [login.html](mockups/login.html) | RF-001 |
| P01b | Recuperar contraseña | [recuperar.html](mockups/recuperar.html) | RF-002 |
| P02 | Tablero de inicio | [inicio.html](mockups/inicio.html) | RF-034, RF-019, RF-027 |
| P03 | Listado de animales | [animales.html](mockups/animales.html) | RF-008, RF-033 |
| P04 | Ficha del animal (con modales de baja, anulación, pesada, enfermedad y categoría) | [animal-ficha.html](mockups/animal-ficha.html) | RF-007, RF-009, RF-010, RF-012, RF-013, RF-038, RF-049 |
| P05 | Nuevo animal (caravana SENASA y electrónica, aviso de reingreso) | [animal-nuevo.html](mockups/animal-nuevo.html) | RF-005, RF-006, RF-042, RN-013 |
| P06 | Nueva jornada (asistente de 3 pasos, 12 tipos: vacunar, enfermos, desparasitar, análisis, tacto, servicio, castración, destete, venta, compra, pesar, alimentación) | [jornada-nueva.html](mockups/jornada-nueva.html) | RF-015, RF-016, RF-017, RF-022, RF-023, RF-026, RF-038, RF-040, RF-041, RF-043, RF-046, RN-014, RN-018, RN-020, RN-021, RN-026 |
| P07 | Registrar parto (uno o dos terneros, sin caravana, padre desconocido) | [paricion.html](mockups/paricion.html) | RF-024, RN-005, RN-016 |
| P08 | Reportes: stock, índices y conteo de parición, terneros (mortalidad y enfermedades), ventas, compras y cobros en cuotas, bajas, cobertura | [reportes.html](mockups/reportes.html) | RF-028 a RF-033, RF-039, RF-041, RF-043 |
| P09 | Importar planilla | [importar.html](mockups/importar.html) | RF-014 |
| P10 | Jornadas | [jornadas.html](mockups/jornadas.html) | RF-015, RF-020 |
| P11 | Detalle de jornada | [jornada-detalle.html](mockups/jornada-detalle.html) | RF-020, RF-047, RF-049 |
| P12 | Pendientes (alertas) | [alertas.html](mockups/alertas.html) | RF-019, RF-027, RF-047, RF-048 |
| P13 | Sanidad (con animales enfermos y análisis) | [sanidad.html](mockups/sanidad.html) | RF-016, RF-017, RF-019, RF-020, RF-038, RF-040 |
| P14 | Plan sanitario anual | [plan-sanitario.html](mockups/plan-sanitario.html) | RF-018 |
| P15 | Reproducción | [reproduccion.html](mockups/reproduccion.html) | RF-021 a RF-027 |
| P16 | Catálogos | [catalogos.html](mockups/catalogos.html) | RF-035 |
| P17 | Usuarios y auditoría | [usuarios.html](mockups/usuarios.html) | RF-003, RF-004, RF-050 |
| P18 | Establecimiento y respaldo | [configuracion.html](mockups/configuracion.html) | RF-036, RF-037 |
| P19 | Alimentación y reservas | [alimentacion.html](mockups/alimentacion.html) | RF-046 |

El menú lateral y la barra superior se arman desde [`mockups/assets/app.js`](mockups/assets/app.js) y los estilos comunes están en [`mockups/assets/estilos.css`](mockups/assets/estilos.css). Los wireframes de abajo se conservan como referencia de la primera versión.

> ✅ **Actualizados con la entrevista** (preguntas 1 a 60). Rodeo de ejemplo de 189 cabezas Aberdeen Angus (92 vacas, 87 terneros al pie; números del cuaderno del productor) con caravanas SENASA; terneros al pie sin caravana ("Cría de …"); sin potreros ni inseminación; temporada de servicio con los 4 toros en grupo; tacto sin meses y período de parición; jornadas de **enfermos**, **análisis** y **venta** (terneros por sexo y pelaje, peso del lote, comprador, precio y cobro); caravana electrónica; reingreso; jornada de **compra**; desparasitaciones con contra qué parásito y rotación de drogas; terneros identificados por pelaje y seña; código del establecimiento (AB123) que se completa solo; plan sanitario real; reporte de **mortalidad y enfermedades de terneros**. Los wireframes de abajo son de la primera versión y no se actualizaron. Por el cuaderno (2026-11-03): mellizos, castración, servicio individual, venta con desbaste/comisión/cuotas, compra con ternero, apartados, corregir madre y alimentación.

## Principios de diseño (RNF-003)

- **Pensado para PC primero:** menú lateral fijo, tablas anchas, formularios en dos columnas.
- **Letra grande:** base de 16 px como mínimo, 18 px en botones y títulos. Alto contraste.
- **Lenguaje de campo:** "Nuevo animal", "Vacunar", "Tacto", "Animal enfermo", "Venta", nunca "Crear entidad" o "Registro".
- **Pocas decisiones por pantalla:** un botón principal destacado por pantalla.
- **Buscador de caravana siempre visible** en la barra superior.
- **Confirmación clara:** mensaje verde "Guardado" después de cada carga y advertencias en lenguaje simple.
- **Responsive:** en celular el menú lateral pasa a un menú desplegable y las tablas a tarjetas.

## P01 — Inicio de sesión (RF-001, RF-002)

```
┌──────────────────────────────────────────────────────────┐
│                                                          │
│                    🐄  MI HACIENDA DIGITAL               │
│                    Establecimiento Los Álamos            │
│                                                          │
│            Email                                         │
│            ┌──────────────────────────────────┐          │
│            │                                  │          │
│            └──────────────────────────────────┘          │
│            Contraseña                                    │
│            ┌──────────────────────────────────┐          │
│            │                                  │  👁       │
│            └──────────────────────────────────┘          │
│                                                          │
│            ┌──────────────────────────────────┐          │
│            │            INGRESAR              │          │
│            └──────────────────────────────────┘          │
│                  ¿Te olvidaste la contraseña?            │
│                                                          │
└──────────────────────────────────────────────────────────┘
```

## P02 — Tablero de inicio (RF-034, RF-019, RF-027)

```
┌────────────┬─────────────────────────────────────────────────────────────┐
│ 🐄 MI      │  🔍 Buscar caravana...                       Juan ▾  Salir │
│  HACIENDA  ├─────────────────────────────────────────────────────────────┤
│  DIGITAL   │  Buen día, Juan                         Sábado 10/10/2026 │
│ ▣ Inicio   │                                                             │
│ ▢ Animales │  ┌───────────────┐ ┌───────────────┐ ┌───────────────┐      │
│ ▢ Jornadas │  │ + NUEVO       │ │ + NUEVA       │ │ 🔍 BUSCAR      │      │
│ ▢ Sanidad  │  │   ANIMAL      │ │   JORNADA     │ │   ANIMAL      │      │
│ ▢ Reprod.  │  └───────────────┘ └───────────────┘ └───────────────┘      │
│ ▢ Reportes │                                                             │
│ ▢ Config.  │  RODEO: 412 animales                                        │
│            │  ┌─────────────┬──────┐  ┌──────────────────────────────┐   │
│            │  │ Vacas       │  180 │  │ ⚠ PENDIENTES                  │   │
│            │  │ Vaquillonas │   62 │  │                              │   │
│            │  │ Terneros    │   78 │  │ 🔴 Aftosa atrasada: 12 anim.  │   │
│            │  │ Terneras    │   74 │  │    [Vacunar ahora]           │   │
│            │  │ Novillos    │   10 │  │ 🟡 Refuerzo brucelosis en     │   │
│            │  │ Toros       │    8 │  │    8 días: 40 terneras       │   │
│            │  │─────────────┼──────│  │ 🟡 Partos próximos 30 días: 23│   │
│            │  │ TOTAL       │  412 │  │ 🔵 Para destetar: 65 terneros │   │
│            │  └─────────────┴──────┘  │ 🔵 Vacas vacías último tacto:9│   │
│            │                          │    [Ver todas]               │   │
│            │                          └──────────────────────────────┘   │
└────────────┴─────────────────────────────────────────────────────────────┘
```

## P03 — Listado de animales (RF-008, RF-033)

```
┌────────────┬─────────────────────────────────────────────────────────────┐
│  (menú)    │  ANIMALES                                  [+ NUEVO ANIMAL] │
│            │                                                             │
│            │  Categoría [Todas ▾]  Potrero [Todos ▾]  Sexo [Todos ▾]     │
│            │  Estado [Activos ▾]   Caravana [________]   [Limpiar]       │
│            │                                                             │
│            │  412 animales                         [PDF] [Excel]         │
│            │  ┌──┬──────────┬────────────┬──────┬──────────┬──────────┐  │
│            │  │☐ │ Caravana │ Categoría  │ Edad │ Potrero  │ Estado   │  │
│            │  ├──┼──────────┼────────────┼──────┼──────────┼──────────┤  │
│            │  │☐ │ 0231     │ Vaca       │ 5a   │ Bajo 3   │ Preñada  │  │
│            │  │☐ │ 0232     │ Vaca       │ 4a   │ Bajo 3   │ Vacía ⚠  │  │
│            │  │☐ │ 0418     │ Vaquillona │ 1a8m │ Monte    │ Servida  │  │
│            │  │☐ │ 0502     │ Ternero    │ 5m   │ Bajo 3   │ 💊 Retiro │  │
│            │  │  │ ...      │            │      │          │          │  │
│            │  └──┴──────────┴────────────┴──────┴──────────┴──────────┘  │
│            │  Seleccionados: 0   [Cargar jornada con seleccionados]      │
│            │                                     ◀ 1 2 3 ... 17 ▶        │
└────────────┴─────────────────────────────────────────────────────────────┘
```

## P04 — Ficha del animal (RF-009)

```
┌────────────┬─────────────────────────────────────────────────────────────┐
│  (menú)    │  ◀ Volver                                                   │
│            │  VACA 0231                        [Editar] [Dar de baja]    │
│            │  ┌───────────────────────────┬──────────────────────────┐   │
│            │  │ Caravana oficial: 0231-XX │ Estado: 🟢 ACTIVA          │   │
│            │  │ Raza: Aberdeen Angus      │ Reproductivo: PREÑADA    │   │
│            │  │ Nacimiento: 12/09/2021    │ Parto probable: 18/11/26 │   │
│            │  │ Edad: 5 años              │ Potrero: Bajo 3          │   │
│            │  │ Madre: 0102  Padre: T-04  │ Último peso: 452 kg      │   │
│            │  └───────────────────────────┴──────────────────────────┘   │
│            │                                                             │
│            │  [Sanidad] [Reproducción] [Pesadas] [Movimientos] [Crías]   │
│            │  ───────────────────────────────────────────────────────    │
│            │  REPRODUCCIÓN                        [+ Registrar evento ▾] │
│            │  ┌────────────┬───────────┬──────────────────────────────┐  │
│            │  │ Fecha      │ Evento    │ Detalle                      │  │
│            │  ├────────────┼───────────┼──────────────────────────────┤  │
│            │  │ 15/04/2026 │ Tacto     │ Preñada — 2 meses (veterin.) │  │
│            │  │ 08/02/2026 │ Servicio  │ Natural — Toro T-04          │  │
│            │  │ 20/09/2025 │ Destete   │ Cría 0390 — 180 kg           │  │
│            │  │ 28/09/2024 │ Parición  │ Normal — Ternera 0390        │  │
│            │  └────────────┴───────────┴──────────────────────────────┘  │
└────────────┴─────────────────────────────────────────────────────────────┘
```

## P05 — Nuevo animal (RF-005)

```
┌────────────┬─────────────────────────────────────────────────────────────┐
│  (menú)    │  NUEVO ANIMAL                                               │
│            │                                                             │
│            │  Caravana *              Caravana oficial                   │
│            │  ┌────────────────┐      ┌────────────────┐                 │
│            │  └────────────────┘      └────────────────┘                 │
│            │  Sexo *                  Categoría *                        │
│            │  (●) Hembra ( ) Macho    [Vaquillona ▾]  ← sugerida         │
│            │  Fecha de nacimiento     o Edad aproximada                  │
│            │  [__/__/____] 📅          [__] años [__] meses               │
│            │  Raza                    Pelaje                             │
│            │  [Aberdeen Angus ▾]      [Negro ▾]                          │
│            │  Origen                  Potrero                            │
│            │  (●) Nacido acá ( ) Comprado   [Bajo 3 ▾]                   │
│            │  Madre (caravana)        Padre                              │
│            │  [________] 🔍            [Toro / Pajuela ▾]                 │
│            │  Observaciones                                              │
│            │  ┌──────────────────────────────────────────┐               │
│            │  └──────────────────────────────────────────┘               │
│            │                          [Cancelar]  [ GUARDAR ]            │
└────────────┴─────────────────────────────────────────────────────────────┘
```

## P06 — Nueva jornada (RF-015, RF-016, RF-023)

Paso 1: tipo y datos comunes. Paso 2: animales. Paso 3: confirmar.

```
┌────────────┬─────────────────────────────────────────────────────────────┐
│  (menú)    │  NUEVA JORNADA            ① Tipo ─── ② Animales ─── ③ Listo │
│            │                                                             │
│            │  ¿Qué hiciste?                                              │
│            │  ┌──────────┐┌──────────┐┌──────────┐┌──────────┐           │
│            │  │💉 Vacunar ││🩺 Tacto   ││⚖ Pesar   ││🚚 Mover   │           │
│            │  └──────────┘└──────────┘└──────────┘└──────────┘           │
│            │  ┌──────────┐┌──────────┐┌──────────┐                       │
│            │  │💊 Tratar  ││🐂 Servicio││🍼 Destete │                       │
│            │  └──────────┘└──────────┘└──────────┘                       │
│            │                                                             │
│            │  Fecha: [10/10/2026]   Vacuna: [Aftosa ▾]   Dosis: [2 ml]   │
│            │                                                             │
│            │  ② ¿A qué animales?                                         │
│            │  ( ) Por filtro: Categoría [Vacas ▾] Potrero [Bajo 3 ▾]     │
│            │  (●) Escribir o pegar caravanas (una por línea o con comas):│
│            │  ┌──────────────────────────────────────────┐               │
│            │  │ 0231, 0232, 0233, 0240, 0241, 0299       │               │
│            │  └──────────────────────────────────────────┘               │
│            │  ✔ 5 encontradas   ✖ 1 no existe: 0299  [Ver]               │
│            │                                                             │
│            │                       [Volver]  [ CONFIRMAR 5 ANIMALES ]    │
└────────────┴─────────────────────────────────────────────────────────────┘
```

Variante **tacto por lote**: el paso 2 muestra una tabla para cargar el resultado de cada animal.

```
│  ┌──────────┬───────────┬────────────┬──────────────────────┐  │
│  │ Caravana │ Resultado │ Meses      │ Parto probable       │  │
│  ├──────────┼───────────┼────────────┼──────────────────────┤  │
│  │ 0231     │ [P] V     │ [3]        │ 18/01/2027 (auto)    │  │
│  │ 0232     │  P [V]    │ —          │ —                    │  │
│  │ 0233     │ [P] V     │ [2]        │ 15/02/2027 (auto)    │  │
│  └──────────┴───────────┴────────────┴──────────────────────┘  │
│  Atajo: tecla P = preñada, V = vacía, Enter = siguiente        │
```

## P07 — Registrar parición (RF-024)

```
┌────────────┬─────────────────────────────────────────────────────────────┐
│  (menú)    │  REGISTRAR PARICIÓN — Vaca 0231                             │
│            │                                                             │
│            │  Fecha del parto *        Tipo de parto                     │
│            │  [10/10/2026] 📅           (●) Normal ( ) Asistido ( ) Cesárea│
│            │                                                             │
│            │  LA CRÍA                                                    │
│            │  Estado *    (●) Viva   ( ) Muerta                          │
│            │  Sexo *      ( ) Macho  (●) Hembra                          │
│            │  Caravana    [________]  (se puede cargar después)          │
│            │  Padre       Toro T-04 (del último servicio)  [Cambiar]     │
│            │                                                             │
│            │  ℹ Se va a crear la TERNERA en el sistema, hija de 0231.    │
│            │                                                             │
│            │                          [Cancelar]  [ GUARDAR ]            │
└────────────┴─────────────────────────────────────────────────────────────┘
```

## P08 — Reportes: índices reproductivos (RF-029, RF-033)

```
┌────────────┬─────────────────────────────────────────────────────────────┐
│  (menú)    │  REPORTES  [Stock] [Índices] [Bajas] [Sanidad]              │
│            │                                                             │
│            │  Temporada de servicio: [2025-2026 ▾]       [PDF] [Excel]   │
│            │                                                             │
│            │  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐         │
│            │  │  PREÑEZ      │ │  PARICIÓN    │ │  DESTETE     │         │
│            │  │    88 %      │ │    84 %      │ │    80 %      │         │
│            │  │  211 / 240   │ │  202 / 240   │ │  192 / 240   │         │
│            │  └──────────────┘ └──────────────┘ └──────────────┘         │
│            │                                                             │
│            │  Comparación con temporadas anteriores                      │
│            │  100 ┤                                                      │
│            │   90 ┤      ■         ■                                     │
│            │   80 ┤ ■    ■ ▲  ■    ■ ▲  ●    ■ preñez                    │
│            │   70 ┤ ■ ▲  ■ ▲  ■ ▲  ■ ▲  ●    ▲ parición                  │
│            │      └──────────────────────────  ● destete                 │
│            │       22-23   23-24   24-25   25-26                         │
└────────────┴─────────────────────────────────────────────────────────────┘
```

## Historial de versiones

| Versión | Fecha | Autor | Cambios |
|---|---|---|---|
| 0.1 | 2026-10-10 | Francisco Garcia Martinez | Wireframes de baja fidelidad iniciales |
| 0.2 | 2026-10-10 | Francisco Garcia Martinez | Mockups navegables en HTML de las 19 pantallas de la v1.0, incluidas las que estaban pendientes |
| 0.3 | 2026-10-10 | Francisco Garcia Martinez | Pantalla de usuarios: el rol Encargado pasa a llamarse Peón |
| 0.4 | 2026-10-10 | Francisco Garcia Martinez | Nota: mockups HTML pendientes de ajustar a la entrevista; principio de lenguaje sin potreros |
| 0.5 | 2026-10-10 | Francisco Garcia Martinez | Nota de pendientes ampliada (caravana SENASA, plan sanitario real, jornada de venta) |
| 0.6 | 2026-10-10 | Francisco Garcia Martinez | Mockups HTML actualizados con todo lo relevado en la entrevista |
| 0.7 | 2026-10-10 | Francisco Garcia Martinez | Análisis, datos comerciales de la venta, destete por sexo y pelaje, caravana electrónica, reingreso y sistema productivo |
| 0.8 | 2026-10-10 | Francisco Garcia Martinez | Avisos con 30 días de anticipación; raspaje obligatorio; lote cargado en la vacunación |
| 0.9 | 2026-10-10 | Francisco Garcia Martinez | Jornada de compra, desparasitaciones en el plan, seña de los terneros, código del establecimiento en las caravanas |
| 0.10 | 2026-10-10 | Francisco Garcia Martinez | Vacunación masiva por categoría (con fecha por categoría y serie, sin dosis); carbunclo con 50 vacunados |
| 0.11 | 2026-10-10 | Francisco Garcia Martinez | Tratamiento individual con aviso de revisión; desparasitación por categoría; marca, serie y vencimiento de la vacuna |
| 0.12 | 2026-11-03 | Francisco Garcia Martinez | Documento de flujos de los mockups en PDF (flujos-mockups.pdf) |
| 0.12 | 2026-11-03 | Francisco Garcia Martinez | Cambios del cuaderno del productor: dataset de 189 cabezas, fechas reales, mellizos, castración, servicio individual, venta con desbaste/comisión/cuotas, compra con ternero, apartados, corregir madre y nueva P19 Alimentación |
| 0.13 | 2026-11-03 | Francisco Garcia Martinez | Nombre del proyecto: Mi Hacienda Digital (antes Mi Yerra Digital) en wireframes ASCII, mockups HTML (logo "MH") y flujos-mockups.pdf (capturas nuevas) |
| 0.14 | 2026-11-03 | Francisco Garcia Martinez | Datos del productor reemplazados por datos ficticios (nombre, establecimiento, ubicación, códigos SENASA y montos) para publicar el repositorio; `flujos-mockups.pdf` pasa a guardarse fuera del repositorio |
| 0.15 | 2026-11-04 | Francisco Garcia Martinez | Animales que faltaron vacunar o desparasitar sin identificar (RN-027): cantidad por categoría en la Nueva jornada (P06), aviso con **Resolver** en Pendientes (P12) y tablero (P02), sección en el detalle de la jornada (P11) y cobertura de carbunclo actualizada en Sanidad y Reportes |
| 0.16 | 2026-11-06 | Francisco Garcia Martinez | Animales que faltaron con pelaje, observación y cantidad en la Nueva jornada (P06); avisos identificados y sin identificar en Pendientes (P12) y tablero (P02); modal **Resolver** con las vacas de ese pelaje primero (P11, P12); aviso en la ficha (P04); RF-047 a RF-050 en la trazabilidad de pantallas |
| 0.17 | 2026-11-06 | Francisco Garcia Martinez | Nueva jornada (P06) y Pendientes (P12): sin observación al cargar un animal por caravana |
