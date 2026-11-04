# Plan Sanitario de Los Álamos

> Relevado en la [entrevista al productor](guia-entrevista-productor.md#respuestas-obtenidas) (preguntas 21, 22, 49, 50, 56 y 57). Es el calendario de vacunas, análisis y desparasitaciones que el productor aplica cada año. Se usa para validar RF-018, RF-019 y RF-040, y se carga como **plan inicial** del sistema (HU-18).

## Vacunas

| # | Vacuna | Dosis | Meses | A quién se aplica | Obligatoria | Observaciones |
|---|---|---|---|---|---|---|
| V1 | Aftosa | Única | Marzo – abril | Todas las categorías | **Sí, anual** | |
| V2 | Aftosa | Única | Junio | Terneros | **Sí** | **Vacunación estratégica:** se da solo si quiere vender terneros antes. Adelanta la vacunación según la necesidad de venta. En el plan queda **inactiva** y se activa (o se carga como vacunación suelta) cuando hace falta. |
| V3 | Diarrea de los terneros (Rotatec) | 1.ª | Marzo – abril | Vacas preñadas | No | Se da a la madre para proteger al ternero que va a nacer. |
| V4 | Diarrea de los terneros (Rotatec) | 2.ª | Mayo | Vacas preñadas que recibieron la 1.ª dosis | No | |
| V5 | Neumonía | 1.ª | Julio | Terneros | No | **No la suele dar:** queda en el plan como inactiva. Igual quiere medir cuántos terneros se enferman de neumonía (RF-039). |
| V6 | Neumonía | 2.ª | Agosto | Terneros que recibieron la 1.ª dosis | No | Inactiva, igual que V5. |
| V7 | Mancha, gangrena y enterotoxemia | 1.ª | Octubre – noviembre | Terneros | No | Generalmente se da en la yerra. |
| V8 | Mancha, gangrena y enterotoxemia | 2.ª | Diciembre | Todos los terneros | No | |
| V9 | Carbunclo | Única | Septiembre – noviembre | Vacas, toros, vaquillonas, novillos y novillitos de 8 meses o más | **Sí, anual** | |
| V10 | Brucelosis | Única | Diciembre – enero | Terneras de 3 a 8 meses | **Sí, anual** | La ventana cruza el cambio de año. |

> El productor llamó a la V3 "vacuna contra la diarrea viral de los terneros". En el sistema se usa el nombre **Diarrea de los terneros (Rotatec)** para no confundirla con la diarrea viral bovina (DVB), que es otra enfermedad.

## Análisis

| # | Análisis | Para qué | Meses | A quién | Frecuencia | Resultado |
|---|---|---|---|---|---|---|
| A1 | **Raspaje** | Detectar enfermedades venéreas (por ejemplo, tricomoniasis y campylobacteriosis) | Mayo – julio, antes del servicio de septiembre | Toros | **Obligatorio, anual** | Negativo, positivo o sospechoso, por toro |
| A2 | **Sangrado** | Detectar enfermedades como la brucelosis | Cualquier mes | Vacas y toros | Cada año o **año por medio** | Negativo, positivo o sospechoso, por animal |

No hace análisis de materia fecal antes de desparasitar.

## Desparasitaciones

Se desparasita **todo el rodeo**, contra parásitos internos y externos.

| # | Contra qué | Cómo se aplica | Cuándo | Veces por año | En el plan |
|---|---|---|---|---|---|
| D1 | **Mosca de los cuernos** (externo) | Pour-on sobre el lomo o baño | Verano (diciembre – marzo) | **3 como mínimo** | Activa, con ventana fija y 3 aplicaciones |
| D2 | **Piojo** (externo) | Pour-on, baño de aspersión o inyectable (ivermectina) | Mayo – agosto | **2 como mínimo** | Activa, con ventana fija y 2 aplicaciones |
| D3 | **Sarna** (externo) | Inyectable (ivermectina) o baño de aspersión | Cuando aparece | — | No va al plan: se carga cuando se hace |
| D4 | **Parásitos internos** | Inyectable, **rotando las drogas** | **Estratégica:** cuando hace falta | 1 o 2 | Estratégica: inactiva, se carga cuando se hace |


## Qué le pide esto al sistema

El plan real tiene condiciones que un simple "producto + categoría + mes" no alcanza a representar:

| Necesidad | Ejemplo | Cómo se resuelve |
|---|---|---|
| **Ventana de meses** en lugar de un mes fijo | Aftosa en marzo – abril | Cada ítem tiene un mes de inicio y un mes de fin. La ventana puede cruzar el año (brucelosis, diciembre – enero) o ser todo el año (sangrado). |
| **Varias categorías** en un mismo ítem | Carbunclo: vacas, toros, vaquillonas, novillos y novillitos | Un ítem se vincula con una o más categorías. |
| **Edad** | Brucelosis de 3 a 8 meses; carbunclo a novillitos desde los 8 meses | Edad mínima y máxima en meses, opcionales. |
| **Sexo** | Brucelosis solo a terneras | Sexo opcional en el ítem. |
| **Estado reproductivo** | Rotatec solo a vacas preñadas | Marca "solo preñadas" en el ítem (usa el último tacto). |
| **Segunda dosis** | Rotatec 2.ª dosis en mayo | La 2.ª dosis se pide solo a los animales que recibieron la 1.ª (RN-015). |
| **Ítems que no se aplican siempre** | Neumonía; aftosa de junio | El ítem queda **inactivo**: no genera alertas, pero se puede activar cuando hace falta. |
| **Frecuencia mayor a un año** | Sangrado año por medio | El ítem tiene una frecuencia en años (1 o 2). |
| **Varias aplicaciones en la misma ventana** | Mosca: 3 veces en el verano; piojo: 2 veces entre mayo y agosto | El ítem tiene una cantidad mínima de aplicaciones. El pendiente se va recién cuando se completan (por ejemplo, "mosca: 1 de 3"). |
| **Rotación de drogas** | Desparasitación interna | Al cargar una desparasitación interna, el sistema muestra qué droga se usó la vez anterior. |
| **Contra qué es la desparasitación** | Mosca, piojo, sarna, internos | Cada desparasitación indica contra qué parásito es. El producto tiene su forma de aplicación (inyectable, pour-on, baño). |
| **Análisis con resultado** | Raspaje y sangrado | Se registran como análisis con resultado por animal (RF-040). Un positivo genera una alerta. |
| **Obligatoriedad** | Aftosa, carbunclo, brucelosis y raspaje de toros | Las alertas de vacunas y análisis obligatorios se destacan en el tablero. |

### Cómo se calculan las alertas (RF-019, RN-010)

- **Próxima:** faltan 30 días o menos (anticipación configurable; el productor prefiere 30) para que empiece la ventana y el animal cumple las condiciones del ítem.
- **Pendiente:** la ventana está abierta y el animal todavía no recibió esa vacuna (o ese análisis) en esta campaña.
- **Atrasada:** terminó la ventana y el animal no la recibió.

## Pendiente de confirmar

- Productos comerciales y drogas que usa para cada vacuna y desparasitación, aparte de Rotatec e ivermectina.

## Historial de versiones

| Versión | Fecha | Autor | Cambios |
|---|---|---|---|
| 0.1 | 2026-10-10 | Francisco Garcia Martinez | Versión inicial, con el calendario dictado por el productor |
| 0.2 | 2026-10-10 | Francisco Garcia Martinez | Nota: la neumonía no se vacuna, pero se mide en el reporte de enfermedades de terneros |
| 0.3 | 2026-10-10 | Francisco Garcia Martinez | Aftosa, carbunclo y brucelosis confirmadas como obligatorias anuales; aftosa de junio como vacunación estratégica; análisis de raspaje y sangrado |
| 0.4 | 2026-10-10 | Francisco Garcia Martinez | Raspaje de toros obligatorio; alertas con 30 días de anticipación |
| 0.5 | 2026-10-10 | Francisco Garcia Martinez | Pendiente de desparasitación detallado según las preguntas 22a a 22f |
| 0.6 | 2026-10-10 | Francisco Garcia Martinez | Raspaje confirmado de mayo a julio; desparasitaciones D1 a D4 (preguntas 22a a 22f y 57) |
| 0.7 | 2026-10-10 | Francisco Garcia Martinez | Piojo: de mayo a agosto |
| 0.8 | 2026-11-03 | Francisco Garcia Martinez | Datos del productor reemplazados por datos ficticios (nombre, establecimiento, ubicación, códigos SENASA y montos) para publicar el repositorio |
