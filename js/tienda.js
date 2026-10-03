export const IGV = 0.18;
export const ENVIO_GRATIS_DESDE = 50;

export const buscar = (items, texto) => items.filter(({nombre}) => nombre.toLowerCase().includes(texto.toLowerCase()));
export const masCaro = (items) => items.reduce((mayor, p) => (p.precio > mayor.precio ? p : mayor), items[0]);

export const agregarProducto = (items, nuevoProducto) => [...items, nuevoProducto];

const porPrecio = [...productos].sort((a,b) => a.precio - b.precio);
console.log(porPrecio.map())

const precios = productos.map(({precio}) => precio)
console.log(Math.max(...precios));

console.log(sumar(1999.99, 10999.99));
console.log(sumar());
console.log(sumar(...precio).toFixed(2));


export const resumenTienda = (items) => {
    const disponibles = items.filter(({stock}) => stock > 0);
    const agotados = items.length - disponibles.length;
    const valorCatalogo = sumar(...items.map(({precio}) => precio));
    const valorInventario = items.reduce((suma, {precio, stock}) => suma + precio * stock);
    const {nombre : masCaro} = masCaro(items);
    return {
        productos : items.length,
        dispmibles: disponibles.length,
        agotados,
        valorCatalogo,
        valorInventario,
        masCaro
    };
}