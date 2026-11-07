# Roles y Permisos

> Anexo 1, punto 6 de la guía de la cátedra.

> ✅ **Validado en la entrevista** (bloque A). El sistema lo usa solo el productor, que entra como **Administrador**. Él es también el veterinario del establecimiento. No tiene personal fijo, pero le parece bien contar con el rol **Peón** para el futuro, y la familia podría consultar los datos (**Consulta**). El rol Veterinario se quitó el 2026-11-06: no hay un veterinario aparte.

## Roles

| Rol | Quién | Objetivo |
|---|---|---|
| **Administrador** | Productor y veterinario (Juan Pérez) | Control total del sistema |
| **Peón** | Peón que ayuda en la manga | Cargar el trabajo diario sin poder borrar ni anular |
| **Consulta** | Familia del productor; también contador o asesor | Solo lectura de fichas y reportes |

## Matriz de permisos

**C** = crear · **L** = leer · **M** = modificar · **B** = dar de baja / anular · — = sin acceso

| Funcionalidad | RF | Administrador | Peón | Consulta |
|---|---|---|---|---|
| Iniciar sesión / recuperar contraseña | RF-001, RF-002 | ✔ | ✔ | ✔ |
| Gestionar usuarios | RF-003 | CLMB | — | — |
| Ver auditoría | RF-004 | L | — | — |
| Animales: alta y modificación | RF-005, RF-006 | CLM | CLM | L |
| Animales: baja y reingreso | RF-007, RF-042 | B | — | — |
| Datos comerciales de ventas y compras | RF-041, RF-043 | CLMB | — | L |
| Buscar animales / ver ficha | RF-008, RF-009 | L | L | L |
| Cambio de categoría | RF-010 | CLM | CLM | L |
| Pesadas | RF-012 | CLMB | CLM | L |
| Genealogía | RF-013 | CLM | CLM | L |
| Importar planilla | RF-014 | C | — | — |
| Jornadas | RF-015 | CLMB | CLM | L |
| Vacunaciones, tratamientos, casos de enfermedad y análisis | RF-016, RF-017, RF-038, RF-040 | CLMB | CLM | L |
| Plan sanitario | RF-018 | CLMB | L | L |
| Alertas sanitarias | RF-019 | L | L | L |
| Resolver animales que no se vacunaron o desparasitaron | RF-047 | CLMB | CLM | L |
| Pendientes | RF-048 | L | L | L |
| Finalizar un animal en tratamiento | RF-038, RN-029 | M | M, solo "se recuperó" | — |
| Anular registros y jornadas | RF-049 | B | — | — |
| Recordatorios de revisión | RF-044 | CLMB | CLM | L |
| Animales apartados | RF-045 | CLMB | CLM | L |
| Alimentación y reservas | RF-046 | CLMB | CLM | L |
| Historial sanitario | RF-020 | L | L | L |
| Eventos reproductivos | RF-021 a RF-026 | CLMB | CLM | L |
| Alertas reproductivas | RF-027 | L | L | L |
| Reportes y tablero | RF-028 a RF-032, RF-034, RF-039 | L | L | L |
| Exportar PDF y Excel | RF-033 | ✔ | ✔ | ✔ |
| Catálogos | RF-035 | CLMB | L | L |
| Datos del establecimiento | RF-036 | CLM | L | L |
| Respaldo completo | RF-037 | ✔ | — | — |

## Reglas

- **Anulación:** solo el Administrador anula eventos y da de baja animales (RN-011). Si otro rol cargó un dato erróneo, lo corrige con M mientras el evento sea del día; después, debe pedir la anulación al Administrador.
- **Control en el servidor:** los permisos se validan en la API, no solo ocultando botones en la interfaz (RF-050, RNF-007).
- **Último administrador:** no se puede deshabilitar ni cambiar de rol al único Administrador activo.
- **Jornada de venta:** como da de baja animales, solo el Administrador puede confirmarla (RN-011).
- **Puesta en marcha:** la v1.0 se entrega con un solo usuario, el Administrador. Los demás usuarios los crea el productor cuando los necesite.

## Historial de versiones

| Versión | Fecha | Autor | Cambios |
|---|---|---|---|
| 0.1 | 2026-10-10 | Francisco Garcia Martinez | Versión inicial |
| 0.2 | 2026-10-10 | Francisco Garcia Martinez | Validado con el productor: único usuario Administrador; el rol Encargado pasa a llamarse Peón |
| 0.3 | 2026-10-10 | Francisco Garcia Martinez | Sin movimientos entre potreros (RF-011 excluido) |
| 0.4 | 2026-10-10 | Francisco Garcia Martinez | Regla para la jornada de venta |
| 0.5 | 2026-10-10 | Francisco Garcia Martinez | Permisos de RF-038 y RF-039 |
| 0.6 | 2026-10-10 | Francisco Garcia Martinez | Permisos de RF-040 a RF-042 |
| 0.7 | 2026-10-10 | Francisco Garcia Martinez | Permisos de RF-043 |
| 0.8 | 2026-10-10 | Francisco Garcia Martinez | Permisos de RF-044 |
| 0.9 | 2026-11-03 | Francisco Garcia Martinez | Permisos de RF-045 y RF-046 |
| 0.10 | 2026-11-03 | Francisco Garcia Martinez | Datos del productor reemplazados por datos ficticios (nombre, establecimiento, ubicación, códigos SENASA y montos) para publicar el repositorio |
| 0.11 | 2026-11-06 | Francisco Garcia Martinez | Permisos de RF-047, RF-048 y RF-049; control de permisos vinculado a RF-050 |
| 0.12 | 2026-11-06 | Francisco Garcia Martinez | Se quita el rol Veterinario y su columna en la matriz |
| 0.13 | 2026-11-07 | Francisco Garcia Martinez | Permiso para finalizar un animal en tratamiento (RN-029) |
