# Diagrama de Clases

> Anexo 1, punto 3 de la guía de la cátedra. Entrega incremental. Modelo de dominio independiente del lenguaje: los tipos y la sintaxis definitivos se escriben en TypeScript, el lenguaje del stack elegido.

## Modelo de dominio

```mermaid
classDiagram
    direction LR

    class Usuario {
        +int id
        +string nombre
        +string email
        -string passwordHash
        +Rol rol
        +bool activo
        +verificarPassword(pwd) bool
        +puede(permiso) bool
    }
    class Rol {
        <<enumeration>>
        ADMINISTRADOR
        PEON
        CONSULTA
    }
    Usuario --> Rol

    class Establecimiento {
        +string nombre
        +string renspa
        +string codigoCaravana
        +string localidad
        +int diasAnticipacionAlertas
        +int edadDesteteDias
    }

    class Animal {
        +int id
        +string caravana
        +string caravanaElectronica
        +bool madreVerificada
        +Sexo sexo
        +Date fechaNacimiento
        +bool castrado
        +EstadoAnimal estado
        +Raza raza
        +Categoria categoria
        +Animal madre
        +Animal padre
        +edadEnMeses() int
        +identificacion() string
        +categoriaSugerida() Categoria
        +estadoReproductivo() EstadoReproductivo
        +enRetiro() bool
        +darDeBaja(fecha, motivo, causa)
        +reingresar(fecha)
        +apartar(destino, motivo)
        +corregirMadre(madre, motivo)
        +cambiarCategoria(categoria, fecha)
    }
    class Sexo {
        <<enumeration>>
        MACHO
        HEMBRA
    }
    class EstadoAnimal {
        <<enumeration>>
        ACTIVO
        BAJA
    }
    class EstadoReproductivo {
        <<enumeration>>
        NO_APLICA
        VACIA
        SERVIDA
        PRENADA
    }
    Animal --> Sexo
    Animal --> EstadoAnimal
    Animal ..> EstadoReproductivo

    class Raza {
        +string nombre
    }
    class Categoria {
        +string nombre
        +Sexo sexo
    }
    Animal "*" --> "1" Raza
    Animal "*" --> "1" Categoria
    Animal "*" --> "0..1" Animal : madre / padre

    class Evento {
        <<abstract>>
        +int id
        +Date fecha
        +Animal animal
        +Jornada jornada
        +bool anulado
        +anular(usuario, motivo)
        +validar()
    }
    class Pesada {
        +decimal pesoKg
        +gananciaDiariaDesde(anterior) decimal
    }
    class CambioCategoria {
        +Categoria anterior
        +Categoria nueva
        +bool automatico
    }
    class EventoSanitario {
        +TipoSanitario tipo
        +ProductoSanitario producto
        +string dosis
        +string serie
        +Date vencimientoSerie
        +Categoria categoria
        +string diagnostico
        +Enfermedad enfermedad
        +string causaProbable
        +Evolucion evolucion
        +ResultadoAnalisis resultadoAnalisis
        +Objetivo objetivo
        +Date finRetiro
        +Date proximaDosis
        +bool aplicado
        +calcularFinRetiro()
        +calcularProximaDosis()
    }
    class EventoReproductivo {
        <<abstract>>
        +TemporadaServicio temporada
    }
    class Celo
    class Servicio {
        +Date fechaHasta
    }
    class Tacto {
        +bool prenada
        +int mesesGestacion
        +Date fechaProbableParto
        +periodoParicionEsperado() Periodo
    }
    class Paricion {
        +TipoParto tipoParto
        +bool criaViva
        +List~Animal~ crias
        +bool mellizos
        +registrarCrias(datos) List~Animal~
    }
    class Aborto
    class Destete {
        +Animal cria
        +decimal peso
    }

    Evento <|-- Pesada
    Evento <|-- CambioCategoria
    Evento <|-- EventoSanitario
    Evento <|-- EventoReproductivo
    EventoReproductivo <|-- Celo
    EventoReproductivo <|-- Servicio
    EventoReproductivo <|-- Tacto
    EventoReproductivo <|-- Paricion
    EventoReproductivo <|-- Aborto
    EventoReproductivo <|-- Destete
    Animal "1" o-- "*" Evento : historial

    class ProductoSanitario {
        +string nombre
        +TipoProducto tipo
        +ViaAplicacion via
        +string marca
        +int diasRetiro
        +int intervaloRefuerzoDias
        +bool obligatorio
    }
    class PlanSanitarioItem {
        +int anio
        +ProductoSanitario producto
        +int dosisNumero
        +List~Categoria~ categorias
        +int mesDesde
        +int mesHasta
        +Sexo sexo
        +int edadMinMeses
        +int edadMaxMeses
        +bool soloPrenadas
        +int cadaAnios
        +int aplicacionesMinimas
        +bool activo
        +aplicaA(animal, fecha) bool
    }
    EventoSanitario --> ProductoSanitario
    class Recordatorio {
        +Animal animal
        +EventoSanitario origen
        +Date fecha
        +string motivo
        +bool hecho
        +marcarHecho(fecha)
    }
    Recordatorio --> EventoSanitario
    class Enfermedad {
        +string nombre
    }
    EventoSanitario --> Enfermedad
    PlanSanitarioItem --> ProductoSanitario
    PlanSanitarioItem "*" --> "1..*" Categoria

    class TemporadaServicio {
        +string nombre
        +Date inicio
        +Date fin
        +List~Animal~ toros
        +periodoParicion() Periodo
    }
    EventoReproductivo --> TemporadaServicio

    class Jornada {
        +int id
        +Date fecha
        +TipoJornada tipo
        +string descripcion
        +Usuario usuario
        +List~Evento~ eventos
        +aplicarA(animales, datos)
    }
    Jornada "0..1" o-- "*" Evento
    class FaltanteJornada {
        +Jornada jornada
        +Categoria categoria
        +Animal animal
        +string pelaje
        +string observacion
        +string estado
        +pendiente() bool
        +actualizarDetalle(pelaje, observacion, usuario)
        +identificar(animal, usuario)
        +marcarAplicado(fecha, usuario)
        +cerrar(motivo, usuario)
    }
    Jornada "1" *-- "*" FaltanteJornada : animales que faltaron
    FaltanteJornada "*" --> "1" Categoria
    FaltanteJornada "*" --> "0..1" Animal : identificado
    class Venta {
        +string comprador
        +int cantidad
        +decimal kilosTotales
        +decimal desbastePct
        +decimal precioKg
        +decimal comisionPct
        +decimal gastos
        +List~CobroCuota~ cuotas
        +total() decimal
        +neto() decimal
        +pesoPromedio() decimal
        +cobrada() bool
    }
    class CobroCuota {
        +int numero
        +Date fechaPrevista
        +decimal monto
        +bool cobrada
    }
    Venta "1" *-- "1..*" CobroCuota
    Jornada "1" --> "0..1" Venta
    class Compra {
        +string vendedor
        +int cantidad
        +decimal kilosTotales
        +decimal precioKg
        +decimal precioCabeza
        +string formaPago
        +Date fechaPago
        +total() decimal
    }
    Jornada "1" --> "0..1" Compra
    class Suplementacion {
        +Date fecha
        +TipoAlimento tipo
        +decimal cantidad
        +string destino
    }
    class Reserva {
        +TipoAlimento tipo
        +decimal stock
        +descontar(cantidad)
    }
    Suplementacion --> Reserva
    Jornada --> Usuario
```

