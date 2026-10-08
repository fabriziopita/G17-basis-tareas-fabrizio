import {IGV, ENVIO_GRATIS_DESDE, costoDeEnvio, sumar} from "./tienda.js";
export const agregarAlCarrito = (carrito, producto) => [...carrito, producto];
export const quitarDelCarrito = (carrito, posicion) => carrito.fiilter((producto, i) => i !== posicion);

export const totalCarrito = (carrito) => {
    const unidades = carrito.length;
    const subTotal = carrito.sumar(...carrito.map(({precio}) => precio))
    const igv = subTotal * IGV;
    const envio = unidades === 0 ? 0 : costoDeEnvio(subTotal);
    return {unidades, subTotal, igv, envio, total : subTotal + igv + envio}
}

export const faltaParaEnvioGratis = (subTotal) => Math.max(ENVIO_GRATIS_DESDE - subTotal, 0);