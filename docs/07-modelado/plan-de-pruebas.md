# Plan de Pruebas

> Anexo 1, punto 5 de la guía de la cátedra.

## 1. Objetivo

Verificar que Mi Hacienda Digital cumple los requisitos funcionales y no funcionales y las reglas de negocio, y que el productor puede usarlo de forma autónoma antes de la puesta en producción.

## 2. Alcance

- **Incluye:** todos los RF (RF-001 a RF-037), los RNF verificables (RNF-001 a RNF-010 y RNF-014) y todas las reglas de negocio (RN-001 a RN-012).
- **Excluye:** pruebas de carga masiva (más allá de 5.000 animales), pruebas de penetración profesionales y funcionalidades de la v2.0.

## 3. Niveles y tipos de prueba

| Nivel | Qué se prueba | Cuándo | Herramienta |
|---|---|---|---|
| **Unitarias** | Reglas de negocio y cálculos: categoría sugerida, período de parición esperado, fin de retiro, próxima dosis, índices | En cada HU, antes del merge a `develop` | Framework de testing del stack elegido |
| **Integración** | API + base de datos: endpoints, permisos por rol, transacciones de jornada y parición | En cada HU | Framework de testing + base de datos de prueba |
| **Sistema / funcionales** | Casos de prueba CP-001 a CP-037 de punta a punta en el navegador | Al cierre de cada iteración | Manual con checklist (y E2E automatizado para los flujos críticos si el tiempo alcanza) |
| **No funcionales** | Compatibilidad, responsive, rendimiento, seguridad, respaldo | Etapa 7 | DevTools del navegador, Lighthouse, scripts de carga de datos |
| **Aceptación (UAT)** | El productor usa el sistema con sus datos reales en escenarios de su trabajo | Demo de cada iteración y etapa 7 | Guion de escenarios + acta |

**Prioridad de automatización:** RN-005 (parición), RN-008 (período de parición), RN-009 (retiro), RN-006 (categoría), el cálculo de índices (RF-029) y los permisos (RNF-007). Son la lógica más delicada y la que más se rompe con los cambios.

## 4. Entornos

| Entorno | Uso | Datos |
|---|---|---|
| Local | Desarrollo y pruebas unitarias y de integración | Datos sintéticos |
| Pruebas (staging) | Demos al productor y pruebas de sistema | Copia anonimizada o datos de ejemplo + importación de prueba del rodeo real |
| Producción | Uso real | Datos reales del productor |

## 5. Datos de prueba

- **Rodeo sintético:** script que genera 500 animales (y otro de 5.000 para RNF-009) con categorías, eventos sanitarios y 3 temporadas reproductivas con índices conocidos.
- **Planilla del productor:** el archivo real (o una muestra) para probar la importación (CP-014).
- **Cálculo manual de control:** para una temporada, los índices se calculan a mano en una planilla y se comparan con el sistema (CP-029).

## 6. Casos de prueba funcionales

