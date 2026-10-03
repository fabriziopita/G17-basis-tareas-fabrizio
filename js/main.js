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

const [primera, segunda] = categorias;
console.log(primera, segunda);

const [, , tercera] = categorias;
console.log(tercera);

const[principal, ...demasCategorias] = categorias;
console.log(demasCategorias);

const[, , , , quinto = "sin categoria"] = categorias;
console.log(quinto);

let primero = "Macbook Pro 14";
let segundo = "Iphone 15";
[primero, segudo] = [segundo, primero];
console.log(primero, segundo);

const etiqueta = ({nombre , precio, stock}) => `${nombre} - ${formatearPrecio(precio)} - ${stock} > 0 ? ${stock} en stock : "agotado"`;
console.log.apply(etiqueta(macbook));

const conBadge = ({nombre, badge = "Nuevo"}) => `${badge}: ${nombre}`;
console.log(conBadge(macbook));
console.log({nombre : "Airpods Pro 2", badge: "Oferta"});

const copiaCategorias = [...categorias];
console.log(copiaCategorias.length, copiaCategorias === categorias);

console.log([...categorias, "accesorios"]);
console.log(["ofertas", ...categorias]);
console.log([...categorias, ...["gaming","smartwatch"]]);

/*const recibo = (cliente, ...items) => `${cliente} lleva ${items.length} producto(s) ${items.join(", ")}`;
console.log(recibo("Ana Perez", "Macbook Pro 14", "Airpods Max"))

const preferencias = {moneda: MONEDA, zona: "Lima"};
const preferenciasDelVisitante = {...preferencias, zona: "Internacional"}

const original = {
    nombre : "iPad Mini 2021", envio : {zona : "Resto del Perú", dias : 4}
}
const copia = {...original};
copia.nombre = "IPad Mini Copia";
copia.envio.dias = 90;
console.log(original.nombre);
console.log(copia.nombre);
console.log(original.envio.nombre);
console.log(copia.envio.nombre);

const copiaCompleta = {...original, envio : {...original.envio}};
copiaCompleta.envio.dias = 1;
console.log(original.envio.dias);
console.log(copiaCompleta.envio.dias);

const zonaDelPedido = "Lima";
const unidades = 2;
const pedido = {cliente : "Ana Perez", unidades, zona: zonaDelPedido};
console.log(pedido);*/

const campo = "total";
const lineaDelPedido = { [campo] : sumar(1999.99, 549.99)};
console.log(lineaDelPedido);

const items = {
    id: 0, nombre: "item", precio: 200,
    id: 1, nombre: "item", precio: 300,
}

items.reduce((suma, p) => suma + p.precio, 0)
console.log(items);