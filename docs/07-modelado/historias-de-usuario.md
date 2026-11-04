# Historias de Usuario

> Anexo 1, punto 1 de la guía de la cátedra. Cada historia de usuario (HU) corresponde a un requisito funcional con el mismo número (HU-05 ↔ RF-005) y a un caso de prueba (CP-005).

**Formato:** *Como* [rol], *quiero* [acción], *para* [beneficio].
**Prioridad (MoSCoW):** **M** = Must (imprescindible), **S** = Should (importante), **C** = Could (deseable, se hace si sobra tiempo).
**Estimación:** puntos de historia (1, 2, 3, 5, 8).

## Índice por módulo

- [M1 — Usuarios y seguridad](#m1--usuarios-y-seguridad) (HU-01 a HU-04)
- [M2 — Animales](#m2--animales) (HU-05 a HU-15, HU-41 a HU-43, HU-45 y HU-46)
- [M3 — Sanidad](#m3--sanidad) (HU-16 a HU-20, HU-38, HU-40 y HU-44)
- [M4 — Reproducción](#m4--reproducción) (HU-21 a HU-27)
- [M5 — Reportes](#m5--reportes) (HU-28 a HU-34 y HU-39)
- [M6 — Configuración](#m6--configuración) (HU-35 a HU-37)

---

## M1 — Usuarios y seguridad

### HU-01 — Iniciar y cerrar sesión
**Como** usuario registrado, **quiero** ingresar con mi email y contraseña, **para** acceder a los datos del establecimiento de forma segura.
- RF-001 · Prioridad **M** · 2 pts
- **Criterios de aceptación:**
  - Con credenciales válidas, ingreso al tablero de inicio.
  - Con credenciales inválidas, veo "Email o contraseña incorrectos" sin que se indique cuál de los dos falló.
  - Después de 5 intentos fallidos seguidos, la cuenta se bloquea 15 minutos.
  - Puedo cerrar sesión desde cualquier pantalla.
  - Un usuario deshabilitado no puede ingresar.

### HU-02 — Recuperar contraseña
**Como** usuario, **quiero** recuperar mi contraseña si me la olvido, **para** no quedarme sin acceso.
- RF-002 · Prioridad **S** · 3 pts
- **Criterios de aceptación:**
  - Ingreso mi email y recibo un enlace de recuperación válido por 1 hora.
  - El mensaje es el mismo exista o no el email, para no revelar qué cuentas existen.
  - El administrador también puede asignar una contraseña temporal a otro usuario.

### HU-03 — Gestionar usuarios
**Como** administrador, **quiero** crear, modificar y deshabilitar usuarios y asignarles un rol, **para** controlar quién accede y qué puede hacer.
- RF-003 · Prioridad **M** · 3 pts
- **Criterios de aceptación:**
  - Puedo crear un usuario con nombre, email y rol (Administrador, Veterinario, Peón o Consulta).
  - El email es único.
  - Puedo deshabilitar un usuario sin borrarlo.
  - No puedo deshabilitarme a mí mismo si soy el único administrador.

### HU-04 — Auditoría de operaciones críticas
**Como** administrador, **quiero** ver quién hizo cada baja, anulación o cambio de usuarios, **para** tener control sobre los datos.
- RF-004 · Prioridad **S** · 2 pts
- **Criterios de aceptación:**
  - Cada operación crítica registra usuario, fecha y hora, acción, registro afectado y motivo (si corresponde).
  - Puedo filtrar la auditoría por fecha, usuario y tipo de acción.
  - Los registros de auditoría no se pueden modificar ni eliminar.

## M2 — Animales

### HU-05 — Dar de alta un animal
**Como** productor, **quiero** registrar un animal con su caravana y datos básicos, **para** tenerlo identificado en el sistema.
- RF-005 · Prioridad **M** · 3 pts
- **Criterios de aceptación:**
  - Campos obligatorios: sexo y categoría. La caravana es obligatoria salvo en los terneros al pie, que la reciben al destete (RN-005). Opcionales: fecha de nacimiento o edad estimada, raza, pelaje, origen (nacido en el campo o comprado), observaciones.
  - Si la caravana ya existe en un animal activo, el sistema avisa y no deja guardar (RN-001).
  - La caravana se valida con el formato de SENASA (por ejemplo, AB123 B081) y se guarda en mayúsculas (RN-013).
  - Si el animal tiene caravana electrónica, puedo cargar su número (opcional).
  - Al guardar, se abre la ficha del animal.
  - Si cargo sexo y fecha de nacimiento, el sistema sugiere la categoría (RN-006).
  - La raza viene preseleccionada en Aberdeen Angus, la raza del establecimiento, y se puede cambiar.

### HU-06 — Modificar datos de un animal
**Como** productor, **quiero** corregir los datos de un animal, **para** mantener la información correcta.
- RF-006 · Prioridad **M** · 1 pt
- **Criterios de aceptación:**
  - Puedo editar todos los datos salvo el historial de eventos.
  - Si cambio la caravana, se valida la unicidad.
  - Un animal dado de baja no puede editarse, salvo para corregir la baja (solo el administrador).

### HU-07 — Dar de baja un animal
**Como** administrador, **quiero** registrar que un animal salió del rodeo y por qué, **para** que el stock sea real sin perder su historia.
- RF-007 · Prioridad **M** · 2 pts
- **Criterios de aceptación:**
  - Indico fecha y motivo: venta, muerte, traslado a otro campo propio u otro. Si es muerte, puedo cargar la causa si la conozco.
  - Si es venta, puedo cargar el peso. Para vender varios animales juntos uso la jornada de venta (HU-15).
  - El animal deja de contarse en el stock desde esa fecha.
  - Su ficha e historial siguen consultables (RN-002).
  - La baja queda registrada en la auditoría.

### HU-08 — Buscar y filtrar animales
**Como** productor, **quiero** encontrar rápido un animal o un grupo, **para** consultar o cargar datos.
- RF-008 · Prioridad **M** · 3 pts
- **Criterios de aceptación:**
  - Busco por caravana (total o parcial) desde un buscador visible en todas las pantallas.
  - Filtro por categoría, sexo, raza y estado (activo o baja).
  - El listado muestra la cantidad de resultados y se puede exportar (RF-033).

### HU-09 — Ver la ficha completa de un animal
**Como** productor, **quiero** ver en una sola pantalla todo lo que le pasó a un animal, **para** decidir qué hacer con él.
- RF-009 · Prioridad **M** · 5 pts
- **Criterios de aceptación:**
  - La ficha muestra los datos básicos, la edad calculada, la categoría y el estado.
  - Tiene pestañas para Sanidad, Reproducción, Pesadas y Cambios de categoría, ordenadas por fecha (la más reciente primero).
  - Muestra las alertas activas del animal, por ejemplo "en período de retiro hasta 20/11/2026".
  - En hembras, muestra el estado reproductivo actual (vacía, servida, preñada con período de parición esperado) y sus crías.

### HU-10 — Cambiar la categoría de un animal
**Como** productor, **quiero** que el sistema me sugiera los cambios de categoría y poder aplicarlos, **para** tener el stock por categoría al día.
- RF-010 · Prioridad **S** · 3 pts
- **Criterios de aceptación:**
  - Puedo cambiar la categoría manualmente, con fecha.
  - El sistema lista los animales cuya categoría sugerida difiere de la actual (por ejemplo, vaquillona con parición → vaca) y permite aplicar el cambio en bloque.
  - Cada cambio queda en el historial del animal.

### HU-11 — Mover animales entre potreros *(excluida de la v1.0)*
**Como** productor, **quiero** registrar que moví animales de un potrero a otro, **para** saber dónde está cada uno.
- RF-011 · **Excluida de la v1.0** · 2 pts
- El productor mueve la hacienda muy seguido, pero no le interesa saber en qué potrero está cada animal (entrevista, pregunta 20). Se conserva como referencia por si lo pide más adelante.
- **Criterios de aceptación:**
  - Puedo mover uno o varios animales (por jornada, RF-015) indicando potrero destino y fecha.
  - El potrero actual del animal se actualiza y el movimiento queda en su historial.

### HU-12 — Registrar pesadas
**Como** productor, **quiero** registrar el peso de los animales, **para** seguir su evolución.
- RF-012 · Prioridad **S** · 2 pts
- **Criterios de aceptación:**
  - Registro peso (kg) y fecha, individual o por jornada.
  - Hoy el productor pesa en la venta: el peso de venta también aparece como pesada en la ficha.
  - La ficha muestra las pesadas y la ganancia diaria promedio entre la última y la anterior.

### HU-13 — Registrar la genealogía
**Como** productor, **quiero** indicar la madre y el padre de un animal, **para** conocer su origen.
- RF-013 · Prioridad **S** · 2 pts
- **Criterios de aceptación:**
  - La madre se elige entre las hembras del establecimiento, activas o dadas de baja.
  - El padre, si se conoce, es un toro del establecimiento. Con los toros en grupo normalmente queda desconocido.
  - Madre y padre son opcionales: el productor a veces los anota y a veces no.
  - Al nacer por parición, la genealogía se completa sola (RN-005).
  - Si la madre se anotó mal, puedo corregirla indicando el motivo; el cambio queda auditado (RN-025).

### HU-14 — Importar animales desde una planilla
**Como** productor, **quiero** cargar mi rodeo actual desde una planilla Excel, **para** no tener que cargar animal por animal.
- RF-014 · Prioridad **M** · 5 pts
- **Criterios de aceptación:**
  - Puedo descargar una planilla modelo con las columnas esperadas.
  - Al subir la planilla, veo una vista previa con las filas válidas y las que tienen errores (caravana repetida, categoría inexistente, fecha inválida), indicando la fila y el motivo.
  - Puedo confirmar la importación solo de las filas válidas.
  - Las razas y categorías que no existen se pueden crear desde la misma pantalla.

### HU-15 — Cargar una jornada para varios animales
**Como** productor, **quiero** elegir varios animales y cargarles el mismo evento de una vez, **para** pasar rápido al sistema lo que anoté en la manga.
- RF-015 · Prioridad **M** · 8 pts
- **Criterios de aceptación:**
  - Selecciono animales por filtro (categoría, sexo), por selección en el listado o **escribiendo o pegando una lista de caravanas**. La vacunación no usa caravanas: se elige por categoría (HU-16).
  - Las caravanas inexistentes se informan antes de confirmar.
  - Tipos de jornada: vacunación, desparasitación, enfermos, análisis, tacto, servicio, **castración**, destete, **venta**, **compra**, pesada y alimentación.
  - En la castración indico la fecha y cuántos terneros machos se castraron; quedan marcados como castrados los terneros al pie de ese grupo. Los tratamientos son individuales (HU-17).
  - Los terneros al pie se eligen **por sexo, pelaje y cantidad**, no por la madre (RN-018).
  - En la jornada de venta cargo la fecha, la cantidad y los **kilos totales del lote**: cada animal queda con el peso promedio (RN-020). Los animales se dan de baja por venta. A los terneros al pie se les registra también el destete y les cargo la caravana (RN-014). Los datos comerciales se cargan en el mismo paso (HU-41).
  - Para tacto, pesada y venta puedo cargar un valor distinto por animal en una tabla.
  - Al confirmar, se crea un evento por animal, todos vinculados a la misma jornada.

### HU-41 — Registrar los datos de la venta y el cobro
**Como** productor, **quiero** anotar a quién vendí, los kilos, el precio por kilo, el total y cuándo cobro, **para** tener las ventas en un solo lugar y no olvidarme de ningún cobro.
- RF-041 · Prioridad **S** · 5 pts
- **Criterios de aceptación:**
  - En la jornada de venta cargo comprador, kilos del lote, % de desbaste, precio por kilo, % de comisión y gastos. El sistema calcula kilos netos, peso promedio, bruto y neto (RN-020).
  - Cargo una o más cuotas de cobro (por ejemplo, 50 % a 30 días y 50 % a 60 días) y marco cada una como cobrada (RN-026).
  - Veo un listado de las ventas del período (cabezas, kilos, bruto y neto) con las cuotas pendientes y vencidas.

### HU-42 — Registrar el reingreso de un animal
**Como** productor, **quiero** volver a dar de alta un animal que había mandado a otro de mis campos, **para** no perder su historia.
- RF-042 · Prioridad **S** · 2 pts
- **Criterios de aceptación:**
  - Si cargo una caravana que pertenece a un animal dado de baja por traslado, el sistema me ofrece registrar el reingreso.
  - El animal vuelve a estar activo con su historia y el reingreso queda con fecha en la ficha (RN-019).
  - No se puede reingresar un animal dado de baja por venta o muerte.

### HU-43 — Registrar una compra de animales
**Como** productor, **quiero** dar de alta de una vez las vacas que compré y anotar a quién se las compré y cuánto pagué, **para** no cargarlas una por una y tener el costo de la reposición.
- RF-043 · Prioridad **S** · 5 pts
- **Criterios de aceptación:**
  - Cargo fecha, vendedor, cantidad, kilos (opcional), precio por kilo o por cabeza y fecha de pago. El sistema calcula el total.
  - Cargo las caravanas de los animales (con su código de establecimiento de origen y, si tienen, la caravana electrónica), la categoría y la edad aproximada. Todos quedan con origen "Comprado".
  - Si compro una vaca con su ternero al pie, cargo los dos juntos y el ternero queda vinculado a esa vaca.
  - Puedo anotar la forma de pago (por ejemplo, cheque).
  - La compra aparece en el reporte de ventas y compras.

### HU-45 — Apartar animales para vender o descartar
**Como** productor, **quiero** marcar los animales que aparto para vender o descartar, **para** tenerlos a mano cuando cargue la venta.
- RF-045 · Prioridad **S** · 2 pts
- **Criterios de aceptación:**
  - Marco uno o varios animales como apartados para venta o para descarte, con fecha y motivo (por ejemplo, "vacía", "vieja", "no parió").
  - Veo la lista de apartados y puedo filtrar el listado de animales por esa marca.
  - Desde la lista inicio una jornada de venta con esos animales ya elegidos.

### HU-46 — Registrar la alimentación y las reservas
**Como** productor, **quiero** anotar lo que le doy de comer al rodeo y cuántos rollos me quedan, **para** no tener que llevarlo en el cuaderno.
- RF-046 · Prioridad **C** · 3 pts
- **Criterios de aceptación:**
  - Registro la fecha, a quién (todo el rodeo o un grupo) y qué recibió: rollos (cantidad), silo o una parcela de avena o maíz.
  - El sistema descuenta los rollos del stock y muestra cuántos quedan ("quedan 9 rollos").
  - Puedo cargar la entrada de rollos o silo al stock.

## M3 — Sanidad

### HU-16 — Registrar vacunaciones
**Como** productor o veterinario, **quiero** registrar las vacunas aplicadas, **para** tener el historial sanitario y cumplir el calendario.
- RF-016 · Prioridad **M** · 3 pts
- **Criterios de aceptación:**
  - Elijo la vacuna con su **marca**, la **serie** y el **vencimiento** de la serie, y una, varias o **todas las categorías**, con la **fecha de cada categoría** (por ejemplo, vacas el 08/10 y vaquillonas el 09/10).
  - La vacuna queda registrada para todos los animales de esas categorías (RN-023): no tengo que cargar caravanas. Puedo excluir a los que no pasaron por la manga.
  - Si sé que faltaron animales pero no vi cuáles, cargo **la cantidad por categoría** (por ejemplo, "1 vaca") sin identificarlos (RN-027). No puedo poner más de los que hay en esa categoría.
  - Ese faltante me queda como pendiente hasta que lo resuelvo: puedo **identificar** después qué animal era (y queda pendiente de vacunar), marcar que **ya lo vacuné** o **cerrarlo** con un motivo.
  - No se carga la dosis. A un animal suelto lo puedo vacunar desde su ficha.
  - Si el producto tiene un intervalo de refuerzo, se calcula la fecha de la próxima dosis.

### HU-17 — Registrar tratamientos y desparasitaciones
**Como** veterinario, **quiero** registrar el tratamiento de cada animal con su período de retiro, y desparasitar al rodeo por categoría, **para** saber qué animales no se pueden vender todavía.
- RF-017 · Prioridad **M** · 3 pts
- **Criterios de aceptación:**
  - El tratamiento es **individual**: elijo el animal por su caravana (o, si es un ternero al pie, por la madre o por sexo, pelaje y seña) y registro diagnóstico, producto, dosis, duración y fecha de inicio.
  - Al guardar puedo pedir que me avise para revisarlo en una cantidad de días (HU-44).
  - La desparasitación es **masiva**: elijo una, varias o todas las categorías, con la fecha de cada una (RN-023). Los que no pasaron por la manga los excluyo por caravana o, si no sé cuáles fueron, por cantidad (RN-027), igual que en la vacunación.
  - El período de retiro se completa desde el producto y puede modificarse.
  - El animal queda marcado como "no apto para venta o faena" hasta que termina el retiro (RN-009).
  - En una desparasitación indico contra qué es (internos, mosca, piojo, sarna) y el producto con su forma de aplicación (inyectable, pour-on, baño).
  - En la desparasitación interna veo qué droga usé la vez anterior, para rotarla.

### HU-18 — Definir el plan sanitario anual
**Como** productor, **quiero** cargar mi calendario de vacunación por categoría, **para** que el sistema me avise lo que falta.
- RF-018 · Prioridad **M** · 8 pts
- Sube a Must: las fechas del plan sanitario son lo que más le cuesta encontrar hoy al productor (entrevista, pregunta 11).
- **Criterios de aceptación:**
  - Para cada vacuna indico la dosis, la ventana de meses (puede cruzar el año, por ejemplo diciembre – enero) y una o más categorías.
  - Puedo agregar condiciones opcionales: edad mínima y máxima en meses, sexo y "solo preñadas".
  - Una segunda dosis se pide solo a los animales que recibieron la primera (RN-015).
  - Puedo dejar un ítem inactivo (por ejemplo, neumonía o la aftosa estratégica de junio) para que no genere alertas, y activarlo cuando hace falta.
  - Puedo indicar la frecuencia en años (por ejemplo, el sangrado año por medio) y una ventana de todo el año.
  - Puedo indicar cuántas aplicaciones mínimas lleva en la ventana (por ejemplo, 3 contra la mosca en verano); el pendiente muestra cuántas van (RN-022).
  - El sistema viene con el [plan sanitario de Los Álamos](../relevamiento/plan-sanitario-establecimiento.md) precargado.
  - El plan se puede copiar de un año al siguiente.

### HU-19 — Recibir alertas sanitarias
**Como** productor, **quiero** ver qué vacunas están por vencer o atrasadas, **para** no olvidarme ninguna.
- RF-019 · Prioridad **M** · 5 pts
- **Criterios de aceptación:**
  - Las alertas aparecen en el tablero de inicio, agrupadas por tipo y con la cantidad de animales.
  - Muestran: próximas dosis (con 30 días de anticipación por defecto, RN-010), dosis atrasadas, fin de retiro y animales que faltaron vacunar o desparasitar sin identificar ("Carbunclo: 1 vaca sin vacunar, sin identificar", RN-027), con un botón para resolverlos.
  - Las vacunas y análisis obligatorios (aftosa, carbunclo, brucelosis, raspaje de toros) se destacan.
  - Desde una alerta puedo iniciar directamente la jornada de vacunación con esos animales ya seleccionados.

### HU-20 — Consultar el historial sanitario
**Como** productor o veterinario, **quiero** ver todos los eventos sanitarios de un animal o de una jornada, **para** controlar lo que se hizo.
- RF-020 · Prioridad **M** · 2 pts
- **Criterios de aceptación:**
  - En la ficha del animal veo su historial sanitario.
  - En el listado de jornadas veo cada jornada con fecha, tipo, producto y cantidad de animales, y puedo abrir el detalle.
  - Puedo buscar qué animales recibieron un producto, una marca o una serie (por ejemplo, si se enfermaron igual o si un ente regulador lo pide) y exportar el listado.

### HU-38 — Registrar animales enfermos
**Como** productor, **quiero** anotar cada vez que un animal se enferma, de qué y por qué, **para** saber cuántos terneros se me enferman de diarrea o neumonía.
- RF-038 · Prioridad **M** · 3 pts
- Lo pidió el productor: la diarrea es importante y la neumonía muy importante (entrevista, pregunta 34).
- **Criterios de aceptación:**
  - Registro la enfermedad (diarrea, neumonía u otra del catálogo), la fecha, la causa probable y, si quiero, el tratamiento aplicado.
  - Puedo registrarlo en un ternero sin caravana, eligiéndolo por la madre o por sexo, pelaje y seña particular (RN-021).
  - Puedo cargar varios terneros enfermos de una vez, como jornada.
  - Registro la evolución: en curso, recuperado o muerto. Si muere, se da de baja con la enfermedad como causa.

### HU-40 — Registrar análisis sanitarios
**Como** veterinario, **quiero** registrar el raspaje de los toros y los sangrados con su resultado, **para** detectar a tiempo enfermedades venéreas y brucelosis.
- RF-040 · Prioridad **M** · 3 pts
- Sube a Must: el raspaje de los toros es obligatorio.
- **Criterios de aceptación:**
  - Registro el análisis (raspaje, sangrado u otro), la fecha, la enfermedad buscada y el resultado de cada animal (negativo, positivo o sospechoso), individual o por jornada.
  - Un resultado positivo aparece como alerta en el tablero y en la ficha del animal.
  - El plan sanitario puede incluir análisis con su ventana y frecuencia (el raspaje cada año antes del servicio; el sangrado cada año o año por medio).

### HU-44 — Recibir un aviso para revisar un animal
**Como** veterinario, **quiero** que el sistema me avise cuándo tengo que revisar un animal que traté, **para** no olvidarme del seguimiento.
- RF-044 · Prioridad **M** · 3 pts
- **Criterios de aceptación:**
  - Al cargar un tratamiento o un caso de enfermedad puedo marcar "Avisarme para revisarlo en N días" (por ejemplo, 3) y un motivo.
  - También puedo crear un recordatorio suelto desde la ficha de cualquier animal.
  - El día indicado el aviso aparece en el tablero y en Pendientes, y sigue ahí hasta que lo marco como hecho (RN-024). Al marcarlo puedo crear otro.

## M4 — Reproducción

### HU-21 — Registrar celos
**Como** productor, **quiero** anotar un celo cuando lo veo, **para** tenerlo en el historial de la vaca.
- RF-021 · Prioridad **C** · 1 pt
- El productor no registra los celos de forma sistemática: solo si ve alguno (entrevista, pregunta 31).
- **Criterios de aceptación:**
  - Solo puedo registrar celos en hembras (RN-003).
  - Queda registrado con fecha y observaciones en el historial reproductivo.

### HU-22 — Registrar la temporada de servicio
**Como** productor, **quiero** registrar cuándo puse y saqué los toros y qué vacas entraron en servicio, **para** calcular los índices y saber cuándo van a parir.
- RF-022 · Prioridad **M** · 3 pts
- **Criterios de aceptación:**
  - Cargo la temporada con fecha de entrada y de salida de los toros (por ejemplo, del 27/8 al 11/1).
  - Elijo las hembras que entraron en servicio (por categoría o lista de caravanas, como jornada).
  - Puedo indicar los toros del grupo (opcional). No se registra qué toro sirvió a cada vaca (RN-004).
  - Como excepción, puedo registrar un servicio individual de una vaca con un toro conocido (por ejemplo, "Don Pancho") y su fecha; el sistema calcula la fecha probable de parto.
  - La temporada se puede copiar del año anterior con las fechas actualizadas.

### HU-23 — Registrar el tacto
**Como** veterinario, **quiero** registrar el resultado del tacto, **para** saber qué vacas están preñadas y cuáles vacías.
- RF-023 · Prioridad **M** · 3 pts
- **Criterios de aceptación:**
  - Registro el resultado (preñada o vacía). Los meses de gestación son opcionales: el productor no los anota.
  - Si está preñada, el sistema muestra el período de parición esperado según la temporada (RN-008).
  - Puedo cargar el tacto de todo un lote en una tabla (jornada), poniendo P o V por caravana.

### HU-24 — Registrar pariciones
**Como** productor, **quiero** registrar el parto y que se cree solo el ternero, **para** no cargar dos veces.
- RF-024 · Prioridad **M** · 5 pts
- **Criterios de aceptación:**
  - Registro fecha, tipo de parto (normal, asistido, cesárea) y si fueron **mellizos**. Por cada cría: sexo, pelaje, estado (viva o muerta) y caravana (normalmente vacía: se caravanea al destete).
  - Mientras no tenga caravana, la cría se muestra como "cría de [caravana de la madre]" y la encuentro buscando la caravana de la madre.
  - Puedo anotar el pelaje y una seña particular del ternero (por ejemplo, "mancha blanca en la frente") para reconocerlo después.
  - Si la cría está viva, se da de alta como ternero o ternera, vinculada a la madre. El padre queda desconocido (RN-005).
  - Si la cría nace muerta, queda registrada y cuenta en la mortalidad de terneros (RN-016).
  - Si la madre era vaquillona, se sugiere pasarla a vaca.

### HU-25 — Registrar abortos
**Como** productor, **quiero** registrar abortos, **para** que los índices y el estado de la vaca sean correctos.
- RF-025 · Prioridad **S** · 1 pt
- **Criterios de aceptación:**
  - Registro fecha y causa probable.
  - La hembra vuelve a estado "vacía" y se cuenta en los índices de la temporada.

### HU-26 — Registrar destetes
**Como** productor, **quiero** registrar el destete de los terneros, **para** calcular el % de destete y pasarlos de categoría.
- RF-026 · Prioridad **M** · 3 pts
- **Criterios de aceptación:**
  - Registro el destete individual o por jornada, con fecha y peso opcional.
  - Elijo los terneros por sexo, pelaje y cantidad (por ejemplo, 12 machos negros), no por la madre (RN-018).
  - Al destetar le cargo la caravana a cada ternero: el sistema completa el código del establecimiento (AB123) y escribo solo el número del animal (por ejemplo, C051).
  - Si el ternero se vende sin destetar, el destete se registra solo en la jornada de venta (RN-014).
  - El sistema sugiere el cambio de categoría (por ejemplo, ternera → vaquillona).

### HU-27 — Recibir alertas reproductivas
**Como** productor, **quiero** saber qué vacas están por parir, cuáles quedaron vacías y qué terneros están para destetar, **para** organizar el trabajo.
- RF-027 · Prioridad **S** · 3 pts
- **Criterios de aceptación:**
  - El tablero muestra cuándo empieza la temporada de parición, las vacas preñadas que no parieron al terminar esa temporada, las vacas vacías del último tacto y las crías que superan la edad de destete configurada.
  - Desde cada alerta veo el listado de animales y puedo exportarlo.

## M5 — Reportes

### HU-28 — Ver el stock
**Como** productor, **quiero** ver cuántos animales tengo por categoría, **para** conocer mi existencia real.
- RF-028 · Prioridad **M** · 3 pts
- **Criterios de aceptación:**
  - Veo una tabla por categoría (con totales por sexo).
  - Puedo elegir una fecha pasada y ver el stock a esa fecha.

### HU-29 — Ver los índices reproductivos
**Como** productor, **quiero** ver el % de preñez, parición y destete de cada temporada, **para** evaluar cómo anduvo el rodeo.
- RF-029 · Prioridad **M** · 5 pts
- **Criterios de aceptación:**
  - Elijo la temporada de servicio y veo los índices calculados según el [glosario](../00-glosario.md#índices-productivos) (RN-012).
  - Veo el conteo de la parición: terneros nacidos por pelaje y sexo (por ejemplo, "46 terneros: 19 colorados y 27 negros"), vacas paridas, mellizos y vacas que faltan parir.
  - Veo la comparación con temporadas anteriores (tabla y gráfico).
  - Cada índice muestra numerador y denominador, para poder controlarlo.

### HU-30 — Ver mortandad y bajas
**Como** productor, **quiero** ver cuántos animales murieron o se vendieron y por qué, **para** detectar problemas.
- RF-030 · Prioridad **M** · 2 pts
- **Criterios de aceptación:**
  - Filtro por período y veo las bajas por motivo y causa de muerte, por categoría.
  - Veo el % de mortandad del período.
  - Veo la mortalidad de terneros por temporada de parición, incluidos los que nacen muertos (RN-016).

### HU-31 — Ver la cobertura sanitaria
**Como** productor, **quiero** ver qué porcentaje del rodeo tiene cada vacuna del plan, **para** saber si cumplí.
- RF-031 · Prioridad **S** · 3 pts
- **Criterios de aceptación:**
  - Por cada producto del plan, veo los animales vacunados y pendientes de cada categoría, con el porcentaje. Los que faltaron sin identificar no cuentan como vacunados ("49 de 50 · 1 sin identificar", RN-027).
  - Puedo abrir el listado de pendientes.

### HU-32 — Filtrar reportes
**Como** productor, **quiero** filtrar los reportes por período y categoría, **para** analizar lo que me interesa.
- RF-032 · Prioridad **S** · 2 pts
- **Criterios de aceptación:**
  - Todos los reportes tienen los filtros disponibles para su tipo.
  - Los filtros se pueden combinar y se ve un resumen de los filtros activos.

### HU-33 — Exportar a PDF y Excel
**Como** productor, **quiero** exportar listados y reportes, **para** imprimirlos o mandarlos al contador o al veterinario.
- RF-033 · Prioridad **M** · 3 pts
- **Criterios de aceptación:**
  - Cada listado y reporte tiene los botones "PDF" y "Excel".
  - El PDF incluye nombre del establecimiento, fecha de emisión y filtros aplicados.
  - El PDF sale listo para imprimir en hoja A4 (el productor tiene impresora).
  - El Excel respeta los filtros y abre sin errores en Excel y LibreOffice.

### HU-34 — Tablero de inicio
**Como** productor, **quiero** ver al entrar un resumen de mi rodeo y lo que tengo pendiente, **para** saber qué hacer sin buscar.
- RF-034 · Prioridad **M** · 3 pts
- **Criterios de aceptación:**
  - Muestra el total de animales, el stock por categoría y las alertas sanitarias y reproductivas.
  - Tiene botones grandes para las tareas frecuentes: nuevo animal, nueva jornada, buscar animal.

### HU-39 — Ver mortalidad y enfermedades de terneros
**Como** productor, **quiero** ver qué porcentaje de terneros se murió o se enfermó de diarrea o neumonía cada temporada y por qué causas, **para** saber si el problema crece y qué lo provoca.
- RF-039 · Prioridad **M** · 5 pts
- **Criterios de aceptación:**
  - Elijo la temporada de parición y veo: terneros nacidos, % de muertos (incluidos los que nacen muertos, RN-016), % con diarrea, % con neumonía y % con otras enfermedades (RN-017).
  - Veo las causas probables más frecuentes de cada enfermedad.
  - Veo la comparación con temporadas anteriores.
  - Cada porcentaje muestra numerador y denominador.

## M6 — Configuración

### HU-35 — Gestionar catálogos
**Como** administrador, **quiero** cargar mis razas, categorías, productos, toros y enfermedades, **para** usarlos en las cargas sin escribir lo mismo cada vez.
- RF-035 · Prioridad **M** · 3 pts
- **Criterios de aceptación:**
  - El sistema viene con valores iniciales (categorías y razas habituales) que puedo editar.
  - No puedo eliminar un ítem en uso, pero sí desactivarlo.
  - Los productos sanitarios tienen tipo, marca o laboratorio, forma de aplicación y días de retiro.

### HU-36 — Configurar el establecimiento
**Como** administrador, **quiero** cargar los datos de mi campo, **para** que aparezcan en los reportes.
- RF-036 · Prioridad **S** · 1 pt
- **Criterios de aceptación:**
  - Cargo nombre, RENSPA, localidad, logo (opcional) y el código de caravana del establecimiento (AB123).
  - Configuro la anticipación de las alertas y la edad de destete.

### HU-37 — Descargar un respaldo de mis datos
**Como** administrador, **quiero** descargar toda mi información, **para** tener una copia propia por si pasa algo.
- RF-037 · Prioridad **S** · 2 pts
- **Criterios de aceptación:**
  - Descargo un archivo Excel con una hoja por entidad (animales, eventos, catálogos).
  - La descarga queda registrada en la auditoría.

---

## Resumen

| Prioridad | Cantidad | Puntos |
|---|---|---|
| Must | 28 | 100 |
| Should | 15 | 38 |
| Could | 2 | 4 |
| **Total v1.0** | **45** | **142** |
| Excluida (HU-11) | 1 | 2 |

## Historial de versiones

| Versión | Fecha | Autor | Cambios |
|---|---|---|---|
| 0.1 | 2026-10-10 | Francisco Garcia Martinez | Versión inicial |
| 0.2 | 2026-10-10 | Francisco Garcia Martinez | Rol Encargado pasa a Peón; HU-11 baja a Could; raza preseleccionada en HU-05 (entrevista, bloque A) |
| 0.3 | 2026-10-10 | Francisco Garcia Martinez | Potreros fuera de la v1.0 (HU-11 excluida); motivo de baja por traslado; PDF imprimible en HU-33 |
| 0.4 | 2026-10-10 | Francisco Garcia Martinez | Caravana SENASA y terneros sin caravana; jornada de venta (HU-15 a 8 pts); HU-18 sube a Must con plan con condiciones (8 pts); peso de venta, genealogía y causa de muerte opcionales |
| 0.5 | 2026-10-10 | Francisco Garcia Martinez | Temporada de servicio con toros en grupo (HU-22); tacto sin meses (HU-23); celos a Could; nuevas HU-38 (animales enfermos) y HU-39 (mortalidad y enfermedades de terneros) |
| 0.6 | 2026-10-10 | Francisco Garcia Martinez | Nuevas HU-40 (análisis), HU-41 (datos de venta y cobro) y HU-42 (reingreso); destete y venta por sexo y pelaje con peso promedio; caravana electrónica; plan con frecuencia e ítems estratégicos |
| 0.7 | 2026-10-10 | Francisco Garcia Martinez | HU-40 sube a Must (raspaje obligatorio); avisos con 30 días; lote visible en la vacunación |
| 0.8 | 2026-10-10 | Francisco Garcia Martinez | Nueva HU-43 (compra); desparasitación con objetivo y rotación; aplicaciones mínimas en el plan; código del establecimiento al caravanear; seña de los terneros |
| 0.9 | 2026-10-10 | Francisco Garcia Martinez | HU-16: vacunación masiva por categoría, con fecha por categoría y serie, sin dosis |
| 0.10 | 2026-10-10 | Francisco Garcia Martinez | Tratamiento individual y desparasitación por categoría (HU-17); marca, serie y vencimiento (HU-16); búsqueda por serie (HU-20); nueva HU-44 (aviso de revisión) |
| 0.11 | 2026-11-03 | Francisco Garcia Martinez | Cuaderno del productor: corregir madre (HU-13), castración (HU-15), servicio individual (HU-22), mellizos (HU-24), conteo de partos (HU-29), desbaste, comisión y cuotas (HU-41), compra con ternero (HU-43); nuevas HU-45 (apartados) y HU-46 (alimentación) |
| 0.12 | 2026-11-03 | Francisco Garcia Martinez | Datos del productor reemplazados por datos ficticios (nombre, establecimiento, ubicación, códigos SENASA y montos) para publicar el repositorio |
| 0.13 | 2026-11-04 | Francisco Garcia Martinez | Animales que faltaron vacunar o desparasitar sin identificar (RN-027) en HU-16, HU-17, HU-19 y HU-31 |