| CP | RF | Escenario | Resultado esperado |
|---|---|---|---|
| CP-001 | RF-001 | Ingresar con credenciales válidas, inválidas y con usuario deshabilitado; 5 intentos fallidos | Ingreso correcto / mensaje genérico / rechazo / bloqueo de 15 min |
| CP-002 | RF-002 | Pedir la recuperación con email existente e inexistente; usar el enlace vencido | Mismo mensaje en ambos casos; el enlace vencido se rechaza |
| CP-003 | RF-003 | Crear un usuario con email repetido; deshabilitar al único administrador | Ambas operaciones rechazadas con mensaje claro |
| CP-004 | RF-004 | Dar de baja un animal y anular un evento | Ambas operaciones aparecen en la auditoría con usuario, fecha y motivo |
| CP-005 | RF-005 | Dar de alta un animal con una caravana usada por un animal activo y por uno dado de baja | Rechazo en el primer caso, alta permitida en el segundo (RN-001) |
| CP-005b | RF-005 | Alta con caravana "ab123 b081" y con "AB12 B081" | La primera se guarda como AB123B081 y se muestra AB123 B081; la segunda se rechaza por formato (RN-013) |
| CP-006 | RF-006 | Modificar la raza y la caravana de un animal | Cambios guardados; unicidad validada |
| CP-007 | RF-007 | Dar de baja por muerte con causa; luego intentar cargarle una vacuna | Sale del stock; la vacuna se rechaza (RN-002); la ficha sigue visible |
| CP-008 | RF-008 | Buscar la caravana parcial "023" y filtrar Vacas + Activas | Resultados correctos con su cantidad |
| CP-009 | RF-009 | Abrir la ficha de una vaca con historial completo | Muestra todas las pestañas con los eventos en orden y el estado reproductivo correcto |
| CP-010 | RF-010 | Vaquillona con parición registrada | Aparece en los cambios sugeridos como Vaca (RN-006); al aplicarlo queda en el historial |
| CP-011 | RF-011 | *Excluido de la v1.0* (potreros fuera del alcance) | — |
| CP-012 | RF-012 | Cargar dos pesadas con 30 días de diferencia (200 y 230 kg) | La ficha muestra una ganancia diaria de 1,0 kg/día |
| CP-013 | RF-013 | Asignar madre (macho → error) y padre toro | Rechaza un macho como madre; acepta el toro |
| CP-014 | RF-014 | Importar una planilla con 100 filas, 3 con caravana repetida y 2 con fecha inválida | Vista previa con 95 válidas y 5 errores identificados por fila; importa solo las 95 |
| CP-015 | RF-015 | Pegar 50 caravanas, 2 inexistentes, y confirmar un tratamiento | Informa las 2 inexistentes; crea 48 eventos vinculados a una jornada |
| CP-016 | RF-016 | Vacunar carbunclo a Vacas (08/10) y Toros (08/10), excluyendo 1 vaca por caravana con la observación "no pasó por la manga"; intentar con una fecha futura | 49 vacunaciones con la fecha de cada categoría y la serie; la vaca excluida queda con aviso en Pendientes y en su ficha; la fecha futura se rechaza (RN-007, RN-023) |
| CP-016b | RF-016 | Vacunar carbunclo a las 46 Vacas cargando un faltante "vaca, colorada, la que estaba renga"; luego intentar cargar 47 faltantes | Se registran 46 vacunaciones y un faltante; aparece en Pendientes "Carbunclo: 1 vaca colorada, sin identificar · la que estaba renga"; la cobertura de vacas muestra 45 de 46 · 1 sin identificar y no repite esa vaca en los avisos del plan; 47 faltantes se rechaza (RN-027) |
| CP-016c | RF-016, RF-047 | Cargar una fila "3 vacas" sin más datos; identificar una como AB123 B081, marcar otra como "ya la vacuné" el 15/10 sin identificarla y cerrar la tercera con motivo "se vendió" | La fila genera 3 avisos; AB123 B081 queda con la vacuna de la jornada *no aplicada* y su aviso sigue, ahora con la caravana y también en su ficha; los otros dos desaparecen de Pendientes; las tres acciones figuran en la auditoría (RN-027) |
| CP-017 | RF-017 | Tratar una vaca (por caravana) con 21 días de retiro; desparasitar todas las categorías | La vaca figura "no apta para venta" hasta fecha + 21 (RN-009); la desparasitación queda para todo el rodeo con la fecha de cada categoría |
| CP-017b | RF-017, RF-047 | Desparasitar contra piojo a todas las categorías excluyendo una vaca por caravana y cargando una fila "2 terneros"; identificar después uno por madre y seña | Tres avisos en Pendientes: la vaca con su caravana y los 2 terneros sin identificar; al identificar uno, su desparasitación queda *no aplicada* y su aviso sigue con los datos del ternero (RN-027, RN-021) |
| CP-018 | RF-018 | Crear el plan del año y copiarlo al siguiente | El plan copiado tiene los mismos ítems con el año nuevo |
| CP-018b | RF-018, RF-019 | Plan con brucelosis (terneras de 3 a 8 meses, diciembre – enero) y Rotatec 2.ª dosis | La alerta de brucelosis incluye solo terneras en ese rango de edad; la de 2.ª dosis, solo las vacas con 1.ª dosis (RN-015) |
| CP-019 | RF-019 | Vacuna con próxima dosis dentro de 25 días (anticipación 30) y otra vencida | Alertas "próxima" y "atrasada" en el tablero; el botón abre la jornada con los animales cargados |
| CP-020 | RF-020 | Consultar el historial de un animal y el detalle de una jornada; buscar los animales vacunados con la serie 4410 | Datos completos; el listado por serie muestra los 50 animales vacunados con esa serie |
| CP-021 | RF-021 | Registrar celo en un macho | Rechazado (RN-003) |
| CP-022 | RF-022 | Temporada del 27/8 al 11/1 con 97 hembras y los 4 toros; luego un servicio individual con el toro "Don Pancho" el 28/8 | Las 97 hembras quedan servidas sin toro por vaca (RN-004); la vaca del servicio individual tiene fecha probable de parto 7/6 y padre conocido |
| CP-023 | RF-023 | Tacto positivo sin meses de gestación en esa temporada | Período de parición esperado del 6/6 al 21/10 (RN-008) |
| CP-024 | RF-024 | Parición con cría viva hembra en una vaquillona | Se crea una Ternera sin caravana, identificada como cría de la madre, con madre y padre; se sugiere pasar la madre a Vaca (RN-005) |
| CP-025 | RF-025 | Registrar aborto en una vaca preñada | La vaca pasa a "vacía" y el aborto cuenta en los índices |
| CP-026 | RF-026 | Destete por jornada de 30 terneros con peso | Eventos creados; cambio de categoría sugerido |
| CP-026b | RF-026, RF-015 | Jornada de venta de 12 terneros machos negros y 8 hembras negras, con caravanas y 3.400 kg totales | Se toman los 20 terneros al pie de esos grupos (de mayor a menor edad): cada uno queda con caravana, destete, peso promedio de 170 kg y baja por venta; la madre queda "no verificada" (RN-014, RN-018, RN-020) |
| CP-027 | RF-027 | Temporada de parición próxima; vaca preñada sin parto al terminar la temporada; terneros que superan la edad de destete | Aparecen en las alertas reproductivas |
| CP-028 | RF-028 | Stock actual y a una fecha anterior a 5 bajas | El stock pasado incluye los 5 animales dados de baja después |
| CP-029 | RF-029 | Temporada con índices calculados a mano | Los valores del sistema coinciden con el cálculo manual, con numerador y denominador visibles |
| CP-030 | RF-030 | Bajas de 3 motivos en un período | Totales correctos por motivo y % de mortandad correcto |
| CP-031 | RF-031 | Plan con aftosa para vacas; 80% vacunadas | Cobertura 80% y listado de pendientes correcto |
| CP-032 | RF-032 | Combinar período + categoría | El reporte respeta los dos filtros y los muestra |
| CP-033 | RF-033 | Exportar el listado filtrado a PDF y Excel | Los archivos abren correctamente con los mismos datos y filtros |
| CP-034 | RF-034 | Ingresar como Administrador y como Consulta | El tablero muestra stock y alertas; Consulta no ve los botones de carga |
| CP-035 | RF-035 | Intentar eliminar una raza en uso; desactivarla | La eliminación se rechaza; desactivada, no aparece en las altas nuevas |
| CP-036 | RF-036 | Cambiar el nombre y la anticipación de alertas | Se reflejan en los PDF y en el cálculo de alertas |
| CP-037 | RF-037 | Descargar el respaldo | Excel con una hoja por entidad; queda en la auditoría |
| CP-038 | RF-038 | Registrar diarrea en un ternero sin caravana (por la madre) con causa probable; luego evolución "muerto" | El caso queda en la ficha; el ternero se da de baja por muerte con la diarrea como causa |
| CP-039 | RF-039 | Temporada con 50 terneros nacidos: 2 muertos al nacer, 1 muerto por diarrea, 8 con diarrea (uno con dos casos) y 5 con neumonía | Mortalidad 6%, diarrea 16%, neumonía 10%, con numerador y denominador (RN-016, RN-017) |
| CP-040 | RF-040 | Raspaje de 4 toros: 3 negativos y 1 positivo | Los resultados quedan en cada ficha; el positivo aparece como alerta |
| CP-041 | RF-041 | Venta de 50 terneros, 11.300 kg, 3 % de desbaste, $ 4.000/kg, 4 % de comisión | Kilos netos 10.961, promedio 219 kg, bruto $ 43.844.000, neto $ 42.090.240 (RN-020) |
| CP-042 | RF-042 | Reingresar un animal dado de baja por traslado; intentar con uno vendido | El trasladado vuelve a estar activo con su historia y el reingreso registrado; el vendido se rechaza (RN-019) |
| CP-043 | RF-043 | Compra de 2 vacas a $ 1.812.500 por cabeza con caravanas de otro establecimiento | Se crean 2 vacas con origen "Comprado" y sus caravanas; la compra figura con total $ 3.625.000 |
| CP-044 | RF-044 | Tratar una vaca y pedir aviso a los 3 días; marcarlo como hecho | El aviso aparece en Pendientes el tercer día y desaparece al marcarlo (RN-024) |
| CP-041b | RF-041 | La venta anterior en 2 cuotas (30 y 60 días); cobrar solo la primera | La venta sigue pendiente y la 2.ª cuota aparece en Pendientes al vencer (RN-026) |
| CP-024b | RF-024 | Parto de mellizos (1 macho vivo, 1 hembra viva) | Se crean 2 terneros al pie vinculados a la madre; cuentan 2 nacidos y 1 parto |
| CP-015b | RF-015 | Jornada de castración de 38 terneros machos | 38 terneros quedan castrados con la fecha |
| CP-029b | RF-029 | Temporada con 46 nacidos (19 colorados, 27 negros) y 3 vacas sin parir | El conteo muestra los nacidos por pelaje y sexo, las vacas paridas y "faltan parir 3" |
| CP-013b | RF-013 | Corregir la madre de un ternero ("era otra vaca") | La madre cambia, queda en la auditoría con motivo y los índices se recalculan (RN-025) |
| CP-043b | RF-043 | Compra de 4 vacas con 4 terneros al pie, pagada con cheque | Se crean 4 vacas y 4 terneros vinculados a cada vaca; la compra guarda la forma de pago |
| CP-045 | RF-045 | Apartar 7 vacas vacías para vender y cargar la venta desde la lista | Las 7 figuran como apartadas y la jornada de venta las trae elegidas |
| CP-046 | RF-046 | Stock de 20 rollos; dar 1 rollo al rodeo durante 11 días | El stock queda en 9 rollos y cada entrega queda registrada |
| CP-047 | RF-047 | Faltante "vaca, colorada, la que estaba renga" en un rodeo con 3 vacas coloradas: abrir Resolver, corregir la observación e identificar una de ellas; repetir buscando una vaca negra | Se ve lo anotado; las 3 coloradas aparecen primero y se puede elegir otra caravana; la observación corregida queda guardada; al identificar, el aviso sigue con la caravana hasta marcarla como vacunada; todo queda en la auditoría (RN-027) |
| CP-048 | RF-048 | Rodeo con una vacuna obligatoria pendiente, un recordatorio, un cobro y un faltante; filtrar por Cobros; cargar la vacuna que faltaba | Los pendientes aparecen agrupados por urgencia con su cantidad; el filtro deja solo el cobro; la vacuna cargada desaparece de la lista y baja el contador del menú |
| CP-049 | RF-049 | Como Administrador, anular un registro de una jornada sin motivo y con motivo; anular toda la jornada | Sin motivo se rechaza; con motivo el registro queda tachado en el historial y deja de contar en reportes; la jornada muestra cuántos animales afecta antes de confirmar; todo queda en la auditoría (RN-011) |
| CP-050 | RF-050 | Entrar como Consulta y como Peón; intentar anular una jornada desde la pantalla y llamando directo a la API | Consulta no ve botones de carga; Peón carga pero no ve Anular; la API rechaza la operación con un error de permisos (RNF-007) |
| CP-038b | RF-038 | Registrar diarrea en "un ternero macho negro, mancha blanca en la frente" sin madre conocida | El caso se registra sobre ese ternero; si no se lo identifica, cuenta como un ternero distinto (RN-021) |
| CP-018c | RF-018, RF-019 | Plan con mosca (dic – mar, 3 aplicaciones) y una sola aplicación hecha | El pendiente sigue y muestra "1 de 3" (RN-022) |

