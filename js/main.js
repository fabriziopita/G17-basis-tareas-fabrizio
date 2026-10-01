import {categorias, productos} from "./datos.js";
import formatearPrecio, {MONEDA} from "./formato.js";
import {IGV,  ENVIO_GRATIS_DESDE, precioConIgv, tarifaPorZona} from "./tienda.js";

console.log("TechCart: Modulos cargados");
const macbook = productos[0];
console.log(`${macbook.nombre} cuesta ${formatearPrecio(macbook.precio)}`);

const ficha = `
    Producto : ${macbook.nombre}
    Categoria : ${macbook.categoria}
    Precio : ${formatearPrecio(macbook.precio)}
    Con IGV : ${formatearPrecio(precioConIgv(macbook.precio))}
    Stock : ${macbook.stock} unidades `

console.log(ficha);

for(let i=0; i<categorias.length; i++) {
    console.log(`${i} : ${categorias[i]} `)
}

for(const producto of productos) {
    console.log(`${producto.nombre} - ${formatearPrecio(producto.precio)}`)
}

const {precio, nombre, stock} = macbook;
const {nombre : titulo, categoria : rubro} = macbook;
console.log(`${titulo} esta en la categoria ${rubro}`);

const {descuento = 0, destacado = false} = macbook;
console.log(descuento, destacado);

const { envio : {zona, dias}} =macbook;
console.log(`Despacho a ${zona} en ${dias} dia(s)`);

const {envio : {zona : zonaIpad, dias: diasIpad, transportista = "por asignar"}} = productos[2];
console.log(`${zonaIpad} - ${diasIpad} - ${transportista}`);

const {id, ...macbookSinId} = macbook;
console.log(id, Object.keys(macbookSinId));