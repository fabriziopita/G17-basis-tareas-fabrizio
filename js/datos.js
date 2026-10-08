export const categorias = ["laptops", "smartphones", "tablets", "audio"];
export const productos = [
    {id: 1, nombre: "Macbook Pro 14", marca:"Apple",precio: 1999.99, categoria: "laptops", stock: 5, destacado: true, 
        envio : {zona: "Lima", dias : 1}, 
        imagen: "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp",
        alt : "Macbook Pro 14 pulgadas gris espacial",
        especificaciones : 
        {
            pantalla: "13 pulgadas Retina",
            procesador: "Intel Core i5",
            memoria: "8 GB",
            almacenamiento: "256 GB SSD",
        }
    },
    {id: 2, nombre: "iPhone 13 Pro", marca:"Apple",precio: 1099.99, categoria:"smartphones", stock: 8, destacado: false, dobleColumna: true,
        envio: {zona : "Lima", dias : 1}, 
        imagen: "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/thumbnail.webp",
        alt : "iPhone 13 Pro",
        especificaciones : 
        {
            pantalla: "	14.2 pulgadas Liquid Retina XDR",
            procesador: "Apple M1 Pro",
            memoria: "16 GB",
            almacenamiento: "512 GB SSD"
        }
    },
    {id: 3, nombre: "iPad Mini 2021", marca:"Apple",precio: 499.99, categoria: "tablets", stock: 9, destacado:false, oferta: true,
        envio: {zona: "Resto del Peru", dias: 4}, 
        imagen: "https://cdn.dummyjson.com/product-images/tablets/ipad-mini-2021-starlight/thumbnail.webp",
        alt : "iPad Mini 2021",
        especificaciones : 
        {
            pantalla: "14.2 pulgadas Liquid Retina XDR",
            procesador: "Apple M3 Pro",
            memoria: "18 GB",
            almacenamiento: "512 GB SSD"
        }
    },
    {id: 4, nombre: "AirPods Max", marca:"Apple",precio: 549.99, categoria: "audio", stock: 3, destacado: false,
        envio: {zona: "Lima", dias: 1}, 
        imagen: "https://cdn.dummyjson.com/product-images/mobile-accessories/apple-airpods-max-silver/thumbnail.webp",
        alt : "AirPods Max plateados",
        especificaciones : 
        {
            pantalla: "15.4 pulgadas Retina",
            procesador: "Intel Core i7",
            memoria: "16 GB",
            almacenamiento: "512 GB SSD"
        }
    },
    {id: 5, nombre: "iPhone 18 Pro Max 256GB Negro Titanio", marca:"Apple",precio: 999.99, categoria: "smartphones", stock: 4, destacado: false,
        envio : { zona : "Internacional", dias : 10}, 
        imagen: "https://mac-center.com.pe/cdn/shop/files/IMG-21467994_m_jpeg_1_43a5f595-c136-4697-b7fd-fc91656c4546.jpg?v=1788983326&width=823",
        alt: "iPhone 18 Pro Max 256GB Negro Titanio",
        especificaciones : 
        {
            pantalla: "6.9 pulgadas Super Retina XDR",
            procesador: "Chip A19 Pro",
            memoria: "12 GB",
            almacenamiento: "256 GB"
        }
    },
    {id: 6, nombre: "AirPods Max plateados", marca:"Apple",precio: 1299.99, categoria: "laptops", stock: 0, destacado: false, 
        envio: {zona: "Resto del Peru", dias: 4}, 
    }
];

export const contarPorCategoria = (items) => 
    items.reduce((cuenta, {categoria}) => ({...cuenta, [categoria] : (cuenta[categoria] ?? 0) + 1}),{});