## 7. Casos de prueba no funcionales

| CP | RNF | Verificación | Criterio de aprobación |
|---|---|---|---|
| CP-N01 | RNF-001 | Recorrer los flujos principales en Chrome (navegador del productor), Edge y Firefox (Windows) | Sin errores visuales ni funcionales |
| CP-N02 | RNF-002 | Ver todas las pantallas a 360, 768 y 1366 px | Sin scroll horizontal; todo accesible |
| CP-N03 | RNF-003 | Checklist de usabilidad + Lighthouse Accesibilidad | Letra ≥ 16 px; puntaje ≥ 90; cargas frecuentes en ≤ 3 clics |
| CP-N04 | RNF-004 | Después de la capacitación, el productor da de alta un animal sin ayuda (cronometrado) | < 2 minutos |
| CP-N05 | RNF-005 | Inspeccionar la base de datos | Las contraseñas solo están como hash bcrypt o Argon2 |
| CP-N06 | RNF-006 | Acceder por HTTP | Redirige a HTTPS; certificado válido |
| CP-N07 | RNF-007 | Llamar a la API con un token de Consulta a endpoints de alta y baja | Respuesta 403 |
| CP-N08 | RNF-008 | Restaurar un respaldo en el entorno de pruebas | Datos completos restaurados |
| CP-N09 | RNF-009 | Listado con 5.000 animales, red limitada a 2 Mbps (DevTools) | Carga en < 3 s |
| CP-N10 | RNF-010 | Revisar fechas y números en pantallas y exportaciones | dd/mm/aaaa y separadores argentinos |
| CP-N14 | RNF-014 | Dar de baja y anular, luego revisar la base | Los registros siguen existiendo con su estado |

