import {productos} from "./datos.js";
import {tarjetaProducto} from "./ui.js";

console.log("document es un", document.nodeName, ". su titulo es:", document.title)
console.log("El <h1> de la cabera dice", document.querySelector("h1").textContent)
console.log("Por id, la forma de siempre", document.getElementById("catalogo").tagName)

const tarjetasAlCargar = document.querySelectorAll(".tarjeta");
console.log("Tarjeta en la pagina cargada : " + tarjetasAlCargar.length);

console.log("Query selector all devuelve uun arreglo?", Array.isArray(tarjetasAlCargar));
console.log("Devuelve un", tarjetasAlCargar.constructor.name);

document.querySelector("h1").textContent = "<b>TechCart</b>";
document.querySelector("h1").innerHTML = "<b>TechCart</b>";

const primerBeneficio = document.querySelector(".tarjeta h3");
console.log("TextContent del primer beneficio", primerBeneficio.textContent);
console.log("Se tarjeta lleva la clase text-center", primerBeneficio.closest(".tarjeta").classList.contains("text-center"));

const enlaceDummy = document.querySelector('a[href="#catalogo"]');
console.log("getAttribute('href'):", enlaceDummy.getAttribute("href"));
console.log("la propiedad .href", enlaceDummy.href);

const grillaCatalogo = document.querySelector("#catalogo-grid");

const pintarCatalogo = (lista = productos) => {
    const html = lista.map(tarjetaProducto).join("");
    grillaCatalogo.innerHTML="";
    grillaCatalogo.insertAdjacentHTML("beforeEnd", html);

    grillaCatalogo.setAttribute("aria-label", `Catalogo con ${lista.length} productos`);
}
pintarCatalogo();

console.log("TechCart:  catalogo generado desde el arreglo,", productos.length, "productos");
console.log(document.querySelectorAll(".tarjeta").length);
console.log("Tarjeta que existen antes en el HTML", tarjetasAlCargar.length);

// const grid = document.querySelector(("#catalogo-grid"));
// const antes = grid.querySelector("button");
// grid.innerHTML = grid.innerHTML

// console.log(antes === grid.querySelector("button"));