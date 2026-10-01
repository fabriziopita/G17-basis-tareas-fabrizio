/* FACIL - Replicar la clase y agregar un séptimo producto: comprobar length, la tabla y el valor del catálogo. */

const productos = [
    {id: 1, nombre: "Macbook Pro 14", precio: 1999.99, categoria: "laptops", stock: 5, destacada: true},
    {id: 2, nombre: "Iphone 13 Pro", precio: 1099.99, categoria:"smartphones", stock: 8, destacado: false},
    {id: 3, nombre: "Ipad Mini 2021", precio: 499.99, categoria: "tablets", stock: 0, destacado:false},
    {id: 4, nombre: "Airpods Max", precio: 549.99, categoria: "audio", stock: 3, destacado: false},
    {id: 5, nombre: "Macbook Air 13", precio: 1299.99, categoria: "laptops", stock: 4, destacado: false},
    {id: 6, nombre: "Iphone 15", precio: 999.99, categoria: "smartphones", stock: 0, destacado: false}
];

productos.push(
    {id: 7, nombre: "Macbook Air 13", precio: 1299.99, categoria: "laptops", stock: 4, destacado: false},
);

console.log(productos.length);
console.table(productos);

const catalogo = productos.map(p => p.stock);
console.log(catalogo);

/* INTERMEDIA 1 - El catálogo presentable: con map, nombre, categoría y precio formateado. Después, solo los que tienen stock. */

const MONEDA = "$"
const formatearPrecio = precio => `${MONEDA}${precio.toFixed(2)}`;

const nuevoCatalogo = productos.filter(p => p.stock > 0).map(p => `${p.nombre} - ${p.categoria} - ${formatearPrecio(p.precio)}`);
console.log(nuevoCatalogo);

/* INTERMEDIA 2 - cuantosHayDe(categoria): función flecha con filter y length. "laptops" da 2, "televisores" da 0. */

const categorias = ["laptops", "smartphones", "tablets", "audio"];

const cuantosHayDe = (categoria) => {
    const productosCategoria = productos.filter(p => p.categoria === categoria);
    console.log(`Hay ${productosCategoria.length} ${categoria}`);
}

cuantosHayDe("laptops"); // devuelve 2
cuantosHayDe("televisores"); // devuelve 0

/* DIFÍCIL 1 - resumenCarrito(items): devuelve { cantidad, total, envio }, con el envío gratis desde $50. */

const carrito = [];
carrito.push(productos[0]);
carrito.push(productos[3]);
carrito.push(productos[3]);
carrito.push(productos[4]);

const resumenCarrito = (items) => {
    let cantidad = 0;
    let total = 0;

    for(const item of items){
        const unidades = item.cantidad || 1;
        cantidad += unidades;
        total += item.precio * unidades;
    }

    let envio = total >= 50 ? 0 : 5;


    console.log(`Cantidad: ${cantidad} - Total: ${formatearPrecio(total)} - Envio: ${envio}`);
}


console.log(resumenCarrito(carrito)); 

/* DIFÍCIL 2 - El más barato con stock, de dos maneras: filter + sort sobre una copia, y filter + reduce. ¿Cuál es más clara? */

const masBaratoConStock1 = productos.slice().filter(p => p.stock > 0).sort((a,b) => a.precio - b.precio)[0];
console.log(masBaratoConStock1);

const masBaratoConStock2 = productos.slice().filter(p => p.stock > 0).reduce((menor, p) => (p.precio < menor.precio ? p : menor), productos[0]);
console.log(masBaratoConStock2);

// rpta : La opción con sort es más clara, ya que al llamar una función que realiza el orden automáticamente en vez de diseñar tu propia con reduce es más legible y entendible.