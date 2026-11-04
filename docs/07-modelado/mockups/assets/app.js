/* ==========================================================================
   Mi Hacienda Digital — Mockups
   Arma el menú lateral y la barra superior comunes a todas las pantallas
   y agrega la interacción mínima para recorrer los mockups (pestañas,
   modales, desplegables, mensaje "Guardado"). No hay datos reales.
   ========================================================================== */

(function () {
  "use strict";

  /* ---------- Íconos (trazos SVG de 24x24) ---------- */
  var ICONOS = {
    inicio: '<path d="M3 11l9-8 9 8"/><path d="M5 10v10h5v-6h4v6h5V10"/>',
    animales: '<path d="M20.6 13.4l-7.2 7.2a2 2 0 01-2.8 0L3 13V3h10l7.6 7.6a2 2 0 010 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
    jornadas: '<rect x="5" y="4" width="14" height="17" rx="2"/><path d="M9 2h6v4H9z"/><path d="M9 11h6M9 15h4"/>',
    alertas: '<path d="M6 16v-5a6 6 0 0112 0v5l2 2H4z"/><path d="M10 21h4"/>',
    sanidad: '<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M12 9v6M9 12h6"/>',
    reproduccion: '<path d="M12 20s-7-4.4-7-10a4 4 0 017-2.7A4 4 0 0119 10c0 5.6-7 10-7 10z"/>',
    alimentacion: '<circle cx="12" cy="12" r="8"/><path d="M12 4a8 8 0 010 16M12 8a4 4 0 010 8"/>',
    reportes: '<path d="M4 20V11M10 20V4M16 20v-6M2 20h20"/>',
    establecimiento: '<path d="M3 21h18M5 21V9l7-5 7 5v12"/><path d="M10 21v-6h4v6"/>',
    catalogos: '<path d="M9 6h12M9 12h12M9 18h12"/><circle cx="4.5" cy="6" r="1.2"/><circle cx="4.5" cy="12" r="1.2"/><circle cx="4.5" cy="18" r="1.2"/>',
    usuarios: '<circle cx="9" cy="8" r="4"/><path d="M2 21c0-4 3-6.5 7-6.5s7 2.5 7 6.5"/><path d="M16 4.3a4 4 0 010 7.4M22 21c0-3-1.7-5.2-4-6"/>',
    importar: '<path d="M12 15V3M7 8l5-5 5 5"/><path d="M4 15v5h16v-5"/>',
    buscar: '<circle cx="11" cy="11" r="7"/><path d="M21 21l-5-5"/>',
    menu: '<path d="M3 6h18M3 12h18M3 18h18"/>',
    salir: '<path d="M9 21H4V3h5M16 17l5-5-5-5M21 12H9"/>',
    mas: '<path d="M12 5v14M5 12h14"/>',
    volver: '<path d="M15 18l-6-6 6-6"/>',
    descargar: '<path d="M12 3v12M7 10l5 5 5-5"/><path d="M4 17v4h16v-4"/>',
    pdf: '<path d="M14 3H6v18h12V7z"/><path d="M14 3v4h4"/><path d="M9 13h6M9 17h4"/>',
    excel: '<rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M3 15h18M9 3v18"/>',
    editar: '<path d="M4 20h4L19 9l-4-4L4 16z"/><path d="M14 6l4 4"/>',
    baja: '<path d="M4 7h16M10 11v6M14 11v6"/><path d="M6 7l1 13h10l1-13M9 7V4h6v3"/>',
    ok: '<path d="M5 12l5 5 9-10"/>',
    info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v6M12 7.5v.5"/>',
    aviso: '<path d="M12 3l10 18H2z"/><path d="M12 10v5M12 18v.5"/>',
    ojo: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    calendario: '<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
    filtro: '<path d="M3 5h18l-7 8v6l-4 2v-8z"/>',
    flecha: '<path d="M9 6l6 6-6 6"/>',
    respaldo: '<ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/>',
    llave: '<circle cx="8" cy="15" r="4"/><path d="M11 12l9-9M17 6l3 3M15 8l2 2"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 6 9-6"/>'
  };

  function icono(nombre, clase) {
    return '<svg class="ico ' + (clase || "") + '" viewBox="0 0 24 24" aria-hidden="true">' + (ICONOS[nombre] || "") + "</svg>";
  }

  /* ---------- Menú ---------- */
  var MENU = [
    { grupo: "Trabajo diario" },
    { id: "inicio", texto: "Inicio", href: "inicio.html", ico: "inicio" },
    { id: "animales", texto: "Animales", href: "animales.html", ico: "animales" },
    { id: "jornadas", texto: "Jornadas", href: "jornadas.html", ico: "jornadas" },
    { id: "alertas", texto: "Pendientes", href: "alertas.html", ico: "alertas", cuenta: 10 },
    { grupo: "Control" },
    { id: "sanidad", texto: "Sanidad", href: "sanidad.html", ico: "sanidad" },
    { id: "reproduccion", texto: "Reproducción", href: "reproduccion.html", ico: "reproduccion" },
    { id: "alimentacion", texto: "Alimentación", href: "alimentacion.html", ico: "alimentacion" },
    { id: "reportes", texto: "Reportes", href: "reportes.html", ico: "reportes" },
    { grupo: "Configuración" },
    { id: "establecimiento", texto: "Establecimiento", href: "configuracion.html", ico: "establecimiento" },
    { id: "catalogos", texto: "Catálogos", href: "catalogos.html", ico: "catalogos" },
    { id: "usuarios", texto: "Usuarios", href: "usuarios.html", ico: "usuarios" },
    { id: "importar", texto: "Importar planilla", href: "importar.html", ico: "importar" }
  ];

  function armarMenu(activo) {
    var html = MENU.map(function (m) {
      if (m.grupo) return '<div class="menu-grupo">' + m.grupo + "</div>";
      return '<a class="item' + (m.id === activo ? " activo" : "") + '" href="' + m.href + '">' +
        icono(m.ico) + "<span>" + m.texto + "</span>" +
        (m.cuenta ? '<span class="cuenta">' + m.cuenta + "</span>" : "") + "</a>";
    }).join("");

    return '<aside class="menu" id="menu">' +
      '<a class="marca" href="inicio.html"><span class="marca-logo">MH</span>' +
      '<span class="marca-texto">Mi Hacienda Digital<small>Establecimiento Los Álamos</small></span></a>' +
      "<nav>" + html + "</nav>" +
      '<div class="menu-pie">v1.0 · Bs. As.</div>' +
      "</aside>";
  }

  function armarBarra() {
    return '<header class="barra">' +
      '<button class="btn-menu" type="button" id="btn-menu" aria-label="Abrir menú">' + icono("menu") + "</button>" +
      '<form class="buscador" action="animal-ficha.html" role="search">' + icono("buscar") +
      '<input name="caravana" type="search" placeholder="Buscar caravana… (ej: AB123 B081)" aria-label="Buscar caravana"></form>' +
      '<div class="barra-der">' +
      '<a class="campana" href="alertas.html" title="Pendientes">' + icono("alertas") + '<span class="punto">10</span></a>' +
      '<div class="desplegable" data-desplegable>' +
      '<button class="usuario btn" type="button" style="min-height:auto;border-radius:99px">' +
      '<span class="avatar">EG</span><span class="nombre-usuario" style="text-align:left">Juan<small class="chico">Administrador</small></span></button>' +
      '<div class="desplegable-menu">' +
      '<a href="usuarios.html">Mis datos y contraseña</a>' +
      '<a href="login.html">' + "Salir" + "</a>" +
      "</div></div>" +
      "</div></header>";
  }

  function armarLayout() {
    var body = document.body;
    if (body.dataset.layout !== "app") return;

    var contenido = document.querySelector("main.contenido");
    var app = document.createElement("div");
    app.className = "app";
    app.innerHTML = armarMenu(body.dataset.nav) + '<div class="principal">' + armarBarra() + "</div>";
    body.insertBefore(app, contenido);
    app.querySelector(".principal").appendChild(contenido);

    document.getElementById("btn-menu").addEventListener("click", function (e) {
      e.stopPropagation();
      body.classList.toggle("menu-abierto");
    });
    document.addEventListener("click", function (e) {
      if (body.classList.contains("menu-abierto") && !e.target.closest("#menu")) body.classList.remove("menu-abierto");
    });
  }

  /* ---------- Distintivo de mockup ---------- */
  function armarDistintivo() {
    if (document.body.dataset.indice === "si") return;
    var codigo = document.body.dataset.codigo;
    var a = document.createElement("a");
    a.className = "mockup-badge";
    a.href = "index.html";
    a.textContent = "Mockup " + (codigo ? codigo + " · " : "") + "ver todas las pantallas";
    document.body.appendChild(a);
  }

  /* ---------- Íconos declarativos: <i data-ico="mas"></i> ---------- */
  function reemplazarIconos() {
    document.querySelectorAll("i[data-ico]").forEach(function (i) {
      i.outerHTML = icono(i.dataset.ico, i.className);
    });
  }

  /* ---------- Pestañas ---------- */
  function activarTab(boton) {
    var ambito = boton.closest("[data-tabs-ambito]") || document;
    ambito.querySelectorAll(".tabs [data-tab]").forEach(function (b) { b.classList.toggle("activo", b === boton); });
    ambito.querySelectorAll(".tab-panel").forEach(function (p) { p.classList.toggle("activo", p.id === boton.dataset.tab); });
  }

  function iniciarTabs() {
    document.querySelectorAll(".tabs [data-tab]").forEach(function (b) {
      b.addEventListener("click", function (e) {
        e.preventDefault();
        activarTab(b);
        if (b.dataset.hash !== "no") history.replaceState(null, "", "#" + b.dataset.tab);
      });
    });
    if (location.hash) {
      var b = document.querySelector('.tabs [data-tab="' + location.hash.slice(1) + '"]');
      if (b) activarTab(b);
    }
  }

  /* ---------- Modales ---------- */
  function iniciarModales() {
    document.querySelectorAll("[data-abrir]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        var m = document.getElementById(el.dataset.abrir);
        if (m) m.classList.add("abierto");
      });
    });
    document.querySelectorAll(".modal-fondo").forEach(function (fondo) {
      fondo.addEventListener("click", function (e) {
        if (e.target === fondo || e.target.closest("[data-cerrar]")) fondo.classList.remove("abierto");
      });
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") document.querySelectorAll(".modal-fondo.abierto").forEach(function (m) { m.classList.remove("abierto"); });
    });
  }

  /* ---------- Desplegables ---------- */
  function iniciarDesplegables() {
    document.addEventListener("click", function (e) {
      var d = e.target.closest("[data-desplegable]");
      document.querySelectorAll("[data-desplegable].abierto").forEach(function (x) { if (x !== d) x.classList.remove("abierto"); });
      if (!d) return;
      if (!e.target.closest(".desplegable-menu")) d.classList.toggle("abierto");
      else if (e.target.closest("a")) d.classList.remove("abierto");
    });
  }

  /* ---------- Mensaje "Guardado" ---------- */
  function mostrarToast(texto) {
    var t = document.querySelector(".toast");
    if (!t) {
      t = document.createElement("div");
      t.className = "toast";
      t.setAttribute("role", "status");
      document.body.appendChild(t);
    }
    t.innerHTML = icono("ok") + "<span>" + texto + "</span>";
    t.classList.add("visible");
    clearTimeout(t._timer);
    t._timer = setTimeout(function () { t.classList.remove("visible"); }, 2600);
  }

  function iniciarGuardar() {
    document.querySelectorAll("[data-guardar]").forEach(function (el) {
      el.addEventListener("click", function (e) {
        e.preventDefault();
        var fondo = el.closest(".modal-fondo");
        if (fondo) fondo.classList.remove("abierto");
        mostrarToast(el.dataset.guardar || "Guardado");
        if (el.dataset.ir) setTimeout(function () { location.href = el.dataset.ir; }, 1300);
      });
    });
  }

  /* ---------- Selección exclusiva de tarjetas (.tipos) ---------- */
  function iniciarTipos() {
    document.querySelectorAll(".tipos").forEach(function (grupo) {
      grupo.querySelectorAll(".tipo").forEach(function (t) {
        t.addEventListener("click", function () {
          grupo.querySelectorAll(".tipo").forEach(function (x) { x.classList.toggle("activo", x === t); });
          grupo.dispatchEvent(new CustomEvent("cambio", { detail: t.dataset.valor }));
        });
      });
    });
  }

  window.MiHacienda = { icono: icono, toast: mostrarToast, activarTab: activarTab };

  document.addEventListener("DOMContentLoaded", function () {
    armarLayout();
    reemplazarIconos();
    armarDistintivo();
    iniciarTabs();
    iniciarModales();
    iniciarDesplegables();
    iniciarGuardar();
    iniciarTipos();
  });
})();
