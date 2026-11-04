# Documentación — Mi Hacienda Digital

Documentación del proyecto, elaborada antes de iniciar el desarrollo. La estructura sigue la Guía de Trabajos Prácticos de la cátedra Proyecto Final (UTN FRLP, 2026), adaptada a una Práctica Supervisada individual.

## Índice

| # | Documento | Equivalente en la guía de la cátedra |
|---|---|---|
| 00 | [Glosario](00-glosario.md) | — |
| 01 | [Propuesta](01-propuesta.md) | Actividad 2 — Propuesta del tema |
| 02 | [Plan del proyecto](02-plan-del-proyecto.md) | Actividad 3 — Planificación |
| 03 | [Alcance y requisitos](03-alcance-y-requisitos.md) | Actividad 4a/4b — Plan de gestión del alcance |
| 04 | [Matriz de trazabilidad](04-matriz-trazabilidad.md) | Actividad 4a — Matriz de trazabilidad de requisitos |
| 05 | [EDT](05-edt.md) | Actividad 4b — Estructura de desglose de trabajo |
| 06 | [Cronograma](06-cronograma.md) | Actividad 5 — Plan de gestión del cronograma |
| 07 | [Modelado](07-modelado/) | Actividad 6 — Modelado de la solución |
| | ↳ [Historias de usuario](07-modelado/historias-de-usuario.md) | Anexo 1, punto 1 |
| | ↳ [DER](07-modelado/der.md) | Anexo 1, punto 2 |
| | ↳ [Diagrama de clases](07-modelado/diagrama-de-clases.md) | Anexo 1, punto 3 |
| | ↳ [Mockups](07-modelado/mockups.md) | Anexo 1, punto 4 |
| | ↳ [Plan de pruebas](07-modelado/plan-de-pruebas.md) | Anexo 1, punto 5 |
| | ↳ [Roles y permisos](07-modelado/roles-y-permisos.md) | Anexo 1, punto 6 |
| 08 | [Presupuesto](08-presupuesto.md) | Actividad 7 — Plan de gestión del presupuesto |
| 09 | [Riesgos](09-riesgos.md) | Actividad 8 — Plan de gestión de riesgos |
| — | [Guía de entrevista al productor](relevamiento/guia-entrevista-productor.md) | Técnicas de elicitación |
| — | [Plan sanitario de Los Álamos](relevamiento/plan-sanitario-establecimiento.md) | Relevamiento (calendario de vacunación del productor) |
| — | [Validación de los mockups](relevamiento/validacion-mockups.md) | Checklist de los 44 flujos para mostrarle al productor |

## Convenciones

### Códigos

| Prefijo | Significado | Ejemplo |
|---|---|---|
| `OE-` | Objetivo específico | OE-01 |
| `RF-` | Requisito funcional | RF-005 |
| `RNF-` | Requisito no funcional | RNF-003 |
| `RN-` | Regla de negocio | RN-001 |
| `HU-` | Historia de usuario | HU-05 |
| `CP-` | Caso de prueba | CP-005 |
| `R-` | Riesgo | R-03 |
| `M` | Módulo | M2 |

### Supuestos

Esta documentación se armó a partir de la propuesta de Práctica Supervisada, **antes** del relevamiento formal con el productor. Todo lo que no figura en la propuesta y debe confirmarse se marca así:

> ⚠️ **Supuesto — a validar con el productor.**

Cada supuesto tiene su pregunta en la [guía de entrevista](relevamiento/guia-entrevista-productor.md). Cuando se valide, se quita la marca y se registra el cambio en el historial de versiones del documento.

Lo confirmado con el productor se indica con:

> ✅ **Validado en la entrevista.**

Las respuestas completas quedan en el [registro de la entrevista](relevamiento/guia-entrevista-productor.md#registro-de-la-entrevista).

### Diagramas

Los diagramas están en [Mermaid](https://mermaid.js.org/). GitHub y la vista previa de Markdown de VS Code los muestran sin herramientas extra.

### Versionado

Cada documento termina con una tabla de historial de versiones. Los cambios a la documentación se registran en git junto al código.