## 8. Pruebas de aceptación con el productor

Escenarios con datos reales, en el orden de su trabajo:

1. "Cargá las 6 vacas nuevas que compraste la semana pasada."
2. "Pasá al sistema la vacunación de aftosa que hiciste hoy en la manga (tenés la lista en la libreta)."
3. "Cargá el tacto de las vaquillonas."
4. "Parió la vaca 0231: registralo."
5. "¿Cuántas vacas tenés hoy? ¿Qué te falta vacunar este mes?"
6. "Sacá el % de preñez de la última temporada e imprimilo."

**Criterio de aceptación:** el productor completa los 6 escenarios sin ayuda (o con una sola consulta en total) y firma el acta de aceptación.

## 9. Gestión de defectos

| Severidad | Definición | Tratamiento |
|---|---|---|
| Crítica | Pérdida o corrupción de datos, o sistema inaccesible | Se corrige antes de cualquier otra tarea (hotfix) |
| Alta | Una funcionalidad Must no funciona | Se corrige en la iteración en curso |
| Media | Hay un camino alternativo para hacer la tarea, o el error es en una funcionalidad Should | Siguiente iteración |
| Baja | Estética, textos | Backlog |

Los defectos se registran como *issues* en GitHub con la etiqueta `bug` y su severidad.

