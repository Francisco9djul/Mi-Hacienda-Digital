# Mi Hacienda Digital

> **Versión pública.** Los nombres de personas, del establecimiento, la ubicación, los códigos SENASA y los montos de este repositorio son **ficticios**: se reemplazaron para no exponer datos del productor. Los datos de ejemplo de los mockups son ilustrativos.

Aplicación web para la gestión integral del rodeo bovino de un establecimiento ganadero de cría de la Provincia de Buenos Aires (en la documentación, **Los Álamos**). Reemplaza el cuaderno de campo por un registro centralizado de cada animal, con alertas sanitarias y reproductivas y reportes del rodeo.

## Estado actual

**Etapa 1 de 7: relevamiento y análisis de requerimientos.** Todavía no hay código: el repositorio contiene la documentación de análisis y diseño y los mockups navegables.

- **Entrevista con el productor:** el primer encuentro está hecho y casi todas las preguntas tienen respuesta. Se revisaron fotos de su cuaderno de campo (mayo de 2024 a enero de 2026), que agregaron requisitos nuevos.
- **Próximo paso:** segundo encuentro para validar los mockups con el productor ([lista de validación](docs/relevamiento/validacion-mockups.md)) y cerrar los requisitos (hito H1, 08/11/2026).
- **Requisitos:** 50 funcionales (RF-001 a RF-050), 14 no funcionales y 30 reglas de negocio, con sus historias de usuario y casos de prueba trazados en la [matriz](docs/04-matriz-trazabilidad.md).

## Qué va a hacer el sistema (v1.0)

| Módulo | Funciones principales |
|---|---|
| **M1 — Usuarios y seguridad** | Inicio de sesión, usuarios y roles: Administrador, Peón y Consulta. |
| **M2 — Animales** | Alta, baja con motivo, reingreso y ficha con historial completo. Identificación por caravana SENASA (y electrónica). Los terneros al pie sin caravana se identifican por pelaje y seña. Jornadas de trabajo en la manga, ventas y compras con datos comerciales. |
| **M3 — Sanidad** | Plan sanitario anual con ventanas de meses, vacunaciones y desparasitaciones por categoría, tratamientos individuales con período de retiro, casos de enfermedad, análisis y recordatorios de revisión. |
| **M4 — Reproducción** | Temporada de servicio con los toros en grupo, tacto, pariciones (incluidos mellizos), destete y alertas de vacas que no parieron. |
| **M5 — Reportes** | Tablero de inicio, stock por categoría, índices de preñez, parición y destete, mortalidad y enfermedades de terneros, ventas y cobros pendientes. |
| **M6 — Configuración** | Datos del establecimiento, catálogos (razas, categorías, productos, toros, enfermedades) y respaldo. |

Queda para una **v2.0**: versión móvil para cargar en la manga sin señal y lectura de caravanas electrónicas con bastón.

**Plataforma:** aplicación web para PC (Windows y Chrome), hecha con React, Node.js (NestJS) y PostgreSQL, con hosting en planes gratuitos de Render y Neon ([decisión y comparativa](docs/02-plan-del-proyecto.md#92-plataforma-tecnológica--opciones-evaluadas)).

## Cronograma

| Etapa | Descripción | Hito | Fecha |
|---|---|---|---|
| 1 | Relevamiento y análisis de requerimientos | H1 — Requisitos validados | 08/11/2026 |
| 2 | Diseño de base de datos y arquitectura | H2 — Diseño aprobado | 02/12/2026 |
| 3 | Módulo de animales | H3 | 06/01/2027 |
| 4 | Módulo de sanidad | H4 | 03/02/2027 |
| 5 | Módulo de reproducción | H5 | 28/02/2027 |
| 6 | Reportes y estadísticas | H6 | 17/03/2027 |
| 7 | Pruebas, ajustes y documentación final | H7 — Entrega y aceptación | 28/03/2027 |

Detalle en el [cronograma](docs/06-cronograma.md) y la [EDT](docs/05-edt.md).

## Documentación

Toda la documentación está en [`docs/`](docs/README.md), Los diagramas están en Mermaid y GitHub los muestra directamente.

| Documento | Contenido |
|---|---|
| [Glosario](docs/00-glosario.md) | Términos de campo y del proyecto |
| [Propuesta](docs/01-propuesta.md) | Establecimiento, problemática, objetivos, stakeholders |
| [Plan del proyecto](docs/02-plan-del-proyecto.md) | Metodología, ciclo de vida, recursos, versiones, plataforma |
| [Alcance y requisitos](docs/03-alcance-y-requisitos.md) | Alcance, supuestos, exclusiones, módulos, RF, RNF, reglas de negocio |
| [Matriz de trazabilidad](docs/04-matriz-trazabilidad.md) | Objetivo → requisito → historia → prueba |
| [EDT](docs/05-edt.md) | Estructura de desglose del trabajo |
| [Cronograma](docs/06-cronograma.md) | Etapas, horas e hitos |
| [Historias de usuario](docs/07-modelado/historias-de-usuario.md) | Historias con criterios de aceptación |
| [DER](docs/07-modelado/der.md) | Modelo de datos |
| [Diagrama de clases](docs/07-modelado/diagrama-de-clases.md) | Modelo de dominio ([PDF](docs/07-modelado/modelo-de-dominio.pdf)) |
| [Mockups](docs/07-modelado/mockups.md) | Pantallas y flujos |
| [Plan de pruebas](docs/07-modelado/plan-de-pruebas.md) | Estrategia y casos de prueba |
| [Roles y permisos](docs/07-modelado/roles-y-permisos.md) | Matriz de permisos por rol |
| [Presupuesto](docs/08-presupuesto.md) | Costos por fase y por recurso, curva S |
| [Riesgos](docs/09-riesgos.md) | Registro, análisis y plan de respuesta |
| [Guía de entrevista](docs/relevamiento/guia-entrevista-productor.md) | Preguntas al productor, con sus respuestas |
| [Plan sanitario](docs/relevamiento/plan-sanitario-establecimiento.md) | Calendario de vacunación y desparasitación relevado |
| [Validación de mockups](docs/relevamiento/validacion-mockups.md) | Checklist para revisar las pantallas con el productor |

## Privacidad

Los datos reales del productor no forman parte de este repositorio. Antes de cada commit, [`scripts/privacidad.py`](scripts/privacidad.py) verifica que no se haya colado ninguno.
