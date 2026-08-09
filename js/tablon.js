/*
 * Construye el listado del Tablón de Anuncios Corporativo a partir del
 * listado definido en juntas-data.js (variable global JUNTAS).
 */
(function () {
  "use strict";

  function crearElementoJunta(junta) {
    var item = document.createElement("li");

    var titulo = document.createElement("h3");
    titulo.textContent = junta.titulo;

    var etiqueta = document.createElement("span");
    etiqueta.className =
      "etiqueta " + (junta.estado === "celebrada" ? "celebrada" : "proxima");
    etiqueta.textContent =
      junta.estado === "celebrada" ? "Celebrada" : "Próxima";
    titulo.appendChild(etiqueta);

    var meta = document.createElement("p");
    meta.className = "meta";
    meta.textContent = junta.fecha + " — " + junta.lugar;

    var enlace = document.createElement("a");
    enlace.className = "enlace-junta";
    enlace.href = junta.enlace;
    enlace.textContent = "Ver convocatoria completa \u2192";

    item.appendChild(titulo);
    item.appendChild(meta);
    item.appendChild(enlace);
    return item;
  }

  function iniciar() {
    var contenedor = document.getElementById("lista-juntas");
    if (!contenedor) {
      return;
    }

    var juntas = typeof JUNTAS !== "undefined" ? JUNTAS.slice() : [];

    if (juntas.length === 0) {
      var aviso = document.createElement("p");
      aviso.className = "aviso-vacio";
      aviso.textContent =
        "No hay convocatorias publicadas en este momento.";
      contenedor.replaceWith(aviso);
      return;
    }

    juntas.sort(function (a, b) {
      return a.fechaISO < b.fechaISO ? 1 : -1;
    });

    juntas.forEach(function (junta) {
      contenedor.appendChild(crearElementoJunta(junta));
    });
  }

  document.addEventListener("DOMContentLoaded", iniciar);
})();
