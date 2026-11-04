# 03 — Alcance y Requisitos

> Equivalente a las Actividades 4a y 4b de la guía de la cátedra.

## Índice

1. [Descripción del proyecto](#1-descripción-del-proyecto)
2. [Descripción del producto](#2-descripción-del-producto)
3. [Objetivo](#3-objetivo)
4. [Documentación de lo relevado](#4-documentación-de-lo-relevado)
5. [Técnicas de elicitación](#5-técnicas-de-elicitación)
6. [Roles del sistema](#6-roles-del-sistema)
7. [Alcance](#7-alcance)
8. [Requisitos del sistema](#8-requisitos-del-sistema)
9. [EDT](#9-edt)

---

## 1. Descripción del proyecto

El proyecto consiste en analizar, diseñar, desarrollar e implementar **Mi Hacienda Digital**, una aplicación web para la gestión integral del rodeo bovino del establecimiento Los Álamos (Bs. As.), en el marco de la Práctica Supervisada de Ingeniería en Sistemas de Información de la UTN FRLP.

Hoy la administración del rodeo se hace en papel o en planillas dispersas. Eso dificulta conocer el historial de cada animal, cumplir el calendario sanitario, hacer el seguimiento reproductivo y calcular stock e índices. El proyecto busca digitalizar y centralizar esa información, con alertas automáticas y reportes que apoyen las decisiones del productor.

El trabajo se hará con un enfoque híbrido (PMI para la gestión, iterativo e incremental para el producto), con una carga estimada de 230 horas y validación continua con el productor.

## 2. Descripción del producto

**Mi Hacienda Digital** será una **aplicación web responsive** que se usa desde el navegador, sin instalación, **optimizada para computadora**: allí es donde el productor carga los datos al llegar a su casa. También podrá consultarse desde celular o tablet.

La interfaz se diseñará para un usuario **con poca experiencia tecnológica**: textos grandes, lenguaje de campo, pocos pasos para las tareas frecuentes y carga por jornada para pasar rápido lo anotado en la manga.

## 3. Objetivo

Desarrollar una aplicación web para la gestión integral del rodeo bovino del establecimiento Los Álamos, que permita llevar un registro centralizado y actualizado de los animales y optimizar el control sanitario, reproductivo y productivo, con alertas automáticas y reportes.

Los objetivos específicos (OE-01 a OE-06) están en la [propuesta](01-propuesta.md#7-objetivos-específicos-smart).

## 4. Documentación de lo relevado

Información obtenida hasta ahora (propuesta de PS, conversaciones del alumno con el productor y [entrevista](relevamiento/guia-entrevista-productor.md#respuestas-obtenidas), bloques A a F, preguntas 46 y 48 a 56):

- Los registros del rodeo se llevan en **papel o planillas dispersas**.
- El productor necesita el **registro individual** de cada animal (caravana, categoría, raza, etc.).
- Necesita controlar **vacunaciones y tratamientos** y recibir **alertas de vencimientos**.
- Necesita controlar **celos, servicios, preñeces y pariciones**.
- Quiere **reportes**: índices reproductivos, muertes y stock.
- Se requiere **gestión de usuarios con distintos roles**.
- El productor **carga los datos en la computadora** cuando llega a su casa.
- **No está acostumbrado al celular** y el suyo es un modelo viejo.
- En los últimos años el establecimiento hizo **solo cría**, con **90 a 103 vacas**, 4 toros y 80 a 90 terneros por año (entre unas 110 y 200 cabezas según la época), de raza **Aberdeen Angus**. El productor quiere que el sistema contemple también recría e invernada.
- El productor es también **veterinario**: él mismo valida sanidad y reproducción.
- No hay personal fijo: trabaja solo o con un **peón**. En la manga anota en **papel** él o el peón, y al llegar a su casa pasa los datos.
- El sistema lo usará **solo el productor**, que entra como Administrador. La **familia** podría consultarlo.
- Confirma que **olvidar una vacuna** y **detectar tarde una vaca vacía** son riesgos reales.
- **No usa ningún otro sistema** ni programa ganadero.
- Mueve la hacienda entre potreros muy seguido, pero **no le interesa saber en qué potrero está cada animal**.
- Los animales salen del campo por **venta**, **muerte** o **traslado a otro de sus campos**.
- Hace **servicio natural**.
- Usa una PC con **Windows y Chrome**, tiene **buena conexión** en su casa y tiene **impresora** (le podría interesar imprimir).
- Usa **solo la caravana de SENASA**. Los terneros **se caravanean al destete**, no al nacer ni en la yerra.
- Desteta en **dos tandas entre febrero y mayo** (por ejemplo, 21/2 y 25/4), en general **al vender** los terneros, y **pesa en la venta**.
- Lo que más le cuesta encontrar hoy son las **fechas del plan sanitario** (vacunas y desparasitaciones). Dictó su [calendario de vacunación](relevamiento/plan-sanitario-establecimiento.md).
- Registra el **pelaje**; la **madre y el padre**, a veces sí y a veces no; la **causa de muerte**, si la conoce.
- Castra a los machos al mes de nacer y a veces deja alguno para toro.
- El rodeo **baja de febrero a mayo** por las ventas y **sube desde julio** con las pariciones. A veces compra vacas en marzo o abril.
- **Servicio de fines de agosto a principios de enero** (por ejemplo, del 27/8 al 11/1), con **4 toros juntos** con las vacas: no sabe qué toro sirvió a cada vaca. No usa inseminación artificial.
- Hace **tacto en marzo – abril** (lo hace él) y **no anota los meses de preñez**. Los celos los anota solo si los ve.
- Anota los partos a medida que los ve, los **partos asistidos** y los **terneros que mueren al nacer**.
- Quiere ver la **mortalidad** y el **% de terneros enfermos de diarrea y de neumonía**, con **sus causas**.
- La v1.0 es **solo web**. El **costo de operación tiene que ser cero**: todo con planes gratuitos.
- Para él **todos los módulos son importantes**.
- En la venta **pesa el lote entero** y saca el promedio. Anota **kilos, precio por kilo, total, comprador y fecha de cobro** (se cobra a 30 – 60 días).
- En el destete distingue a los terneros **por pelaje y sexo**, no por la madre.
- Las compras y ventas nuevas usan **caravana electrónica** de SENASA.
- Los animales trasladados a otro de sus campos **pueden volver**.
- Hace **raspaje a los toros** (enfermedades venéreas), que es **obligatorio**, y **sangrado** a vacas y toros (brucelosis), este último cada año o año por medio.
- Las vacunas las aplica él y **registra la marca, la serie y el vencimiento** del producto (la dosis no le interesa), para saber con qué vacunó si un ente regulador lo pide. Los **tratamientos son individuales** y quiere que el sistema le **avise para revisar** al animal tratado. La vacunación es **masiva, por categoría**: no la carga animal por animal. Siempre respeta el **período de retiro** antes de vender. Quiere los avisos **30 días antes**.
- Desparasita **todo el rodeo**: los **internos** de forma estratégica (1 o 2 veces al año, rotando drogas) y los **externos** con fechas bastante fijas (mosca en verano, 3 veces como mínimo; piojo, de mayo a agosto, 2 veces como mínimo; sarna cuando aparece).
- En la caravana, **AB123** es el código del establecimiento y **B081** el número del animal.
- A los terneros al pie los reconoce **por el pelaje o por señas**.
- **Anota el precio de compra** de los animales que compra.
- **Cuaderno de campo** (fotos analizadas el 2026-11-03): anota a diario partos con totales por pelaje y sexo, **mellizos**, castraciones en grupo, tratamientos, muertes, **ventas con desbaste, comisión y cobro en cuotas (30 y 60 días)**, compras de **vacas con su ternero al pie**, animales **apartados** para vender y la **alimentación** del rodeo (rollos, silo, parcelas de avena o maíz, con el stock de rollos). Excepcionalmente registra un servicio con un toro conocido y calcula la fecha probable de parto.
- Aftosa, carbunclo y brucelosis son **obligatorias** todos los años. La aftosa de junio a terneros es **estratégica**: solo si vende antes.

> ⚠️ **Supuesto — a validar con el productor.** Lo que sigue en este documento y no figura en esta lista es una propuesta del alumno basada en prácticas habituales de la ganadería bovina. Se valida con la [guía de entrevista](relevamiento/guia-entrevista-productor.md).

## 5. Técnicas de elicitación

| Técnica | Aplicación | Estado |
|---|---|---|
| Análisis documental | Lectura de la propuesta de PS y de los registros actuales del productor (papel) | Propuesta: hecho. Registros: hecho (fotos del cuaderno de campo, 2026-11-03) |
| Entrevista semiestructurada | Con el productor, según la [guía de entrevista](relevamiento/guia-entrevista-productor.md) | En curso: bloques A, C, E y F completos; B, D y H en parte; G pendiente |
| Observación directa | Presenciar una jornada de trabajo en la manga y la carga posterior de datos | Pendiente |
| Entrevista al veterinario | Validar sanidad y reproducción | No corresponde por separado: el productor es veterinario (se cubre con los bloques D y E) |
| Prototipado | Validar los [mockups](07-modelado/mockups.md) con el productor antes de desarrollar | Pendiente |

## 6. Roles del sistema

| Rol | Descripción |
|---|---|
| **Administrador** | El productor (que también es el veterinario del establecimiento). Acceso total: configura el establecimiento, gestiona usuarios, carga y anula registros, ve todos los reportes. |
| **Veterinario** | Para un veterinario externo, si en el futuro lo hubiera. Carga y consulta eventos sanitarios y reproductivos. Consulta fichas y reportes. No gestiona usuarios ni configuración. |
| **Peón** | Para el peón que a veces ayuda en la manga. Carga eventos de rutina (jornadas, pesadas, pariciones). No puede dar de baja animales ni anular registros. |
| **Consulta** | Solo lectura (familia del productor; también contador o asesor). Ve fichas y reportes. |

El detalle está en la [matriz de roles y permisos](07-modelado/roles-y-permisos.md).

> ✅ **Validado en la entrevista.** Al inicio el sistema lo usa solo el productor, como Administrador. Los roles Veterinario, Peón y Consulta quedan disponibles para cuando los necesite (el productor estuvo de acuerdo en tenerlos).

## 7. Alcance

### 7.1 Alcance del proyecto

El proyecto incluye:

- Relevamiento y análisis de requisitos con el productor.
- Documentación de gestión: propuesta, plan, alcance, EDT, cronograma, presupuesto y riesgos.
- Modelado de la solución: historias de usuario, DER, diagrama de clases, mockups, plan de pruebas y roles.
- Elección y justificación de la plataforma tecnológica.
- Desarrollo del frontend, el backend y la base de datos.
- Pruebas unitarias, de integración y de aceptación con el productor.
- Despliegue en un servidor en la nube.
- Migración de los datos existentes, mediante importación desde planillas.
- Capacitación al productor y manual de usuario.
- Informes de avance y documentación final para la facultad.

**Alcance geográfico:** únicamente el establecimiento Los Álamos.

### 7.2 Alcance del producto

La versión 1.0 incluirá:

- **Registro de animales:** alta, modificación y baja con motivo; ficha individual con todo el historial; búsqueda y filtros; categorías; pesadas; genealogía (madre y padre).
- **Importación inicial:** carga masiva de animales desde una planilla Excel o CSV, para no cargar a mano el rodeo existente.
- **Carga por jornada:** registrar un mismo evento (vacuna, tacto, pesada, destete o venta) para muchos animales en una sola operación.
- **Sanidad:** vacunaciones, tratamientos y desparasitaciones; plan sanitario anual con ventanas de meses y condiciones por edad, sexo y preñez; control de períodos de retiro; alertas de vencimientos; **casos de enfermedad** (diarrea, neumonía u otra) con su causa probable.
- **Reproducción:** temporada de servicio con los toros en grupo; tactos; pariciones con alta automática de la cría y registro de los terneros que nacen muertos; abortos y destetes; período de parición esperado; alertas reproductivas; celos (opcional).
- **Reportes:** tablero de inicio con resumen y alertas; stock por categoría; índices reproductivos; mortandad y bajas; **mortalidad y enfermedades de terneros**, con sus causas; cobertura sanitaria; filtros; exportación a PDF y Excel.
- **Usuarios:** inicio de sesión, recuperación de contraseña, roles y auditoría de operaciones críticas.
- **Configuración:** datos del establecimiento, catálogos y respaldo de datos.

### 7.3 Limitaciones y restricciones

- **Uso principal en PC:** las pantallas se diseñan primero para computadora. En celular serán usables, pero no se optimizan para carga intensiva en el campo.
- **Requiere conexión a internet:** la versión 1.0 no funciona sin conexión.
- **Conectividad rural:** el productor tiene buena conexión en su casa, pero el sistema igual debe ser liviano (ver RNF-009).
- **Usuario con poca experiencia tecnológica:** limita la complejidad de las pantallas y obliga a capacitar.
- **Un solo desarrollador y 230 horas:** el alcance debe ajustarse a esa capacidad. Las funcionalidades no esenciales pasan a la v2.0.
- **Costo de operación cero:** es un pedido del cliente, así que el sistema tiene que funcionar con planes gratuitos de hosting y base de datos, con sus limitaciones (por ejemplo, puede tardar en responder después de un rato sin uso).
- **Un solo establecimiento:** el sistema no es multi-empresa en la v1.0.

### 7.4 Supuestos

- El productor dispone de una **computadora con Windows y Chrome** y **buena conexión a internet** en su casa (validado en la entrevista).
- El productor y, si corresponde, el veterinario **participan** del relevamiento, las demos y las pruebas.
- Los **registros previos** están en papel y pueden pasarse a una planilla para importarlos. Con unas 100 vacas y sus terneros, la carga inicial también puede hacerse a mano en pocas horas. ⚠️
- Los animales están **identificados con la caravana oficial de SENASA**, salvo los terneros al pie, que la reciben al destete (validado en la entrevista).
- El sistema se aloja en **planes gratuitos**: el cliente pidió costo de operación cero (validado en la entrevista).
- La operatoria del establecimiento **no cambia sustancialmente** durante el proyecto.

### 7.5 Exclusiones

No forman parte de la versión 1.0:

- **Aplicación móvil nativa** (Android o iOS).
- **Funcionamiento sin conexión (offline)** y sincronización: previstos como PWA en la v2.0.
- **Lectores RFID**, bastones electrónicos o balanzas electrónicas. El número de la caravana electrónica sí se puede cargar a mano.
- **Integración con SENASA / SIGSA** o generación de DT-e.
- **Gestión económica:** costos, compras de insumos y de productos veterinarios, facturación, liquidaciones o impuestos. Sí se registran los datos comerciales de cada venta de hacienda y su cobro (RF-041) y de cada compra de animales (RF-043).
- **Inseminación artificial y pajuelas:** el productor hace solo servicio natural.
- **Qué toro sirvió a cada vaca:** no se conoce, porque los toros están juntos con las vacas.
- **Potreros:** catálogo de potreros, movimientos entre potreros y ubicación de cada animal. El productor mueve la hacienda muy seguido y no le interesa saber en qué potrero está cada animal.
- **Gestión agrícola o de pasturas:** siembra, cosecha y ventas de granos. Solo se registra la suplementación que recibe la hacienda y el stock de rollos y silo (RF-046).
- **Gestión de otras especies** (ovinos, equinos, porcinos).
- **Notificaciones** por email, SMS o WhatsApp: en la v1.0 las alertas se ven dentro del sistema.
- **Multi-establecimiento.**
- **Soporte y mantenimiento formal** después del cierre de la PS (se puede acordar aparte).

### 7.6 Módulos

| Módulo | Descripción |
|---|---|
| **M1 — Usuarios y seguridad** | Inicio y cierre de sesión. Recuperación de contraseña. ABM de usuarios. Asignación de roles. Control de acceso por rol. Auditoría de operaciones críticas. |
| **M2 — Animales** | Alta, modificación y baja con motivo. Reingreso de animales que vuelven de otro campo propio. Ficha con historial completo. Búsqueda y filtros. Cambio de categoría (manual y sugerido). Pesadas. Genealogía. Importación desde planilla. Animales apartados para vender o descartar. Selección de varios animales para cargar una jornada, incluida la venta con sus datos comerciales y su cobro. |
| **M3 — Sanidad** | Vacunaciones (individuales o por jornada). Tratamientos con período de retiro. Casos de enfermedad (diarrea, neumonía u otra) con causa probable y evolución. Análisis (raspaje de toros, sangrado) con resultado. Plan sanitario anual por categoría, con ventanas de meses, frecuencia y condiciones de edad, sexo y preñez. Alertas de próximas dosis, análisis positivos y fin de retiro. Historial sanitario. |
| **M4 — Reproducción** | Temporada de servicio (fechas de entrada y salida de los toros, vacas y toros del grupo) y servicio individual como excepción. Tacto (preñada o vacía) y período de parición esperado. Parición con alta automática de la cría (también mellizos) y registro de terneros muertos al nacer. Castración por jornada. Aborto. Destete. Alertas reproductivas. Celo (opcional). |
| **M5 — Reportes** | Tablero de inicio. Stock por categoría. Índices de preñez, parición, destete e intervalo entre partos. Conteo de partos por pelaje y sexo. Mortandad y bajas por causa. Mortalidad y enfermedades de terneros (diarrea, neumonía) con sus causas. Cobertura sanitaria. Filtros por período y categoría. Exportación a PDF y Excel. |
| **M6 — Configuración** | Datos del establecimiento (nombre, RENSPA). Catálogos: razas, categorías, productos sanitarios, toros y enfermedades. Respaldo y exportación completa de datos. |

## 8. Requisitos del sistema

### 8.1 Requisitos funcionales

| Código | Módulo | Descripción |
|---|---|---|
| RF-001 | M1 | El sistema deberá permitir que los usuarios registrados inicien y cierren sesión. |
| RF-002 | M1 | El sistema deberá permitir que los usuarios recuperen su contraseña. |
| RF-003 | M1 | El sistema deberá permitir al administrador crear, modificar, deshabilitar usuarios y asignarles un rol. |
| RF-004 | M1 | El sistema deberá registrar una auditoría de las operaciones críticas (bajas, anulaciones, cambios de usuarios). |
| RF-005 | M2 | El sistema deberá permitir dar de alta un animal con caravana (opcional en los terneros al pie), caravana electrónica (opcional), sexo, fecha de nacimiento (o edad estimada), raza, categoría, pelaje y origen. |
| RF-006 | M2 | El sistema deberá permitir modificar los datos de un animal. |
| RF-007 | M2 | El sistema deberá permitir registrar la baja de un animal indicando fecha y motivo (venta, muerte, traslado a otro campo propio, otro), con el peso si es una venta y la causa si es una muerte y se conoce, conservando su historial. |
| RF-008 | M2 | El sistema deberá permitir buscar y filtrar animales por caravana, categoría, sexo, raza y estado. |
| RF-009 | M2 | El sistema deberá mostrar la ficha de cada animal con su historial completo: sanitario, reproductivo, pesadas y cambios de categoría. |
| RF-010 | M2 | El sistema deberá permitir cambiar la categoría de un animal y sugerir cambios según edad, sexo y eventos. |
| RF-011 | M2 | *Excluido de la v1.0.* Registrar movimientos de animales entre potreros. Al productor no le interesa saber en qué potrero está cada animal (entrevista, pregunta 20). Se conserva el código para no renumerar. |
| RF-012 | M2 | El sistema deberá permitir registrar pesadas de animales. |
| RF-013 | M2 | El sistema deberá permitir registrar la madre y, si se conoce, el padre (toro) de un animal, y corregir la madre de un ternero cuando se anotó mal (RN-025). |
| RF-014 | M2 | El sistema deberá permitir importar animales desde una planilla Excel o CSV, validando los datos e informando los errores. |
| RF-015 | M2 | El sistema deberá permitir seleccionar varios animales (por filtro o lista de caravanas) para registrar un mismo evento en una jornada. En el destete y la venta, los terneros al pie se eligen por sexo, pelaje y cantidad (RN-018). |
| RF-016 | M3 | El sistema deberá permitir registrar vacunaciones de forma masiva, eligiendo una, varias o todas las categorías, con la fecha de cada categoría, el producto con su marca, la serie y el vencimiento de la serie. También se podrá registrar una vacuna a un animal suelto desde su ficha. |
| RF-017 | M3 | El sistema deberá permitir registrar tratamientos veterinarios de forma individual (por caravana, o por madre o seña en los terneros al pie), con diagnóstico, producto, forma de aplicación, dosis, duración y período de retiro, y desparasitaciones de forma masiva por categoría, indicando contra qué parásito es (internos, mosca, piojo, sarna) y mostrando la droga usada la vez anterior, para poder rotarlas. |
| RF-018 | M3 | El sistema deberá permitir definir un plan sanitario anual indicando, para cada producto y dosis, la ventana de meses de aplicación, una o más categorías, la frecuencia en años (1 o 2), la cantidad mínima de aplicaciones en la ventana (por ejemplo, 3 contra la mosca) y condiciones opcionales de edad, sexo y preñez. Los ítems pueden quedar inactivos (por ejemplo, la aftosa estratégica de junio). El sistema vendrá con el [plan de Los Álamos](relevamiento/plan-sanitario-establecimiento.md) precargado. |
| RF-019 | M3 | El sistema deberá generar alertas de próximas vacunaciones y refuerzos, vacunas atrasadas y fin de períodos de retiro. |
| RF-020 | M3 | El sistema deberá permitir consultar el historial sanitario por animal y por jornada, y buscar qué animales recibieron un producto, una marca o una serie determinada. |
| RF-021 | M4 | El sistema deberá permitir registrar celos de las hembras (opcional: el productor los anota solo si los ve). |
| RF-022 | M4 | El sistema deberá permitir registrar la temporada de servicio por monta natural: fechas de entrada y salida de los toros, hembras que entraron en servicio y, opcionalmente, los toros del grupo. Como excepción, se podrá registrar un servicio individual de una hembra con un toro conocido y su fecha. |
| RF-023 | M4 | El sistema deberá permitir registrar el tacto con su resultado (preñada o vacía) y, opcionalmente, los meses de gestación, y mostrar el período de parición esperado (RN-008). |
| RF-024 | M4 | El sistema deberá permitir registrar pariciones (fecha, tipo de parto, una o dos crías en caso de mellizos, y sexo, pelaje y estado de cada cría) y dar de alta automáticamente a cada cría viva vinculada a su madre, sin caravana hasta el destete, con una seña particular opcional para reconocerla. |
| RF-025 | M4 | El sistema deberá permitir registrar abortos y pérdidas de preñez. |
| RF-026 | M4 | El sistema deberá permitir registrar destetes, individuales o por jornada, eligiendo los terneros al pie por sexo, pelaje y cantidad, con peso opcional y la carga de la caravana de cada ternero. |
| RF-027 | M4 | El sistema deberá generar alertas reproductivas: inicio de la temporada de parición, vacas preñadas que no parieron al terminar esa temporada, vacas vacías del último tacto y crías en edad de destete. |
| RF-028 | M5 | El sistema deberá mostrar el stock actual por categoría, y el stock a una fecha determinada. |
| RF-029 | M5 | El sistema deberá calcular los índices reproductivos de una temporada (% de preñez, % de parición, % de destete e intervalo entre partos) y mostrar el conteo de la parición: terneros nacidos por pelaje y sexo, vacas paridas, mellizos y vacas que faltan parir. |
| RF-030 | M5 | El sistema deberá generar un reporte de mortandad y bajas por causa y período, que incluya la mortalidad de terneros (también los que nacen muertos). |
| RF-031 | M5 | El sistema deberá generar un reporte de cobertura sanitaria (animales vacunados y pendientes por plan). |
| RF-032 | M5 | El sistema deberá permitir filtrar los reportes por período y categoría. |
| RF-033 | M5 | El sistema deberá permitir exportar los reportes y listados a PDF (listo para imprimir en A4) y Excel. |
| RF-034 | M5 | El sistema deberá mostrar un tablero de inicio con resumen del stock y alertas pendientes. |
| RF-035 | M6 | El sistema deberá permitir al administrador gestionar los catálogos: razas, categorías, productos sanitarios, toros y enfermedades. |
| RF-036 | M6 | El sistema deberá permitir configurar los datos del establecimiento (nombre, RENSPA, localidad y código de caravana SENASA del establecimiento). |
| RF-037 | M6 | El sistema deberá permitir al administrador descargar una copia completa de los datos (respaldo / exportación). |
| RF-038 | M3 | El sistema deberá permitir registrar casos de enfermedad de un animal (incluidos los terneros sin caravana, que se eligen por la madre o por sexo, pelaje y seña particular, RN-021): enfermedad (diarrea, neumonía u otra del catálogo), fecha, causa probable, tratamiento aplicado (opcional) y evolución (en curso, recuperado o muerto). |
| RF-039 | M5 | El sistema deberá generar un reporte de mortalidad y enfermedades de terneros por temporada de parición: % de terneros muertos, % de terneros enfermos de diarrea, de neumonía y de otras enfermedades, y su distribución por causa probable. |
| RF-040 | M3 | El sistema deberá permitir registrar análisis sanitarios (raspaje de toros, sangrado para brucelosis u otros), individuales o por jornada, con el resultado de cada animal (negativo, positivo o sospechoso), y generar una alerta ante un resultado positivo. |
| RF-041 | M2 | El sistema deberá permitir registrar los datos comerciales de cada venta: comprador, kilos del lote, % de desbaste, precio por kilo, % de comisión, gastos, total bruto y neto, y una o más cuotas de cobro con su fecha (por ejemplo, 30 y 60 días); marcar cada cuota como cobrada; y listar las ventas del período con las cuotas pendientes. |
| RF-042 | M2 | El sistema deberá permitir registrar el reingreso de un animal que había sido dado de baja por traslado a otro campo propio, conservando su historia. |
| RF-043 | M2 | El sistema deberá permitir registrar una compra de animales como jornada: dar de alta varios animales comprados (caravana, categoría, edad aproximada), incluidas vacas con su ternero al pie, y cargar los datos comerciales (vendedor, cantidad, kilos opcionales, precio por kilo o por cabeza, total, forma y fecha de pago). |
| RF-044 | M3 | El sistema deberá permitir crear recordatorios de seguimiento para un animal (por ejemplo, "revisar en 3 días" al cargar un tratamiento o un caso de enfermedad) y mostrarlos en Pendientes el día indicado hasta marcarlos como hechos. |
| RF-045 | M2 | El sistema deberá permitir marcar animales como apartados para venta o para descarte, con fecha y motivo, listarlos y cargarlos directamente en una jornada de venta. |
| RF-046 | M2 | El sistema deberá permitir registrar de forma simple la alimentación del rodeo o de un grupo de animales (rollos, silo, parcela de avena o maíz, con cantidad y fecha) y llevar el stock de rollos y silo. |

### 8.2 Requisitos no funcionales

| Código | Categoría | Descripción |
|---|---|---|
| RNF-001 | Compatibilidad | El sistema deberá funcionar en las versiones vigentes de Chrome (el navegador del productor), Edge y Firefox en computadoras con Windows. |
| RNF-002 | Portabilidad | La interfaz deberá adaptarse a pantallas desde 360 px de ancho (celular) hasta escritorio, manteniendo las funciones de consulta. |
| RNF-003 | Usabilidad | La interfaz deberá usar tipografía base de al menos 16 px, buen contraste, lenguaje de campo sin jerga técnica y llegar a las cargas frecuentes en no más de 3 clics desde el inicio. |
| RNF-004 | Usabilidad | Después de una capacitación de 1 hora, el productor deberá poder dar de alta un animal en menos de 2 minutos sin ayuda. |
| RNF-005 | Seguridad | Las contraseñas se almacenarán con un algoritmo de hash seguro (bcrypt o Argon2). |
| RNF-006 | Seguridad | Toda comunicación entre cliente y servidor se hará por HTTPS. |
| RNF-007 | Seguridad | El acceso a cada funcionalidad se controlará según el rol del usuario, tanto en la interfaz como en el servidor. |
| RNF-008 | Confiabilidad | La base de datos se respaldará automáticamente al menos una vez por día, conservando 30 días de respaldos, sin costo (por ejemplo, con una tarea programada que guarde la copia fuera del proveedor). |
| RNF-009 | Rendimiento | Las pantallas de listado deberán cargar en menos de 3 segundos con hasta 5.000 animales y una conexión de 2 Mbps. |
| RNF-010 | Localización | Fechas en formato dd/mm/aaaa, números con formato argentino e interfaz en español rioplatense. |
| RNF-011 | Disponibilidad | El sistema deberá estar disponible al menos el 95% del tiempo mensual. Por usar planes gratuitos, se acepta que el primer acceso después de un rato sin uso tarde hasta 1 minuto. |
| RNF-012 | Costo | El costo mensual de operación de la v1.0 deberá ser **USD 0**: hosting, base de datos y respaldos en planes gratuitos, sin dominio pago. |
| RNF-013 | Mantenibilidad | El sistema deberá separar el frontend de una API REST, para que pueda incorporarse una PWA (v2.0) sin reescribir la lógica de negocio. |
| RNF-014 | Integridad | Ningún registro de animal ni de evento se eliminará físicamente: se anula o se da de baja, conservando la trazabilidad. |

### 8.3 Reglas de negocio

| Código | Descripción |
|---|---|
| RN-001 | La caravana de un animal activo es única dentro del establecimiento. Los terneros al pie pueden no tener caravana; mientras tanto se identifican como "cría de" la caravana de la madre. |
| RN-002 | Un animal dado de baja no admite nuevos eventos. Su historial se conserva y puede consultarse. La única excepción es el reingreso de un animal trasladado (RN-019). |
| RN-003 | Solo las hembras pueden tener eventos de celo, servicio, diagnóstico de preñez, parición, aborto o destete como madre. |
| RN-004 | El servicio es por monta natural con los toros en grupo: se registra por temporada (hembras que entraron y toros del grupo), sin indicar qué toro sirvió a cada hembra. Como excepción, se puede registrar un servicio individual con un toro conocido y su fecha: en ese caso el padre de la cría queda registrado. |
| RN-005 | Al registrar una parición, se da de alta automáticamente cada cría viva (una, o dos si son mellizos) como ternero o ternera, vinculada a la madre. El padre queda desconocido, salvo que haya un servicio individual (RN-004). La cría nace sin caravana. La castración se registra después, en una jornada de castración. |
| RN-006 | La categoría sugerida se calcula según sexo, edad y eventos: ternero/a hasta el destete; vaquillona (hembra destetada sin parición); vaca (hembra con al menos una parición); novillito o novillo (macho castrado según edad); toro (macho entero reproductor). Es una propuesta del alumno: el productor no maneja una regla fija (entrevista, pregunta 16), así que el sistema solo sugiere y el productor decide. |
| RN-007 | La fecha de un evento no puede ser futura ni anterior a la fecha de nacimiento del animal. |
| RN-008 | El tacto no informa meses de gestación, así que para una vaca preñada se muestra un **período de parición esperado**: desde el inicio de la temporada de servicio + 283 días hasta su fin + 283 días (servicio del 27/8 al 11/1 → partos del 6/6 al 21/10, aproximadamente). Si hay un servicio individual con fecha o se cargan meses de gestación, se calcula además una fecha probable de parto. |
| RN-009 | Un animal con un tratamiento en período de retiro queda marcado como **no apto para venta o faena** hasta que termine ese período. |
| RN-010 | Las alertas sanitarias se generan con una anticipación configurable (30 días por defecto, como prefiere el productor). |
| RN-011 | Solo el administrador puede dar de baja animales, anular registros y gestionar usuarios. Toda anulación queda auditada con usuario, fecha y motivo. |
| RN-012 | Los índices reproductivos se calculan por temporada de servicio (en Los Álamos, de fines de agosto a principios de enero; las fechas cambian cada año), tomando como base las hembras que entraron en servicio en esa temporada. |
| RN-013 | La caravana sigue el formato oficial de SENASA: 2 letras, 3 números, 1 letra y 3 números (por ejemplo, AB123 B081). Se guarda en mayúsculas y sin espacios, y se muestra con un espacio en el medio. La primera parte (2 letras y 3 números) es el código del establecimiento y la segunda (1 letra y 3 números), el número del animal: al caravanear animales nacidos en el campo, el sistema completa el código del establecimiento (AB123). Si el animal tiene caravana electrónica, se guarda también su número (opcional, único entre animales activos). ⚠️ *Validar el formato con la normativa de SENASA antes de implementar.* |
| RN-014 | Al vender terneros sin destetar, el sistema registra en la misma fecha su destete, el peso promedio (RN-020) y la caravana de cada uno, y después la baja por venta. |
| RN-015 | La segunda dosis de una vacuna del plan se pide solo a los animales que recibieron la primera en la misma campaña. |
| RN-016 | Un ternero que nace muerto o que muere antes del destete cuenta en la mortalidad de terneros de su temporada de parición. |
| RN-017 | En el % de terneros enfermos, cada ternero cuenta una sola vez por enfermedad y temporada, aunque tenga varios casos. |
| RN-018 | En el destete y la venta, los terneros al pie se eligen por sexo, pelaje y cantidad (el productor no sabe de qué madre es cada uno). El sistema toma los terneros al pie de cada grupo, de mayor a menor edad, y les asigna las caravanas cargadas. Su vínculo con la madre queda marcado como "no verificado". |
| RN-019 | Un animal dado de baja por traslado a otro campo propio puede reingresar: vuelve a estar activo con su misma caravana e historia, y el reingreso queda registrado con fecha. |
| RN-020 | En una venta se carga el peso total del lote y el % de desbaste. Kilos netos = kilos × (1 − desbaste); bruto = kilos netos × precio por kilo; neto = bruto − comisión − gastos. Cada animal vendido queda con el peso promedio (kilos netos ÷ cantidad), marcado como promedio. |
| RN-021 | Un caso de enfermedad en un ternero al pie se registra eligiendo el ternero por su madre o por sexo, pelaje y seña particular. Si no se lo puede identificar, se registra sobre "un ternero al pie" del grupo y cuenta como un ternero distinto en el % de enfermos. |
| RN-022 | Un ítem del plan con varias aplicaciones mínimas (por ejemplo, 3 contra la mosca en verano) sigue pendiente hasta que se completan todas dentro de la ventana. El pendiente muestra cuántas van ("mosca: 1 de 3"). |
| RN-023 | Una vacunación o desparasitación por categoría se registra para todos los animales activos de las categorías elegidas (y que cumplan las condiciones del ítem del plan), en la fecha indicada para cada categoría. Se pueden excluir animales puntuales que no pasaron por la manga. |
| RN-024 | Un recordatorio de seguimiento aparece en el tablero y en Pendientes desde su fecha hasta que se marca como hecho. Los avisos se ven dentro del sistema (no hay correo ni WhatsApp en la v1.0). |
| RN-025 | La madre de un ternero se puede corregir (por ejemplo, "era otra vaca"). El cambio queda en la auditoría con fecha, usuario y motivo, y los índices se recalculan. |
| RN-026 | Una venta puede cobrarse en varias cuotas. Queda pendiente de cobro hasta que se cobran todas, y cada cuota vencida sin cobrar aparece en Pendientes. |

### 8.4 Matriz de trazabilidad

Ver [04 — Matriz de trazabilidad](04-matriz-trazabilidad.md).

## 9. EDT

Ver [05 — EDT](05-edt.md).

## Historial de versiones

| Versión | Fecha | Autor | Cambios |
|---|---|---|---|
| 0.1 | 2026-10-10 | Francisco Garcia Martinez | Versión inicial |
| 0.2 | 2026-10-10 | Francisco Garcia Martinez | Relevado, técnicas de elicitación, roles (Encargado pasa a Peón) y supuestos actualizados con la entrevista (bloques A y B); potreros opcionales |
| 0.3 | 2026-10-10 | Francisco Garcia Martinez | Potreros fuera de la v1.0 (RF-011 excluido); motivo de baja por traslado; equipo, conexión e impresión validados (entrevista, preguntas 19, 20, 27, 36 a 38) |
| 0.4 | 2026-10-10 | Francisco Garcia Martinez | Caravana SENASA y terneros sin caravana hasta el destete; jornada de venta; plan sanitario con ventanas y condiciones; RN-013 a RN-015 (entrevista, bloques C y D) |
| 0.5 | 2026-10-10 | Francisco Garcia Martinez | Servicio por temporada con toros en grupo; IA fuera de la v1.0; tacto sin meses y período de parición; casos de enfermedad (RF-038) y reporte de terneros (RF-039); costo de operación cero; RN-016 y RN-017 (entrevista, bloques E, F y H) |
| 0.6 | 2026-10-10 | Francisco Garcia Martinez | Cría con soporte de ciclo completo; RF-040 (análisis), RF-041 (datos de venta y cobro), RF-042 (reingreso); caravana electrónica; destete y venta por sexo y pelaje; RN-018 a RN-020 (entrevista, preguntas 48 a 56) |
| 0.7 | 2026-10-10 | Francisco Garcia Martinez | RN-010 a 30 días; raspaje obligatorio; lote y período de retiro validados (preguntas 23 a 26) |
| 0.8 | 2026-10-10 | Francisco Garcia Martinez | Desparasitaciones (RF-017, RF-018, RN-022); código del establecimiento en la caravana; seña de los terneros (RN-021); RF-043 jornada de compra (preguntas 22 y 57 a 60) |
| 0.9 | 2026-10-10 | Francisco Garcia Martinez | Piojo: de mayo a agosto |
| 0.10 | 2026-10-10 | Francisco Garcia Martinez | Vacunación masiva por categoría con fecha por categoría y serie (RF-016, RN-023) |
| 0.11 | 2026-10-10 | Francisco Garcia Martinez | Tratamientos individuales; desparasitación por categoría; marca, serie y vencimiento de la vacuna; RF-044 recordatorios de revisión; RN-024 |
| 0.12 | 2026-11-03 | Francisco Garcia Martinez | Cambios del cuaderno del productor: tamaño del rodeo y fechas; servicio individual; mellizos; castración; conteo de partos por pelaje y sexo; venta con desbaste, comisión y cuotas; compra de vaca con ternero; RF-045 (apartados) y RF-046 (alimentación); RN-025 y RN-026 |
| 0.13 | 2026-11-03 | Francisco Garcia Martinez | Nombre del proyecto: Mi Hacienda Digital (antes Mi Yerra Digital) |
| 0.14 | 2026-11-03 | Francisco Garcia Martinez | Análisis documental de los registros del productor: hecho |
| 0.15 | 2026-11-03 | Francisco Garcia Martinez | Datos del productor reemplazados por datos ficticios (nombre, establecimiento, ubicación, códigos SENASA y montos) para publicar el repositorio |