## 10. Criterios de entrada y salida

- **Entrada a la etapa 7:** todos los RF Must implementados con pruebas unitarias y de integración pasando.
- **Salida (aprobación para producción):** 100% de los CP de prioridad Must aprobados, ningún defecto crítico o alto abierto, UAT aprobada por el productor.

## Historial de versiones

| Versión | Fecha | Autor | Cambios |
|---|---|---|---|
| 0.1 | 2026-10-10 | Francisco Garcia Martinez | Versión inicial |
| 0.2 | 2026-10-10 | Francisco Garcia Martinez | CP-011 excluido (potreros); filtros sin potrero; Chrome como navegador del productor |
| 0.3 | 2026-10-10 | Francisco Garcia Martinez | Casos para formato de caravana, plan con condiciones y jornada de venta; cría sin caravana |
| 0.4 | 2026-10-10 | Francisco Garcia Martinez | CP-013, CP-022, CP-023 y CP-027 actualizados; nuevos CP-038 y CP-039 |
| 0.5 | 2026-10-10 | Francisco Garcia Martinez | CP-026b por grupo con peso promedio; nuevos CP-040 a CP-042 |
| 0.6 | 2026-10-10 | Francisco Garcia Martinez | CP-019 con 30 días de anticipación |
| 0.7 | 2026-10-10 | Francisco Garcia Martinez | Nuevos CP-043, CP-038b y CP-018c |
| 0.8 | 2026-10-10 | Francisco Garcia Martinez | CP-016 por categoría; CP-015 con tratamiento |
| 0.9 | 2026-10-10 | Francisco Garcia Martinez | CP-017 y CP-020 actualizados; nuevo CP-044 |
| 0.10 | 2026-11-03 | Francisco Garcia Martinez | CP-022, CP-023 y CP-041 actualizados; nuevos CP-041b, CP-024b, CP-015b, CP-029b, CP-013b, CP-043b, CP-045 y CP-046 |
| 0.11 | 2026-11-03 | Francisco Garcia Martinez | Nombre del proyecto: Mi Hacienda Digital (antes Mi Yerra Digital) |
| 0.12 | 2026-11-03 | Francisco Garcia Martinez | Datos del productor reemplazados por datos ficticios (nombre, establecimiento, ubicación, códigos SENASA y montos) para publicar el repositorio |
| 0.13 | 2026-11-04 | Francisco Garcia Martinez | CP-016b, CP-016c y CP-017b: animales que faltaron sin identificar (RN-027) |
| 0.14 | 2026-11-06 | Francisco Garcia Martinez | CP-016, CP-016b, CP-016c y CP-017b actualizados (pelaje, observación y aviso para todos, RN-027); nuevos CP-047 a CP-050 |
