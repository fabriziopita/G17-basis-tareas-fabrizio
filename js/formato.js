export const MONEDA = "$";
const formatearPrecio = (precio) => `${MONEDA}${precio.toFixed(2)}`;
const formatearFecha = (iso) => new Date(iso).toLocaleString("es-PE", {dateStyle: "long", timeZone: ""})
export default formatearPrecio;