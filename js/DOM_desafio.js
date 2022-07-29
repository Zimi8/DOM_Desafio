let listaVacia = document.querySelector("#listaVacia");

let otrosCursos = [
    "Set Japonese",
    "Set Coreano",
    "Set Italico",
    "Set Azul",
];
//curso = set
for (let curso of otrosCursos){
    let listado = document.createElement("li");
    listado.innerHTML=curso;  
    listaVacia.appendChild(listado); 
} 

// modificando titulo
const encabezado = ( document.querySelector("titulo").textContent = "Annah Deco");

console.log(encabezado);