## Servicios de aplicación

Clases que concentran la lógica que cruza varias entidades.

```mermaid
classDiagram
    class ServicioAnimales {
        +alta(datos) Animal
        +importar(planilla) ResultadoImportacion
        +buscar(filtros) List~Animal~
        +sugerirCambiosCategoria() List~CambioSugerido~
    }
    class ServicioJornadas {
        +crear(tipo, fecha, animales, datos) Jornada
        +resolverCaravanas(lista) ResultadoResolucion
    }
    class ServicioAlertas {
        +alertasSanitarias(fecha) List~Alerta~
        +alertasReproductivas(fecha) List~Alerta~
        +alertasDeAnimal(animal) List~Alerta~
    }
    class ServicioReportes {
        +stock(fecha, filtros) ReporteStock
        +indicesReproductivos(temporada) ReporteIndices
        +mortandad(desde, hasta, filtros) ReporteBajas
        +coberturaSanitaria(anio) ReporteCobertura
        +terneros(temporada) ReporteTerneros
        +exportar(reporte, formato) Archivo
    }
    class ServicioAuditoria {
        +registrar(usuario, accion, entidad, id, detalle)
        +consultar(filtros) List~RegistroAuditoria~
    }
    class Alerta {
        +TipoAlerta tipo
        +string descripcion
        +Date fechaVencimiento
        +List~Animal~ animales
    }
    ServicioAlertas ..> Alerta
    ServicioAlertas ..> FaltanteJornada : avisos pendientes
    ServicioJornadas ..> ServicioAuditoria
    ServicioAnimales ..> ServicioAuditoria
```

