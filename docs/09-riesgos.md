# 09 — Plan de Gestión de Riesgos

> Equivalente a las plantillas 112 (registro), 113 (análisis cualitativo) y 115 (plan de respuesta) de la cátedra.

## 1. Escalas

| Valor | Probabilidad | Impacto |
|---|---|---|
| 1 | Muy baja (< 10%) | Insignificante: sin efecto en los objetivos |
| 2 | Baja (10–30%) | Menor: retraso < 1 semana o ajuste menor de alcance |
| 3 | Media (30–50%) | Moderado: retraso de 1–2 semanas o se posterga una funcionalidad Should |
| 4 | Alta (50–70%) | Mayor: retraso > 2 semanas o se posterga una funcionalidad Must |
| 5 | Muy alta (> 70%) | Crítico: el proyecto no puede completarse o el sistema no se usa |

**Exposición = Probabilidad × Impacto** → 🔴 Alta (≥ 12) · 🟡 Media (6–11) · 🟢 Baja (≤ 5)

## 2. Registro de riesgos

| ID | Riesgo | Causa | Consecuencia | Categoría |
|---|---|---|---|---|
| R-01 | El productor no adopta el sistema y sigue con papel | Poca experiencia tecnológica, interfaz compleja, falta de hábito | El sistema no genera valor (no se cumple OE-06) | Usuario |
| R-02 | Requisitos mal entendidos o cambiantes | Dominio ganadero desconocido para el alumno, supuestos sin validar | Retrabajo, módulos que no sirven | Alcance |
| R-03 | Subestimación de horas | Un solo desarrollador, primera experiencia con algún componente del stack | Retraso en el cronograma, recorte de alcance | Cronograma |
| R-04 | Baja disponibilidad del alumno por la cursada y los exámenes | Superposición con otras materias y el Proyecto Final | Retraso | Recursos |
| R-05 | Poca disponibilidad del productor para entrevistas y demos | Temporada de trabajo de campo (servicio, parición, yerra), distancia | Validaciones demoradas, requisitos sin confirmar | Stakeholders |
| R-06 | Conexión a internet deficiente en la casa del productor | Zona rural | Sistema lento o inutilizable | Técnico |
| R-07 | Datos históricos desordenados o incompletos para importar | Registros en papel o planillas heterogéneas | Importación costosa, rodeo incompleto | Datos |
| R-08 | Pérdida de datos en producción | Falla del proveedor, error humano, borrado accidental | Pérdida de información del rodeo | Técnico |
| R-09 | Los planes gratuitos de hosting cambian sus condiciones, se quedan cortos o se discontinúan | El cliente pidió costo de operación cero (RNF-012: USD 0) | El sistema se apaga o hay que migrarlo después de la PS | Económico |
| R-10 | Falta de mantenimiento después de la PS | El alumno termina la práctica | El sistema queda desactualizado o sin soporte ante fallas | Operativo |
| R-11 | Elección de un stack poco adecuado | Decisión apresurada en la etapa 2 | Lentitud de desarrollo, problemas de rendimiento o de PWA futura | Técnico |
| R-12 | Acceso no autorizado a los datos | Contraseñas débiles, vulnerabilidades | Exposición de información del establecimiento | Seguridad |

## 3. Análisis cualitativo

| ID | Prob. | Impacto | Exposición | Prioridad |
|---|---|---|---|---|
| R-01 | 3 | 5 | 15 | 🔴 Alta |
| R-02 | 4 | 4 | 16 | 🔴 Alta |
| R-03 | 4 | 3 | 12 | 🔴 Alta |
| R-04 | 3 | 3 | 9 | 🟡 Media |
| R-05 | 3 | 3 | 9 | 🟡 Media |
| R-07 | 3 | 3 | 9 | 🟡 Media |
| R-06 | 1 | 4 | 4 | 🟢 Baja |
| R-10 | 3 | 3 | 9 | 🟡 Media |
| R-08 | 1 | 5 | 5 | 🟢 Baja |
| R-09 | 3 | 4 | 12 | 🔴 Alta |
| R-11 | 2 | 3 | 6 | 🟡 Media |
| R-12 | 1 | 4 | 4 | 🟢 Baja |

### Matriz de probabilidad e impacto

| Prob. \ Impacto | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| **5** | | | | | |
| **4** | | | R-03 | R-02 | |
| **3** | | | R-04, R-05, R-07, R-10 | R-09 | R-01 |
| **2** | | | R-11 | | |
| **1** | | | | R-06, R-12 | R-08 |

## 4. Plan de respuesta

