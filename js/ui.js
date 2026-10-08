import formatearPrecio from "./formato.js";

const CLASES_TARJETA = "tarjeta group flex flex-col text-center " +
"transition-[transform,box-shadow] duration-200 " +
"hover:-translate-y-1 hover:shadow-lg dark:hover:ring-1 dark:hover:ring-marca " +
"animate-aparecer motion-reduce:transition-none motion-reduce:animate-none";

const CLASES_DESTACADA = "justify-center bg-resalte border-marca border-2 md:col-span-2 md:row-span-2 " + 
"before:content-['Destacado'] before:inline-block before:self-center " +
"before:text-marca before:text-xs before:font-bold before:uppercase " +
"before:tracking-wider before:border before:border-marca " +
"before:rounded-full before:px-2.5 before:py-0.5 before:mb-2 " +
"before:animate-latido motion-reduce:before:animate-none";

const CLASES_OFERTA = "tarjeta group flex flex-col text-center " +
  "transition-[transform,box-shadow] duration-200 " +
  "hover:-translate-y-1 hover:shadow-lg dark:hover:ring-1 dark:hover:ring-oferta " +
  "animate-aparecer [animation-delay:200ms] " +
  "motion-reduce:transition-none motion-reduce:animate-none " +
  "before:content-['Oferta'] before:inline-block before:self-center " +
  "before:text-oferta before:text-xs before:font-bold before:uppercase " +
  "before:tracking-wider before:border before:border-oferta " +
  "before:rounded-full before:px-2.5 before:py-0.5 before:mb-2 " +
  "before:animate-latido motion-reduce:before:animate-none";

export const tarjetaProducto = ({destacado, oferta, id, imagen, alt, nombre, precio, stock, dobleColumna, especificaciones: { pantalla, procesador, memoria, almacenamiento } = {}}) => `
  <article class="${oferta ? CLASES_OFERTA : `${CLASES_TARJETA} ${destacado ? CLASES_DESTACADA : ""}`} ${dobleColumna ? "md:col-span-2" : ""}" data-id="${id}">
    <figure class="mb-3">
      ${ imagen 
        ? `<img class="${destacado ? "w-full max-w-75 " : ""}mx-auto aspect-square object-contain dark:brightness-90" src="${imagen}" alt="${alt}" width="200" />` 
        : `<div class="w-full aspect-square place-items-center text-5xl bg-fondo rounded-lg" aria-hidden="true">nada</div>` 
      }
      <figcaption class="text-xs font-semibold text-texto-suave uppercase tracking-wide">Apple</figcaption>
    </figure>
    
    <h3 class="text-lg leading-tight my-1 group-hover:text-marca">${nombre}</h3>
    <p class="mb-3"><strong class="text-exito">${formatearPrecio(precio)}</strong></p>
    
    <button 
      class="boton self-center ${destacado ? "mt-4" : "mt-auto"}" 
      type="button"
      data-accion="agregar" 
      data-id="${id}" 
      aria-label="Agregar ${nombre} al carrito" ${stock === 0 ? "disabled" : ""}> 
        ${stock > 0 ? "Agregar al carrito" : "Agotado"}
    </button>

    <table class="w-full table-fixed border-collapse text-sm my-6">
      <caption class="caption-bottom mt-2 font-bold text-base">Especificaciones</caption>
      <thead>
        <tr>
          <th class="celda bg-fondo-suave">Especificación</th>
          <th class="celda bg-fondo-suave">Detalle</th>
        </tr>
      </thead>
      <tbody>
        <tr class="even:bg-fondo hover:bg-resalte"><td class="celda break-words">Pantalla</td><td class="celda break-words">${pantalla || "No disponible"}</td></tr>
        <tr class="even:bg-fondo hover:bg-resalte"><td class="celda break-words">Procesador</td><td class="celda break-words">${procesador || "No disponible"}</td></tr>
        <tr class="even:bg-fondo hover:bg-resalte"><td class="celda break-words">Memoria RAM</td><td class="celda break-words">${memoria || "No disponible"}</td></tr>
        <tr class="even:bg-fondo hover:bg-resalte"><td class="celda break-words">Almacenamiento</td><td class="celda break-words">${almacenamiento || "No disponible"}</td></tr>
      </tbody>
    </table>
  </article>
`;

export const filaCarrito=({nombre,precio},indice) => `
      <li class="flex flex-wrap items-center justify-between gap-2 border-b border-borde py-2">
        <span>${nombre}</span>
        <span class="flex items-center gap-3">
          <strong class="text-exito">${formatearPrecio(precio)}</strong>
          <button class="boton text-sm" type="button" data-accion="quitar" 
            data-posicion="${indice}" aria-label="Quitar ${nombre} del carrito">
          Quitar
          </button>
        </span>
      </li>
`;