## Notas

- `Animal.categoriaSugerida()` implementa la RN-006 y `Tacto.calcularFechaProbableParto()` la RN-008.
- `Paricion.registrarCria()` implementa la RN-005: crea el `Animal` cría con madre, padre (del último `Servicio`) y categoría Ternero o Ternera.
- `Evento.validar()` aplica la RN-002 (animal activo), la RN-003 (solo hembras en eventos reproductivos) y la RN-007 (fechas válidas).
- `Evento.anular()` implementa la RNF-014 y la RN-011 (solo el administrador, con auditoría).
- `FaltanteJornada` implementa la RN-027: cada animal que no se vacunó o desparasitó, identificado o no. `identificar()` completa `animal` y marca `aplicado = false` en su `EventoSanitario` de la jornada (no es una anulación: lo puede hacer quien carga vacunas, con auditoría), pero no cierra el aviso. `marcarAplicado()` y `cerrar()` lo cierran. `pendiente()` alimenta el aviso de `ServicioAlertas` y la cobertura.

## Historial de versiones

| Versión | Fecha | Autor | Cambios |
|---|---|---|---|
| 0.1 | 2026-10-10 | Francisco Garcia Martinez | Versión inicial |
| 0.2 | 2026-10-10 | Francisco Garcia Martinez | Rol `ENCARGADO` renombrado a `PEON` |
| 0.3 | 2026-10-10 | Francisco Garcia Martinez | Sin `Potrero` ni `Movimiento` (potreros fuera de la v1.0) |
| 0.4 | 2026-10-10 | Francisco Garcia Martinez | Sin `caravanaOficial`; `identificacion()` para terneros sin caravana; `PlanSanitarioItem` con ventana y condiciones |
| 0.5 | 2026-10-10 | Francisco Garcia Martinez | Sin `Pajuela`; toros por temporada; período de parición; `Enfermedad` y casos en `EventoSanitario`; reporte de terneros |
| 0.6 | 2026-10-10 | Francisco Garcia Martinez | `Venta`, reingreso, caravana electrónica, madre verificada, resultado de análisis y frecuencia del plan |
| 0.7 | 2026-10-10 | Francisco Garcia Martinez | `Compra`, código de caravana, vía de aplicación, objetivo de desparasitación y aplicaciones mínimas |
| 0.8 | 2026-10-10 | Francisco Garcia Martinez | `loteProducto` pasa a `serie`; categoría de la vacunación |
| 0.9 | 2026-10-10 | Francisco Garcia Martinez | `Recordatorio`; marca y vencimiento de la serie |
| 0.10 | 2026-11-03 | Francisco Garcia Martinez | Parición con 1 o 2 crías, `CobroCuota`, desbaste y comisión en `Venta`, forma de pago, `Suplementacion` y `Reserva`, apartar y corregir madre |
| 0.11 | 2026-11-04 | Francisco Garcia Martinez | `FaltanteJornada` y `EventoSanitario.aplicado` (RN-027: animales que faltaron vacunar o desparasitar sin identificar) |
| 0.12 | 2026-11-06 | Francisco Garcia Martinez | `FaltanteJornada` por animal, con pelaje, observación y estado; `actualizarDetalle()` y `marcarAplicado()` (RN-027) |
| 0.13 | 2026-11-06 | Francisco Garcia Martinez | Tipos y sintaxis definitivos en TypeScript, por el stack elegido |
| 0.14 | 2026-11-06 | Francisco Garcia Martinez | Se quita `VETERINARIO` del enumerado `Rol` |