| ID | Estrategia | Acciones | Disparador | Responsable |
|---|---|---|---|---|
| R-01 | **Mitigar** | Validar los mockups con el productor antes de desarrollar; diseño para PC con letra grande y lenguaje de campo; carga por jornada; demo en cada iteración; capacitación presencial; manual con capturas | El productor no carga datos entre dos demos | Alumno |
| R-02 | **Mitigar** | Entrevista con la [guía](relevamiento/guia-entrevista-productor.md) antes de cerrar requisitos; observar una jornada en la manga; marcar los supuestos ⚠️; validar sanidad y reproducción con el productor, que es veterinario; demos frecuentes | Más de 3 cambios de requisitos Must en una iteración | Alumno |
| R-03 | **Mitigar** | Priorización MoSCoW: las HU Should se postergan primero (el relevamiento sumó HU-38 a HU-42; las Should HU-41 a HU-43 y HU-45, y la Could HU-46, son las primeras candidatas); seguimiento semanal de horas; reserva de contingencia | Desvío acumulado > 15% | Alumno |
| R-04 | **Mitigar / Aceptar** | Planificar las semanas de exámenes con menor carga; informar al tutor con anticipación | Semana con < 5 hs dedicadas | Alumno |
| R-05 | **Mitigar** | Acordar fechas de demo al inicio; preferir videollamada; evitar las semanas de mayor trabajo de campo; consultas cortas por WhatsApp | Demo postergada 2 veces | Alumno |
| R-06 | **Mitigar** | Conexión verificada en la entrevista: es buena; frontend liviano; paginación; RNF-009; PWA offline en la v2.0 si hace falta | Tiempos de carga > 3 s en la PC del productor | Alumno |
| R-07 | **Mitigar** | Pedir una muestra de los registros en papel en la etapa 1; con unas 100 vacas y sus terneros, evaluar la carga manual si la planilla no conviene; planilla modelo simple; vista previa con errores (RF-014); ayudar al productor a ordenar la planilla | Más del 20% de filas con error en la importación de prueba | Alumno + Productor |
| R-08 | **Mitigar / Transferir** | Respaldos automáticos diarios del proveedor (RNF-008); exportación completa descargable (RF-037); sin borrado físico (RNF-014); probar la restauración (CP-N08) | Falla del proveedor o error en los datos | Alumno |
| R-09 | **Mitigar** | Elegir el stack según los planes gratuitos disponibles; desplegar de forma estándar (por ejemplo, con un contenedor) para poder cambiar de proveedor; respaldo diario fuera del proveedor (RNF-008); documentar cómo migrar a otro plan gratuito | Aviso de cambio de condiciones del proveedor o límite de uso alcanzado | Alumno |
| R-10 | **Mitigar** | Código y documentación claros; manual técnico de despliegue y respaldo; acordar con el productor un esquema de soporte después de la PS | Cierre de la PS | Alumno + Productor |
| R-11 | **Mitigar** | Decisión con criterios ponderados (plan, sección 9); prototipo mínimo ("hola mundo" desplegado) antes de cerrar H2 | El prototipo no cumple RNF-009 o RNF-012 | Alumno |
| R-12 | **Mitigar** | HTTPS, hash de contraseñas, control de acceso por rol en el servidor, bloqueo por intentos fallidos, dependencias actualizadas | Alerta de vulnerabilidad en una dependencia | Alumno |

## 5. Seguimiento

- El registro se revisa **al inicio de cada iteración** y se actualizan la probabilidad, el impacto y el estado.
- Los riesgos materializados se convierten en *issues* y se informan al tutor en el informe de avance.
- Si cambia la exposición de un riesgo alto, se actualizan el cronograma y el presupuesto si corresponde.

## Historial de versiones

| Versión | Fecha | Autor | Cambios |
|---|---|---|---|
| 0.1 | 2026-10-10 | Francisco Garcia Martinez | Versión inicial |
| 0.2 | 2026-10-10 | Francisco Garcia Martinez | Respuestas de R-02 y R-07 ajustadas con la entrevista (productor veterinario, registros en papel, rodeo de ~100 cabezas) |
| 0.3 | 2026-10-10 | Francisco Garcia Martinez | R-06 baja a probabilidad 1: el productor tiene buena conexión |
| 0.4 | 2026-10-10 | Francisco Garcia Martinez | R-09 redefinido y sube a prioridad alta: todo tiene que ser gratuito |
| 0.5 | 2026-10-10 | Francisco Garcia Martinez | R-03: el alcance creció con el relevamiento; orden de postergación |
| 0.6 | 2026-10-10 | Francisco Garcia Martinez | R-03: HU-40 pasó a Must |
| 0.7 | 2026-10-10 | Francisco Garcia Martinez | R-03: HU-43 entre las candidatas a postergar |
| 0.8 | 2026-11-03 | Francisco Garcia Martinez | R-03 y R-07 ajustados con el cuaderno del productor (más alcance, rodeo más grande) |
| 0.9 | 2026-11-03 | Francisco Garcia Martinez | Datos del productor reemplazados por datos ficticios (nombre, establecimiento, ubicación, códigos SENASA y montos) para publicar el repositorio |
