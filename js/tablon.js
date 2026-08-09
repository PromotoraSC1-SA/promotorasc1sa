/*
 * Construye el listado de la sección Junta General de Accionistas a
 * partir del listado definido en juntas-data.js (variable global JUNTAS).
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

    item.appendChild(titulo);
    item.appendChild(meta);

    if (junta.fechaPublicacionISO) {
      item.appendChild(crearAvisoAntelacion(junta));
    }

    var enlace = document.createElement("a");
    enlace.className = "enlace-junta";
    enlace.href = junta.enlace;
    enlace.textContent = "Ver convocatoria completa \u2192";

    item.appendChild(enlace);
    return item;
  }

  function crearAvisoAntelacion(junta) {
    var publicacion = document.createElement("p");
    publicacion.className = "fecha-publicacion";

    var msPorDia = 1000 * 60 * 60 * 24;
    var dias = Math.round(
      (new Date(junta.fechaISO) - new Date(junta.fechaPublicacionISO)) /
        msPorDia
    );

    var badge = document.createElement("span");
    badge.className = "cumplimiento " + (dias >= 30 ? "ok" : "aviso");
    badge.textContent =
      dias >= 30
        ? "Antelación conforme (art. 173.1 LSC)"
        : "Revisar antelación (art. 173.1 LSC)";

    publicacion.textContent =
      "Convocatoria publicada el " +
      (junta.fechaPublicacion || junta.fechaPublicacionISO) +
      " (" +
      dias +
      " días de antelación) ";
    publicacion.appendChild(badge);
    return publicacion;
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
