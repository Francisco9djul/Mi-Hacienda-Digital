# Gestión de la memoria en este proyecto

## Qué guardar

- **Decisiones del productor** que surjan fuera de la guía de entrevista (cambios de criterio, aclaraciones por mensaje o llamada), con la fecha.
- **Preferencias de trabajo del alumno** (formato de entrega, tono, nivel de detalle, qué no tocar).
- **Estado del relevamiento**: qué bloques de la entrevista están respondidos y qué supuestos siguen sin validar.
- **Contexto académico**: fechas de entrega, correcciones del docente tutor, requisitos de la cátedra que no estén en la guía.
- **Referencias externas**: links a carpetas de Drive, planillas del productor, normativa SENASA consultada.

## Qué NO guardar

- Nada que ya esté en `docs/`, en `CLAUDE.md` o en el historial de git: ahí es la fuente de verdad.
- Detalles de una tarea puntual que no sirven en sesiones futuras.
- Datos personales del productor o de terceros más allá de lo necesario para el proyecto.

## Cómo

- Un archivo por hecho, con frontmatter (`name`, `description`, `metadata.type`), y una línea en `MEMORY.md`.
- Antes de crear una memoria, buscar si ya existe una sobre el tema y actualizarla en vez de duplicar.
- Fechas siempre absolutas (`2026-10-13`), nunca relativas ("ayer", "la semana que viene").
- Si una memoria contradice lo que dicen `docs/` o el código, verificar y corregir o borrar la memoria.
- Cuando un supuesto se valida, la fuente de verdad pasa a ser `docs/` (quitar la marca y actualizar el historial de versiones); la memoria solo recuerda el contexto de la decisión.
- Al guardar una memoria de tipo `feedback` o `project`, incluir **Why** y **How to apply**.

## Cuándo consultarla

- Al empezar una sesión, antes de proponer cambios en la documentación.
- Antes de marcar un supuesto como validado o de cambiar un requisito.
- Si el alumno pide "recordá" o "acordate", guardarlo; si pide "olvidá", borrarlo.
