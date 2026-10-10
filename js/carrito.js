import {IGV, ENVIO_GRATIS_DESDE, costoDeEnvio, sumar} from "./tienda.js";
export const CLAVE_CARRITO = "techcart_carrito";

export const agregarAlCarrito = (carrito, producto) => {
    const productoExistente = carrito.find(p => p.id === producto.id);

    if (productoExistente) {
        return carrito.map(p => p.id === producto.id ? { ...p, cantidad: p.cantidad + 1 } : p);
    }

    return [...carrito, { ...producto, cantidad: 1 }];
};

export const quitarDelCarrito = (carrito, id) => {
    const productoExistente = carrito.find(p => p.id === id);

    if (productoExistente && productoExistente.cantidad > 1) {
        return carrito.map(p => p.id === id ? { ...p, cantidad: p.cantidad - 1 } : p);
    }

    return carrito.filter(p => p.id !== id);
};

export const resumenCarrito = (carrito) => {
    const unidades = carrito.reduce((total, p) => total + p.cantidad, 0);
    const subTotal = sumar(...carrito.map(({precio, cantidad}) => precio * cantidad));
    const igv = subTotal * IGV;
    const envio = unidades === 0 ? 0 : costoDeEnvio(subTotal);
    return {unidades, subTotal, igv, envio, total : subTotal + igv + envio}
}

export const faltaParaEnvioGratis = (subTotal) => Math.max(ENVIO_GRATIS_DESDE - subTotal, 0);

export const guardarCarrito = (carrito) => {
    try {
        localStorage.setItem(CLAVE_CARRITO, JSON.stringify(carrito));
    } catch(error) {
        console.warn("No se pudo gaurdar el carrito:", error.message);
    }
}
export const leerCarrito = () => {
    try {
        const crudo = localStorage.getItem(CLAVE_CARRITO);
        return crudo ? JSON.parse(crudo) : [];
    } catch (error) {
        console.warn("El carrito guardado no se pudo leer, empiece desde uno vacio", error.message);
        return [];
    }
}

export const olvidarCarrito = () => {
    try {
        localStorage.removeItem(CLAVE_CARRITO);
    } catch (error) {
        console.warn("No se pudo borrar el carrito guardado:", error.message);
    }
}