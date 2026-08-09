/*
 * Construye la galería de fotos a partir del listado definido en
 * fotos-data.js (variable global FOTOS).
 */
(function () {
  "use strict";

  function crearElementoFoto(foto) {
    var figura = document.createElement("figure");

    var img = document.createElement("img");
    img.src = "fotos/" + foto.archivo;
    img.alt = foto.descripcion || "";
    img.loading = "lazy";

    var pie = document.createElement("figcaption");
    pie.textContent = foto.descripcion || "";

    figura.appendChild(img);
    figura.appendChild(pie);
    return figura;
  }

  function iniciar() {
    var contenedor = document.getElementById("galeria-fotos");
    if (!contenedor) {
      return;
    }

    var fotos = typeof FOTOS !== "undefined" ? FOTOS : [];

    if (fotos.length === 0) {
      var aviso = document.createElement("p");
      aviso.className = "aviso-vacio";
      aviso.textContent = "Todavía no hay fotografías publicadas.";
      contenedor.replaceWith(aviso);
      return;
    }

    fotos.forEach(function (foto) {
      contenedor.appendChild(crearElementoFoto(foto));
    });
  }

  document.addEventListener("DOMContentLoaded", iniciar);
})();
