/*
 * Listado del Tablón de Anuncios Corporativo (Juntas de socios/accionistas).
 *
 * Para publicar una nueva convocatoria:
 *   1. Crea la página HTML de la junta dentro de la carpeta /juntas
 *      (puedes copiar una de las páginas existentes como plantilla,
 *      manteniendo las secciones exigidas por el art. 174 LSC: fecha,
 *      lugar, orden del día, quién convoca, segunda convocatoria y
 *      derecho de información de los accionistas).
 *   2. Añade aquí una nueva entrada con el título, la fecha, el lugar,
 *      el enlace al archivo y el estado ("proxima" o "celebrada").
 *   3. Indica también "fechaPublicacionISO": la fecha en la que se
 *      inserta la convocatoria en esta web. Entre esa fecha y la fecha
 *      de la junta debe mediar, al menos, un mes (art. 173.1 LSC); el
 *      tablón calcula y muestra automáticamente ese plazo.
 *
 * No es necesario tocar ningún otro archivo: la página
 * tablon-anuncios.html carga este listado automáticamente y lo muestra
 * ordenado de la convocatoria más reciente a la más antigua.
 */
const JUNTAS = [
  {
    titulo: "Junta General Ordinaria de Accionistas 2026",
    fechaISO: "2026-06-15",
    fecha: "15 de junio de 2026",
    fechaPublicacionISO: "2026-05-10",
    fechaPublicacion: "10 de mayo de 2026",
    lugar: "Calle la Calera 10, Casa 1, 35580 Playa Blanca, Yaiza (Lanzarote)",
    enlace: "juntas/2026-06-15-junta-general-ordinaria.html",
    estado: "celebrada"
  }
];
