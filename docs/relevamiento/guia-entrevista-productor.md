# Guía de Entrevista al Productor

> Técnica de elicitación: **entrevista semiestructurada**. Su objetivo es validar los supuestos (⚠️) de la documentación antes de cerrar los requisitos (hito H1).

**Entrevistado:** Juan Pérez — Productor ganadero, Establecimiento Los Álamos
**Entrevistador:** Francisco Garcia Martinez
**Duración estimada:** 1,5 a 2 horas en total. El primer encuentro ya se hizo; el segundo lleva alrededor de 1 hora.
**Llevar al segundo encuentro:** los [mockups](../07-modelado/mockups.md) impresos, **ya actualizados** con lo que contó en el primero, y el [plan sanitario relevado](plan-sanitario-establecimiento.md) para que lo revise. Pedirle los papeles donde anota (pregunta 8).
**Estado:** ✅ respondida · 🟡 respondida en parte · ➖ no aplica · sin marca: pendiente. Las respuestas están en el [registro de la entrevista](#respuestas-obtenidas).

---

## Guion del segundo encuentro

Orden sugerido para lo que falta (unas 4 preguntas, sobre todo mostrar los mockups):

1. **Plan sanitario:** repasar juntos el [plan relevado](plan-sanitario-establecimiento.md) para que lo revise.
2. **Mockups** (41 a 44), con la [lista de validación](validacion-mockups.md): mostrar sobre todo la jornada de venta (con los datos comerciales), el registro de terneros enfermos, los análisis y el reporte de mortalidad y enfermedades de terneros.

---

## A. El establecimiento y las personas

1. ✅ ¿Qué tipo de producción hacen? ¿Cría, recría, invernada o ciclo completo?
2. ✅ ¿Cuántos animales tienen aproximadamente? ¿Cómo varía en el año?
3. ✅ ¿Qué razas tienen?
4. ✅ ¿Cuántos potreros hay? ¿Los tienen con nombre o número?
5. ✅ ¿Quiénes trabajan con la hacienda? (encargado, peones, veterinario)
6. ✅ Además de usted, ¿quién usaría el sistema? ¿Qué debería poder hacer cada uno? *(valida [roles y permisos](../07-modelado/roles-y-permisos.md))*
7. ✅ ¿Hay alguien más que necesite **ver** información sin cargar? (contador, familia, asesor)

## B. Cómo trabajan hoy

8. ✅ ¿Dónde anotan hoy? ¿Cuaderno, planillas de papel, Excel? *(pedir que lo muestre y, si se puede, una copia)* *(se vieron fotos del cuaderno el 2026-11-03)*
9. ✅ Cuando trabajan en la manga, ¿quién anota y cómo?
10. ✅ ¿Cada cuánto pasa los datos a la computadora? ¿Cuánto tarda?
11. ✅ ¿Qué información le cuesta más encontrar hoy?
12. ✅ ¿Le preocupa que se pase una vacuna o detectar tarde una vaca vacía?
13. ✅ ¿Usa algún otro sistema o programa? (SIGSA, algún software ganadero, Excel con fórmulas)

## C. Animales e identificación

14. ✅ ¿Todos los animales tienen caravana? ¿Usa caravana propia, la oficial de SENASA o las dos? ¿Cómo es la numeración?
15. ✅ ¿Los terneros se caravanean al nacer o más adelante (en la yerra)?
16. ➖ ¿Qué categorías usa? ¿Cuándo pasa una ternera a vaquillona y una vaquillona a vaca? *(valida RN-006)* *(el productor no maneja una regla fija)*
17. ✅ ¿Los machos se castran? ¿A qué edad? ¿Se queda con algún macho como toro?
18. ✅ ¿Registra pelaje, peso, madre y padre? ¿Le interesa?
19. ✅ ¿Por qué motivos salen animales del campo? (venta, muerte, consumo, otro) ¿Registra la causa de muerte?
20. ✅ ¿Mueve la hacienda entre potreros seguido? ¿Le interesa saber en qué potrero está cada animal?

## D. Sanidad

21. ✅ ¿Qué vacunas aplica en el año? ¿A qué categorías y en qué meses? *(armar juntos el plan sanitario, RF-018)* *(ver [plan sanitario](plan-sanitario-establecimiento.md))*
22. ✅ ¿Desparasita? ¿Con qué frecuencia? *(ver [desparasitaciones](plan-sanitario-establecimiento.md#desparasitaciones))*
    - **22a.** ¿Contra qué parásitos? ¿Internos (lombrices), externos (garrapata, piojo, mosca de los cuernos, sarna) o los dos?
    - **22b.** ¿Qué producto usa? ¿Inyectable, pour-on (sobre el lomo) u oral? ¿Siempre el mismo o va rotando? *(carga el catálogo de productos con su período de retiro)*
    - **22c.** ¿A quién se lo da? ¿A todo el rodeo o solo a algunas categorías (terneros, vaquillonas, vacas)? *(define las categorías del ítem del plan)*
    - **22d.** ¿Cuándo? ¿En meses fijos (por ejemplo, otoño y primavera) o cuando ve animales flacos o con parásitos? ¿Aprovecha otra pasada por la manga, como una vacunación? *(define si va al plan con ventana de meses o se carga suelta)*
    - **22e.** ¿Cuántas veces por año?
    - **22f.** ¿Hace análisis de materia fecal (conteo de huevos) antes de desparasitar? *(si lo hace, se registra como análisis, RF-040)*
23. ✅ ¿Las vacunas y los tratamientos los aplica siempre usted? ¿Alguna vez lo hace el peón?
24. ✅ ¿Registra el lote o la marca del producto? ¿Qué marca usa para cada vacuna, además de Rotatec?
25. ✅ Cuando trata un animal enfermo, ¿tiene en cuenta el período de retiro antes de venderlo? *(valida RN-009)*
26. ✅ ¿Con cuánta anticipación querría que el sistema le avise de una vacuna? *(valida RN-010; eran 15 días, pasa a 30)*

## E. Reproducción

27. ✅ ¿Hace servicio natural, inseminación artificial o los dos?
28. ✅ ¿Tiene una temporada de servicio fija? ¿Qué meses? *(valida RN-012. Si pare de julio a octubre, el servicio sería más o menos de octubre a enero)*
29. ✅ ¿Sabe qué toro sirvió a cada vaca, o los toros están juntos con un grupo de vacas? ¿Cuántos toros tiene? *(valida RN-004: puede que solo se conozca el grupo de toros)*
30. ✅ ¿Hace tacto? ¿Lo hace usted? ¿En qué mes? ¿Anota los meses de preñez de cada vaca?
31. ✅ ¿Registra los celos? ¿Le sirve?
32. ✅ ¿Qué anota de cada parto? ¿Hay partos asistidos? ¿Anota los terneros que mueren al nacer?
33. ✅ ¿A qué edad desteta? ¿Pesa los terneros al destete?
34. ✅ ¿Qué índices mira o le gustaría mirar? ¿Cómo los calcula hoy? *(valida las fórmulas del [glosario](../00-glosario.md#índices-productivos))*
35. ✅ ¿Qué hace con las vacas que quedan vacías?

## F. Tecnología

36. ✅ ¿Qué computadora usa? ¿Windows? ¿Qué navegador (Chrome, Edge)? *(valida RNF-001)*
37. ✅ ¿Cómo es su conexión a internet en la casa? ¿Se corta seguido? *(valida RNF-009 y R-06)*
38. ✅ ¿Tiene impresora? ¿Le interesa imprimir listados o reportes?
39. ✅ ¿Le resultaría útil, más adelante, cargar datos desde el celular en la manga, aunque no haya señal? *(evalúa la prioridad de la PWA en la v2.0)*
40. ✅ ¿Estaría dispuesto a pagar un hosting de unos USD 10 por mes para que el sistema siga funcionando después de la práctica? *(valida RNF-012 y R-09)*

## G. Validación de mockups

41. Mostrar el **tablero de inicio** (P02): ¿se entiende? ¿Qué agregaría o sacaría?
42. Mostrar la **ficha del animal** (P04): ¿es la información que busca?
43. 🟡 Mostrar la **nueva jornada** (P06) y la **jornada de venta**: ¿así le serviría para pasar lo anotado en la manga y en la venta?
44. ¿Qué nombres usa usted para las cosas? (para que la app hable como él)

## H. Prioridades

45. ➖ Si el sistema pudiera hacer **una sola cosa** bien, ¿cuál sería? *(no se considera)*
46. ✅ Ordene de más a menos importante: registro de animales, sanidad, reproducción, reportes.
47. ➖ ¿Hay algo que no esté en la propuesta y que le gustaría tener? *(no se considera)*

## I. Preguntas nuevas (surgidas en el primer encuentro)

48. ✅ Cuando vende, ¿pesa cada animal o el lote entero? ¿Qué más anota de la venta? *(define la jornada de venta, RN-014)*
49. ✅ La aftosa de junio a terneros: ¿a qué terneros se refiere, si los destetes ya se vendieron en marzo y mayo? *(plan sanitario, V2)*
50. ✅ ¿La aftosa es obligatoria? *(plan sanitario, V1 y V2)*
51. ✅ Cuando compra vacas, ¿cuántas compra por vez? ¿Vienen con caravana de SENASA? ¿Sabe su edad? *(define si hace falta un alta de varios animales a la vez)*
52. ✅ Hasta el destete, ¿cómo distingue a cada ternero si no tiene caravana? ¿Por la madre? *(valida la identificación "cría de", RN-001)*
53. ✅ Cuando vende o desteta un ternero, ¿sabe quién es su madre? *(sin ese dato no se puede calcular el % de destete por vaca)*
54. ✅ ¿Vuelven a Los Álamos animales que mandó a otro de sus campos? *(si vuelven, hace falta un alta por reingreso)*
55. ➖ ¿Cuántas hectáreas tiene el campo? *(dato del establecimiento)* *(no es relevante)*
56. ✅ ¿Hace análisis al rodeo (por ejemplo, a los toros o sangrados)? *(lo contó sin que se le preguntara; define RF-040)*
57. ✅ Raspaje de toros: ¿se hace en mayo – julio o en septiembre? *(dijo las dos cosas)*
58. ✅ La caravana electrónica, ¿trae impreso el mismo código de SENASA (por ejemplo, AB123 B081) además del número electrónico? *(define RN-013)*
59. ✅ Cuando un ternero al pie se enferma, ¿cómo lo identifica? ¿Por la madre, por el pelaje? *(valida RF-038 en terneros sin caravana)*
60. ✅ Cuando compra vacas, ¿anota el precio de compra? *(hoy no se registra: solo las ventas, RF-041)*

---

## Registro de la entrevista

| Fecha | Lugar / medio | Participantes | Duración |
|---|---|---|---|
| 2026-10-10 | A completar | Juan Pérez, Francisco Garcia Martinez | Primer encuentro (bloques A, C, E y F completos; B, D y H en parte) |

### Respuestas obtenidas

| # | Pregunta | Respuesta |
|---|---|---|
| 1 | Tipo de producción | Primero dijo **ciclo completo**; después lo corrigió: **en los últimos años hizo solo cría**. Le gustaría que el sistema contemple todo (cría, recría e invernada). |
| 2 | Cantidad de animales | Aproximadamente **100 cabezas** (lo ubica entre 50 y 1.000). **Baja de febrero a mayo**, porque vende los terneros destetados, las vacas vacías y las vacas viejas. **Sube desde julio**, cuando empiezan las pariciones (julio a octubre). A veces **compra vacas en marzo o abril**. |
| 3 | Razas | **Aberdeen Angus**. |
| 4 | Potreros | Para el productor **no es relevante**. |
| 5 | Quiénes trabajan con la hacienda | El dueño, que es **productor y veterinario**. No hay peones fijos: trabaja solo o con un peón. |
| 6 | Quién usaría el sistema | **Solo el dueño**, que entra como **Administrador**. Le parece bien que existan los roles **Peón** y **Veterinario** para más adelante. |
| 7 | Quién más vería la información | La **familia** podría verla. |
| 8 | Dónde anotan hoy | En un **cuaderno de campo**, día por día y con fecha (se vieron fotos el 2026-11-03, de mayo de 2024 a enero de 2026). Anota partos con totales acumulados por pelaje y sexo, mellizos, castraciones, tratamientos, muertes, conteos de stock, ventas (kilos, desbaste, precio, comisión, cobro a 30 y 60 días), compras, apartes, alimentación (rollos, silo, parcelas) y también lluvias y agricultura, que no van al sistema. Identifica las vacas por número, pelaje y señas. |
| 9 | Quién anota en la manga | El productor o, cuando trabaja con un peón, el peón. |
| 10 | Cada cuánto pasa los datos | Al llegar a su casa, y le lleva un rato cargarlos. |
| 11 | Información que más cuesta encontrar | Las **fechas del plan sanitario**: vacunaciones y desparasitaciones. |
| 12 | Vacuna olvidada o vaca vacía detectada tarde | **Confirma que son riesgos reales.** |
| 13 | Otros sistemas o programas | **Ninguno.** |
| 14 | Caravanas | En principio **todos los animales tienen caravana**. Usa **solo la caravana oficial de SENASA**: 2 letras, 3 números, 1 letra y 3 números (por ejemplo, **AB123 B081**). |
| 15 | Cuándo caravanea a los terneros | **Al destete, no en la yerra.** Para no estresar al ternero, muchas veces lo desteta recién cuando lo vende, y ahí lo caravanea. |
| 16 | Categorías y cuándo cambian | El productor no maneja una regla fija: **no aplica**. |
| 17 | Castración y toros | Los machos se castran **al mes de nacer, aproximadamente**. Puede dejar alguno entero para toro. |
| 18 | Pelaje, peso, madre y padre | Registra el **pelaje**. Pesa **en la venta**. La **madre y el padre** a veces los anota y a veces no. |
| 19 | Por qué salen animales del campo | Por **muerte**, por **venta** o por **traslado a otro de sus campos**. Registra la **causa de muerte si la conoce**. |
| 20 | Movimientos entre potreros | Mueve la hacienda entre potreros **muy seguido**, pero **no le interesa saber en qué potrero está cada animal**. |
| 21 | Vacunas del año | Dictó el calendario completo: aftosa, diarrea de los terneros (Rotatec), neumonía (no la suele dar), mancha-gangrena-enterotoxemia, carbunclo y brucelosis. Ver el [plan sanitario de Los Álamos](plan-sanitario-establecimiento.md). |
| 22 | Desparasitación | Desparasita **todo el rodeo**, contra parásitos **internos y externos**. **Internos:** inyectable, **rotando las drogas**, de forma **estratégica** (cuando hace falta), 1 o 2 veces al año. **Externos:** bastante fijos: **mosca** con pour-on o baño en **verano**, 3 veces como mínimo; **piojo** con pour-on, aspersión o inyectable (ivermectina), de **mayo a agosto**, 2 veces como mínimo; **sarna** con inyectable (ivermectina) o baño de aspersión. **No hace análisis de materia fecal.** |
| 23 | Quién aplica | Las vacunas las **aplica él**. |
| 24 | Lote del producto | **Registra el lote** de la vacuna. |
| 25 | Período de retiro | **Sí, siempre** lo tiene en cuenta antes de vender. |
| 26 | Anticipación de los avisos | Prefiere que el sistema le avise **30 días antes**. |
| 27 | Tipo de servicio | **Servicio natural.** |
| 28 | Temporada de servicio | **De septiembre a enero:** el 1 de enero saca los toros. |
| 29 | Qué toro sirvió a cada vaca | **No lo sabe:** los toros están juntos con un grupo de vacas. Tiene **4 toros**. |
| 30 | Tacto | Lo hace **él mismo** (es veterinario), en **marzo – abril**. **No anota los meses de preñez.** |
| 31 | Celos | **No los registra** de forma sistemática: si ve uno, lo anota. Es opcional y eventual. |
| 32 | Partos | Los anota **a medida que los ve**. A veces hay **partos asistidos**, si hace falta. **Anota los terneros que mueren al nacer.** |
| 33 | Destete | Generalmente **no puede destetar todo de una vez** por la diferencia de edad entre terneros: hace **dos ventas, en marzo y en mayo**, y desteta en ese momento. Pesa en la venta. |
| 34 | Índices | Le gustaría ver la **mortalidad** y el **% de terneros enfermos de diarrea** (importante) y **de neumonía** (muy importante), u otras enfermedades, y **las causas** de esas enfermedades. |
| 35 | Vacas vacías | Las **vende** (entre febrero y mayo, junto con las vacas viejas). |
| 36 | Computadora y navegador | PC con **Windows** y **Chrome**. |
| 37 | Conexión a internet | **Buena conexión** en su casa. |
| 38 | Impresora | **Tiene impresora** y le podría interesar imprimir. |
| 39 | Celular en la manga | Por ahora la aplicación es **solo web**. Más adelante se podría hacer una versión móvil. |
| 40 | Pagar hosting | **Costo de operación cero:** todo con planes gratuitos. |
| 48 | Qué anota de la venta | **Pesa el lote entero** y saca el **promedio por animal**. Anota los **kilos**, el **precio por kilo**, el **total**, **a quién se vendió** y **cuándo se cobra**: se paga a **30 – 60 días** (el plazo cambia según la inflación). Al contado es raro, porque se paga menos. |
| 49 | Aftosa de junio a terneros | Es una **vacunación estratégica**: la hace solo si quiere vender terneros antes. Adelanta la vacunación según la necesidad de venta. |
| 50 | Obligatoriedad | **Aftosa, carbunclo y brucelosis son obligatorias**, todos los años. |
| 51 | Compras | Compra según el **porcentaje de reposición** que necesite; a veces va comprando de a poco. Las vacas que compra vienen con **caravana de SENASA**, ahora **electrónica**; también vende con caravana electrónica. |
| 52 | Cómo distingue a los terneros | **Por el pelaje y por el sexo.** No por la madre. |
| 53 | Si sabe la madre al vender o destetar | **No.** |
| 54 | Animales que vuelven de otro campo | **Sí, pueden volver.** |
| 55 | Hectáreas | **No es relevante.** |
| 56 | Análisis | **Raspaje a los toros** para detectar enfermedades venéreas (mayo – julio, o septiembre: a confirmar). **Sangrado** para detectar enfermedades como la brucelosis en vacas y toros, cada año o año por medio, en cualquier momento del año. |
| 57 | Mes del raspaje | **De mayo a julio.** |
| 58 | Código de la caravana | **AB123** es el código del **establecimiento** y **B081** el del **animal**: la caravana tiene el establecimiento y el número del animal. |
| 59 | Terneros enfermos sin caravana | Los identifica **por el pelaje o por observaciones** (señas). |
| 60 | Precio de compra | **Sí**, lo anota. |
| 45 y 47 | Una sola cosa / algo más | **No se consideran.** |
| 43 (en parte) | Jornada de vacunación | La vacunación es **masiva**: no se carga por caravana, sino **por categoría** (una, varias o todas), con la **fecha de cada categoría**. La **dosis no es relevante** y el lote del producto es la **serie**. |
| 43 (en parte) | Tratamientos y vacunas | El **tratamiento es individual**, por caravana. Si lo pide, el sistema tiene que **avisarle para revisar** al animal (por ejemplo, a los 3 días). En la vacunación hay que anotar la **marca**, la **serie** y el **vencimiento** del producto: sirve para saber con qué vacunó si los animales se enferman igual o si un ente regulador lo pide. |
| 46 | Orden de importancia | **Todos son importantes:** registro de animales, sanidad, reproducción y reportes. |

Pendiente para el próximo encuentro: preguntas 41 a 44 (mockups; de la 43 ya opinó sobre la vacunación). Ver el [guion del segundo encuentro](#guion-del-segundo-encuentro).

### Supuestos validados

| Supuesto | Documento | Respuesta del productor | ¿Se confirma? | Cambio a realizar |
|---|---|---|---|---|
| Sistema productivo | [Propuesta §2](../01-propuesta.md#2-datos-del-establecimiento) | Ciclo completo | Sí | Se registra. Se mantienen las categorías de recría e invernada (novillito, novillo) y las pesadas. |
| Tamaño del rodeo | [Propuesta §2](../01-propuesta.md#2-datos-del-establecimiento) | Unas 100 cabezas | Sí | Se registra. RNF-009 (5.000 animales) queda con mucho margen. La carga inicial puede hacerse a mano si no conviene importar. |
| Raza | [Propuesta §2](../01-propuesta.md#2-datos-del-establecimiento) | Aberdeen Angus | Sí | Raza preseleccionada en el alta de animales (HU-05). |
| Uso de potreros | [Alcance §7.2](../03-alcance-y-requisitos.md#72-alcance-del-producto), RF-011 | Mueve la hacienda muy seguido, pero no le interesa saber en qué potrero está cada animal | No | Potreros fuera de la v1.0: se excluyen RF-011 y HU-11, y se quita el potrero del alta, los filtros, el stock y los catálogos. |
| Motivos de baja | RF-007 | Muerte, venta o traslado a otro de sus campos | Parcial | Motivos: venta, muerte, traslado a otro campo propio y otro. La app es solo para Los Álamos: el traslado es una baja más. |
| Tipo de servicio | RF-022, RN-004 | Servicio natural | Sí | La IA queda en el modelo pero no se usa por ahora. Falta la pregunta 29 para RN-004. |
| PC y navegador | RNF-001, [Plan §3.2](../02-plan-del-proyecto.md#32-recursos-técnicos) | Windows y Chrome | Sí | Chrome pasa a ser el navegador de referencia para las pruebas de aceptación. |
| Conexión a internet | RNF-009, R-06 | Buena conexión en su casa | Sí | Se quita el supuesto de RNF-009 y baja la probabilidad de R-06. |
| Impresión | RF-033 | Tiene impresora y le podría interesar imprimir | Sí | El PDF de listados y reportes sale listo para imprimir en A4 (HU-33). |
| Veterinario y personal de campo | [Propuesta §8](../01-propuesta.md#8-stakeholders), [Plan §3.1](../02-plan-del-proyecto.md#31-recursos-humanos) | El dueño es veterinario; no hay personal fijo, a veces un peón | Sí | El productor cubre el rol de veterinario. No hace falta una entrevista aparte al veterinario. |
| Usuarios y roles | [Roles y permisos](../07-modelado/roles-y-permisos.md) | Solo lo usa el dueño, como Administrador | Sí | Encargado pasa a llamarse **Peón**. El rol Veterinario se quitó el 2026-11-06, así que quedan 3 roles. La v1.0 arranca con un solo usuario Administrador. |
| Usuarios de solo lectura | [Roles y permisos](../07-modelado/roles-y-permisos.md) | La familia podría verlo | Sí | Rol Consulta confirmado. |
| Registros actuales | [Propuesta §4](../01-propuesta.md#4-situación-actual) | Papel; anota él o el peón y lo pasa al llegar a su casa | Sí | Se vio el cuaderno (2026-11-03): anotaciones diarias en un cuaderno de campo. La carga inicial se hará a mano o con una planilla armada a partir del cuaderno (RF-014, R-07). |
| Problemas P2 y P3 | [Propuesta §5](../01-propuesta.md#5-problemática) | Confirma que son riesgos reales | Sí | Las alertas sanitarias y reproductivas (RF-019, RF-027) siguen como Must. |
| Otros sistemas | [Alcance §7.5](../03-alcance-y-requisitos.md#75-exclusiones) | No usa ninguno | Sí | No hay migración desde otro software. La integración con SIGSA sigue excluida. |
| Variación del rodeo | RF-028 | Baja de febrero a mayo por las ventas y sube desde julio por las pariciones | Sí | Confirma la utilidad del stock a una fecha (RF-028). |
| Lo que más cuesta encontrar | RF-018, RF-019 | Las fechas del plan sanitario | Sí | **RF-018 (plan sanitario) sube de Should a Must.** |
| Plan sanitario por categoría y mes | RF-018, [DER](../07-modelado/der.md) | Ventanas de meses, varias categorías, condiciones de edad, sexo y preñez, segundas dosis | Parcial | El ítem del plan pasa a tener ventana de meses, varias categorías y condiciones (ver [plan sanitario](plan-sanitario-establecimiento.md)). Nueva RN-015. Se precarga como plan inicial. |
| Animales identificados con caravana única | [Alcance §7.4](../03-alcance-y-requisitos.md#74-supuestos), RN-001 | Sí, la de SENASA, pero los terneros reciben la caravana recién al destete | Parcial | Una sola caravana (la oficial), con formato validado (nueva RN-013). Los terneros al pie pueden no tener caravana: se identifican por la madre. |
| La cría se caravanea al nacer | RF-024, RN-005 | No: al destete, que muchas veces coincide con la venta | No | La cría se da de alta sin caravana. La caravana se carga en el destete o en la venta. |
| Destete como evento aparte | RF-026 | Desteta en dos tandas (marzo y mayo), al vender | Parcial | Nueva **jornada de venta**: da de baja, registra el peso y, si son terneros al pie, también el destete y la caravana (nueva RN-014). |
| Categorías (RN-006) | RN-006 | No maneja una regla fija | No aplica | La regla sigue siendo una propuesta del alumno; el sistema solo **sugiere** y el productor decide. |
| Castración | RN-006, `ANIMAL.castrado` | Al mes de nacer; puede dejar alguno para toro | Sí | Por el cuaderno (2026-11-03), la castración pasó a registrarse en una jornada propia. Antes: los terneros machos se tomaban como castrados por defecto. Se marca como entero el que queda para toro. |
| Pesadas | RF-012 | Pesa en la venta | Parcial | El peso se carga en la venta. RF-012 sigue como Should. |
| Genealogía | RF-013 | A veces anota madre y padre, a veces no | Sí | Madre y padre siguen siendo opcionales. |
| Causa de muerte | RF-007 | La registra si la conoce | Sí | La causa sigue siendo opcional. |
| Temporada de servicio (RN-012) | RN-012 | De septiembre al 1 de enero | Sí | Se quita el supuesto de RN-012. La parición esperada va de junio a octubre. |
| Servicio con un toro conocido por vaca (RN-004) | RF-022, RN-004 | Los 4 toros están juntos con las vacas: no sabe cuál sirvió a cada una | No | El servicio se registra **por temporada**, con las vacas que entraron y los toros del grupo. El padre de la cría queda desconocido. |
| Inseminación artificial | RF-022, RF-013, RF-035 | No la usa | No | **IA y pajuelas fuera de la v1.0.** |
| Tacto con meses de gestación (RN-008) | RF-023, RN-008 | Hace tacto en marzo – abril, pero no anota los meses | No | El tacto registra solo preñada o vacía. La fecha probable de parto se reemplaza por el **período de parición esperado** de la temporada. |
| Registro de celos | RF-021 | Solo si ve alguno | Parcial | RF-021 baja de Should a Could. |
| Partos | RF-024 | Los anota a medida que los ve; anota los terneros muertos al nacer | Sí | Los terneros que nacen muertos cuentan en la mortalidad de terneros (nueva RN-016). |
| Índices (glosario) | RF-029, RF-030 | Quiere mortalidad y % de terneros enfermos de diarrea y neumonía, con sus causas | Parcial | **Nuevos RF-038** (casos de enfermedad) **y RF-039** (reporte de mortalidad y enfermedades de terneros), ambos Must. |
| PWA en la v2.0 | [Plan §2](../02-plan-del-proyecto.md) | Por ahora solo web; quizás móvil más adelante | Sí | Sin cambios: la v1.0 es web y la versión móvil queda para el futuro. |
| Hosting de USD 10/mes (RNF-012) | RNF-012, R-09, [Presupuesto](../08-presupuesto.md) | Pide costo de operación cero | No | **RNF-012 pasa a USD 0**: planes gratuitos. Se ajustan RNF-008, RNF-011, el presupuesto y R-09. |
| Sistema productivo | [Propuesta §2](../01-propuesta.md#2-datos-del-establecimiento) | En los últimos años, solo cría; quiere que el sistema contemple todo | Parcial | Se registra **cría** como sistema actual. Se mantienen las categorías y las funciones de recría e invernada (novillitos, novillos, pesadas). |
| Aftosa de junio (V2) | [Plan sanitario](plan-sanitario-establecimiento.md) | Vacunación estratégica, solo si vende antes | Sí | V2 queda inactiva en el plan y se activa cuando hace falta. |
| Obligatoriedad de aftosa | [Plan sanitario](plan-sanitario-establecimiento.md) | Aftosa, carbunclo y brucelosis obligatorias anuales | Sí | Se quita el supuesto del plan sanitario. |
| Peso de venta individual | RN-014, RF-012 | Pesa el lote entero y saca el promedio | No | Nueva RN-020: en la venta se carga el peso total del lote y cada animal queda con el **peso promedio**. |
| Gestión económica excluida | [Alcance §7.5](../03-alcance-y-requisitos.md#75-exclusiones) | Anota kilos, precio por kilo, total, comprador y fecha de cobro | Parcial | **Nuevo RF-041:** datos comerciales de cada venta y control de cobros. El resto de la gestión económica (costos, insumos, facturación) sigue excluido. |
| Terneros identificados por la madre ("cría de") | RN-001, RN-014, RF-026 | Distingue por pelaje y sexo; no sabe la madre al destetar o vender | No | Nueva RN-018: en el destete y la venta los terneros al pie se eligen **por sexo y pelaje y por cantidad**; el vínculo con la madre queda como "no verificado". |
| Caravana SENASA visual (RN-013) | RN-013, RF-005 | Las compras y ventas nuevas usan caravana electrónica | Parcial | Campo opcional **caravana electrónica** (se carga a mano). La lectura con bastón sigue para la v2.0, ahora con más prioridad. |
| Reingreso de animales | RF-007, RN-002 | Pueden volver de otro campo propio | No | **Nuevo RF-042** y RN-019: un animal dado de baja por traslado puede reingresar con su historia. |
| Análisis sanitarios | RF-018, [Plan sanitario](plan-sanitario-establecimiento.md) | Raspaje de toros y sangrado (brucelosis) | No (no estaba previsto) | **Nuevo RF-040:** análisis con resultado por animal y frecuencia anual o bianual en el plan. |
| Superficie del campo | [Propuesta §2](../01-propuesta.md#2-datos-del-establecimiento) | No es relevante | No aplica | Se quita el supuesto. |
| Período de retiro (RN-009) | RN-009, RF-017 | Siempre lo tiene en cuenta antes de vender | Sí | Sin cambios: el animal en retiro queda como no apto para venta. |
| Anticipación de 15 días (RN-010) | RN-010, RF-019 | Prefiere 30 días | No | **RN-010 pasa a 30 días por defecto** (sigue siendo configurable). |
| Lote del producto | RF-016 | Lo registra | Sí | El lote queda como campo visible en la vacunación (sigue siendo opcional). |
| Raspaje de toros | RF-040, [Plan sanitario](plan-sanitario-establecimiento.md) | **Es obligatorio** | Sí | El raspaje queda como análisis **obligatorio anual** en el plan; RF-040 sube de Should a Must. |
| Mes del raspaje | [Plan sanitario](plan-sanitario-establecimiento.md) | Mayo a julio | Sí | Se quita el supuesto. |
| Formato de la caravana (RN-013) | RN-013, RF-026 | AB123 = establecimiento, B081 = animal | Sí | Se guarda el **código del establecimiento** en la configuración: al caravanear terneros el sistema completa "AB123" y se escribe solo el número del animal. Los animales comprados traen el código de su campo de origen. |
| Terneros enfermos identificados por la madre | RF-038 | Por pelaje u observaciones | No | Nueva RN-021: el ternero al pie se elige por la madre o por sexo, pelaje y **seña particular**; se suma la seña al registrar el parto. |
| Compras excluidas | [Alcance §7.5](../03-alcance-y-requisitos.md#75-exclusiones) | Anota el precio de compra | No | **Nuevo RF-043:** jornada de compra con alta de varios animales y datos comerciales. Los insumos siguen excluidos. |
| Desparasitaciones | RF-017, RF-018, [Plan sanitario](plan-sanitario-establecimiento.md#desparasitaciones) | Internas estratégicas y rotando drogas; externas fijas con varias aplicaciones | Parcial | El plan admite **aplicaciones mínimas** en la ventana (nueva RN-022); la desparasitación indica contra qué parásito es y muestra la droga anterior para rotar. |
| Vacunación por caravana (RF-016) | RF-016, RF-015 | Es masiva, por categoría; no va a cargar animal por animal | No | La vacunación se carga **eligiendo categorías** (una, varias o todas) con la fecha de cada una (nueva RN-023). Se registra la **serie** del producto y no la dosis. |
| Tratamientos en jornada | RF-015, RF-017 | El tratamiento es individual, por caravana | No | Los tratamientos se cargan **de a un animal** (desde la ficha o desde Sanidad). La jornada "Tratar" pasa a ser **Desparasitar**, masiva por categoría como la vacunación. |
| Avisos solo del plan sanitario | RF-019 | Quiere un aviso para revisar al animal tratado | No | **Nuevo RF-044:** recordatorios de revisión con fecha (por ejemplo, a los 3 días del tratamiento), que aparecen en Pendientes (RN-024). |
| Vacuna con serie | RF-016, RF-020 | Marca, serie y vencimiento, para trazabilidad | Parcial | La vacunación registra **marca, serie y vencimiento**; el historial permite buscar qué animales recibieron una marca o serie. |
| Tamaño del rodeo (~100 cabezas) | [Propuesta §2](../01-propuesta.md#2-datos-del-establecimiento) | Cuaderno: 90 a 103 vacas, 4 toros, 80 a 90 terneros; entre 109 y 184 cabezas en los conteos | No | Se corrige: entre unas 110 y 200 cabezas según la época. |
| Fechas de parición, servicio y ventas | RN-008, RN-012 | Cuaderno: partos del 28/5 al 1/10; toros del 27/8 al 11/1; ventas de terneros el 21/2 y el 25/4 | Parcial | Fechas de ejemplo actualizadas; la temporada sigue siendo configurable. |
| No se sabe qué toro sirvió a cada vaca (RN-004) | RN-004, RF-022 | Cuaderno: "Toro negro (Don Pancho) … F.P.P. 4/6/26" | Parcial | Se permite, como excepción, un servicio individual con toro y fecha probable de parto. |
| Prioridad de los módulos | [Propuesta §9](../01-propuesta.md#9-matriz-de-priorización-esfuerzo--impacto) | Todos son importantes | Sí | Se mantienen los cuatro módulos en la v1.0. |

### Nuevos requisitos detectados

| Descripción | Prioridad sugerida | ¿Entra en la v1.0? |
|---|---|---|
| Rol **Peón** (reemplaza al rol Encargado; mismos permisos) | M (ya estaba como Encargado) | Sí |
| Raza Aberdeen Angus preseleccionada en el alta de animales | C | Sí (criterio de aceptación de HU-05) |
| Motivo de baja **Traslado a otro campo propio** | M (parte de RF-007) | Sí |
| PDF listo para imprimir en A4 | S (parte de RF-033) | Sí (criterio de aceptación de HU-33) |
| **Jornada de venta:** baja por venta de varios animales, con peso, y destete y caravana de los terneros al pie | M (amplía RF-015 y RF-026) | Sí |
| Terneros sin caravana hasta el destete, identificados por la madre | M (amplía RF-005 y RF-024) | Sí |
| Validación del formato de caravana SENASA | S (RN-013) | Sí |
| Plan sanitario con ventanas de meses y condiciones de edad, sexo y preñez | M (amplía RF-018) | Sí |
| Plan sanitario de Los Álamos precargado como plan inicial | S (parte de RF-018) | Sí |
| Alta de varias vacas compradas de una vez | C | Sí: queda cubierta por la jornada de compra (RF-043) |
| **Casos de enfermedad** (diarrea, neumonía u otra), con causa probable y evolución | M (RF-038) | Sí |
| **Reporte de mortalidad y enfermedades de terneros**, con sus causas | M (RF-039) | Sí |
| Temporada de servicio con los toros en grupo (en lugar de servicio por vaca) | M (reemplaza RF-022) | Sí |
| Alerta de vacas preñadas que no parieron al terminar la temporada de parición | S (parte de RF-027) | Sí |
| **Análisis sanitarios** (raspaje de toros, sangrado) con resultado por animal | M (RF-040; el raspaje es obligatorio) | Sí |
| **Datos comerciales de la venta** (kilos, precio por kilo, total, comprador, plazo y fecha de cobro) y ventas pendientes de cobro | S (RF-041) | Sí |
| **Reingreso** de animales que vuelven de otro campo propio | S (RF-042) | Sí |
| Destete y venta de terneros por sexo y pelaje (sin madre) con peso promedio del lote | M (amplía RF-015 y RF-026) | Sí |
| Caravana electrónica (número cargado a mano) | S (amplía RF-005) | Sí |
| Lectura de caravanas electrónicas con bastón | — | No: v2.0, con más prioridad |
| **Jornada de compra** con datos comerciales (reemplaza el "alta de varias vacas compradas") | S (RF-043) | Sí |
| Código del establecimiento para completar las caravanas | S (amplía RF-036 y RN-013) | Sí |
| Seña particular de los terneros al pie | S (amplía RF-024 y RF-038) | Sí |
| **Recordatorio de revisión** de un animal tratado (por ejemplo, a los 3 días) | M (RF-044) | Sí |
| Marca, serie y vencimiento de la vacuna, con búsqueda por serie | M (amplía RF-016 y RF-020) | Sí |
| **Cuaderno:** mellizos (1 o 2 crías por parto) | M (amplía RF-024) | Sí |
| **Cuaderno:** jornada de castración | M (amplía RF-015) | Sí |
| **Cuaderno:** conteo de partos por pelaje y sexo, vacas paridas y que faltan parir | M (amplía RF-029) | Sí |
| **Cuaderno:** corregir la madre de un ternero | S (RN-025) | Sí |
| **Cuaderno:** venta con desbaste, comisión, gastos, neto y cobro en cuotas | S (amplía RF-041, RN-026) | Sí |
| **Cuaderno:** compra de vacas con su ternero al pie y forma de pago | S (amplía RF-043) | Sí |
| **Cuaderno:** animales apartados para venta o descarte | S (RF-045) | Sí |
| **Cuaderno:** alimentación del rodeo y stock de rollos y silo | C (RF-046) | Sí |
| **Cuaderno:** "ombligo" en el catálogo de enfermedades | S (amplía RF-035) | Sí |
| Aplicaciones mínimas por ventana y rotación de drogas en desparasitaciones | S (amplía RF-017 y RF-018) | Sí |

## Historial de versiones

| Versión | Fecha | Autor | Cambios |
|---|---|---|---|
| 0.1 | 2026-10-10 | Francisco Garcia Martinez | Versión inicial |
| 0.2 | 2026-10-10 | Francisco Garcia Martinez | Respuestas del primer encuentro (bloques A y B) |
| 0.3 | 2026-10-10 | Francisco Garcia Martinez | Preguntas respondidas marcadas en la guía |
| 0.4 | 2026-10-10 | Francisco Garcia Martinez | Respuestas de las preguntas 19, 20, 27, 36, 37 y 38 |
| 0.5 | 2026-10-10 | Francisco Garcia Martinez | Respuestas de las preguntas 2, 11, 14 a 19, 21, 22, 33 y 35; plan sanitario en documento aparte |
| 0.6 | 2026-10-10 | Francisco Garcia Martinez | Guion del segundo encuentro, preguntas pendientes reformuladas y bloque I con preguntas nuevas |
| 0.7 | 2026-10-10 | Francisco Garcia Martinez | Respuestas de las preguntas 28 a 32, 34, 39, 40 y 46; guion del segundo encuentro actualizado |
| 0.8 | 2026-10-10 | Francisco Garcia Martinez | Respuestas de las preguntas 1 (corrección: cría), 48 a 56; nuevas preguntas 57 a 60 |
| 0.9 | 2026-10-10 | Francisco Garcia Martinez | Respuestas de las preguntas 23 a 26; 45 y 47 no se consideran; raspaje obligatorio |
| 0.10 | 2026-10-10 | Francisco Garcia Martinez | Sub-preguntas de desparasitación (22a a 22f) |
| 0.11 | 2026-10-10 | Francisco Garcia Martinez | Respuestas de las preguntas 22 (desparasitación) y 57 a 60 |
| 0.12 | 2026-10-10 | Francisco Garcia Martinez | Meses del tratamiento de piojos (mayo a agosto) |
| 0.13 | 2026-10-10 | Francisco Garcia Martinez | Comentarios del productor sobre la jornada de vacunación (pregunta 43, en parte) |
| 0.14 | 2026-10-10 | Francisco Garcia Martinez | Comentarios sobre tratamientos individuales, aviso de revisión y trazabilidad de vacunas (pregunta 43, en parte) |
| 0.15 | 2026-11-03 | Francisco Garcia Martinez | Hallazgos del cuaderno de campo del productor (fotos del 2026-11-03) registrados como supuestos corregidos y requisitos nuevos |
| 0.16 | 2026-11-03 | Francisco Garcia Martinez | Pregunta 8 respondida con el cuaderno de campo del productor |
| 0.17 | 2026-11-03 | Francisco Garcia Martinez | Enlace a la lista de validación de los mockups |
| 0.18 | 2026-11-03 | Francisco Garcia Martinez | Datos del productor reemplazados por datos ficticios (nombre, establecimiento, ubicación, códigos SENASA y montos) para publicar el repositorio |
| 0.19 | 2026-11-06 | Francisco Garcia Martinez | Se quita el rol Veterinario; la respuesta de la entrevista queda como se dio |
