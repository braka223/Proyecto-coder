/* let lista = document.getElementById("lista");

const productos = ["Zapatilla Nike Retro" ,"Supreme" ,"Shorts Nocta" ,"Campera Retro" ]

for (const element of productos) {
    let li = document.createElement("li")
    li.innerHTML = element
    lista.appendChild(li)
    
}
*/


//evento change

let opcionesZapatillas = document.getElementById("zapatillas");
let opcionesSupreme = document.getElementById("supreme");
let opcionesNocta = document.getElementById("nocta");
let opcionesCampera = document.getElementById("campera_retro");

function seleccionarZapatillas() {
    let datos = document.getElementById("zapatillas").value;
    document.getElementById("texto").innerHTML = `Selecciono ${datos}`
}
opcionesZapatillas.onchange = seleccionarZapatillas

//supreme
function seleccionarSupreme () {
    let dato = document.getElementById("supreme").value;
    document.getElementById("remera_texto").innerHTML = `Selecciono ${dato}`
}
opcionesSupreme.onchange = seleccionarSupreme

//Nocta

function seleccionNocta(){
    let dataso = document.getElementById ("nocta").value;
    document.getElementById("nocta_texto").innerHTML = `Selecciono ${dataso}`
}

opcionesNocta.onchange = seleccionNocta

//Campera Retro

function seleccionarCampera (){
    let datoss = document.getElementById ("campera_retro").value;
    document.getElementById("campera_texto").innerHTML =  `Slecciono ${datoss}`
}
opcionesCampera.onchange = seleccionarCampera

