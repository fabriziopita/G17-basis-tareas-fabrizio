export const CLAVE_RESPALDO = "techcart_catalogo";

/*export const guardarRespaldo = (productos) => {
    try {
        const copia = {
            fecha = new Date.toString()
        }
    } catch (error) {

    }
}

export const obtenerProductos = async () => {
    try {
        const lista = await Promise.all(categorias.map(pedirCategoria));
        const productos = listas.flat();
        guardarRespaldo(productos);
        return {
            productos, origen: "api",
            fecha: null
        };
    } catch (error) {
        const copia = leerRespaldo();
        if(!copia) throw error;
        console.warn('La tienda no respondia, muestro el catalogo guardado');
        return {productos: copia.productos, origen: "respaldo", fecha: copia.fecha};
    }
}*/