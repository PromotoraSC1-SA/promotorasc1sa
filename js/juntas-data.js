/*
 * Listado de la sección Junta General de Accionistas (convocatorias de
 * juntas de socios/accionistas).
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
 * junta-general-accionistas.html carga este listado automáticamente y
 * lo muestra ordenado de la convocatoria más reciente a la más antigua.
 */
const JUNTAS = [
  {
    titulo: "Junta General Ordinaria de Accionistas 2026",
    fechaISO: "2026-07-29",
    fecha: "29 de julio de 2026",
    fechaPublicacionISO: "2026-06-25",
    fechaPublicacion: "25 de junio de 2026",
    lugar: "Notaria Playa Blanca, La Peña 5, 35580 Yaiza (Lanzarote), Las Palmas, España",
    enlace: "juntas/2026-07-29-junta-general-ordinaria.html",
    estado: "celebrada"
  }
];
