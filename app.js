

//objetos con contructor dentro de un array

class Retros {
    constructor (nombre,precio,color){
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;
    }
} 

const produc1 = new Retros("Retro 1" , 80000, "Clasicas");
const produc2 = new Retros("Supreme" , 4300, "Blanca");
const produc3 = new Retros("Campera Nocta" , 180000, "Negra Clasica");
const produc4 = new Retros("Campera Retro" , 50000, "Color Unico");

const carrito= [];
 
carrito.push(produc1,produc2,produc3,produc4);
console.log(carrito)
localStorage.setItem(`ListaProduct`,JSON.stringify(carrito));


//listado de botones

let btnZapatillas = document.getElementById(`btnZapatillas`)
let btnRemera = document.getElementById(`btnRemera`)
let btnCampera = document.getElementById(`btnCampera`)
let btnRetro = document.getElementById(`btnRetro`)

//listado del carrito segun la compra (li)
 let listadoZapatillas = document.getElementById(`listadoZapatillas`)
 let listadoRemera = document.getElementById(`listadoRemera`)
 let listadoNocta = document.getElementById(`listadoNocta`)
 let listadoRetro = document.getElementById(`listadoRetro`)


//Carrito de compra a pagar
let comprar = document.getElementById(`comprar`)

comprar.addEventListener(`click`,comprarProductos)
function comprarProductos(){
    swal({
        title: "Lissstooo,orden Comprada!",
        text: "Espero que vuelvas pronto!",
        icon: "success",
      });
}


//funcion click para los botones de compra
//agregada con la alerta SwallAlert se va a crear un listado del producto

btnZapatillas.addEventListener(`click`,eventoClick)

function eventoClick(){

   carrito.forEach(element => {
    if (element.nombre == `Retro 1`) {
        Toastify({
            text: "Agregaste unas Jordans",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();

        const armandoUnObjetoNuev = (precioProductos) =>{
            const {nombre,precio} = precioProductos
            console.log(nombre,precio)
    
        let li = document.createElement(`li`)
        listadoZapatillas.innerHTML =`<strong> Nombre: </strong>${nombre}
        <strong>Precio : </strong>$${precio}
        `
        li.appendChild(li)
        }
        armandoUnObjetoNuev(produc1);
} 
})
}


btnRemera.addEventListener(`click`,eventoRemera)

function eventoRemera() {
  carrito.forEach(element => {
    if (element.nombre == `Supreme`) {
        Toastify({
            text: "Agregaste una Remera",
            duration: 3000,
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "center", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
              background: "linear-gradient(to right, #00b09b, #96c93d)",
            },
            onClick: function(){} // Callback after click
          }).showToast();

    const armandoUnObjetoNuev = (precioProductos) =>{
    const {nombre,precio} = precioProductos
    console.log(nombre,precio)
    
    let li = document.createElement(`li`)
    listadoRemera.innerHTML =`<strong> Nombre: </strong>${nombre}
    <strong>Precio : </strong>$${precio}
        `
        li.appendChild(li)
        }
        armandoUnObjetoNuev(produc2);
        }
})       
}  

btnCampera.addEventListener(`click`,eventoCampera)

function eventoCampera(){
    carrito.forEach(element => {
        if (element.nombre == `Campera Nocta`) {
            Toastify({
                text: "Agregaste una Nocta",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function(){} // Callback after click
              }).showToast();


    const armandoUnObjetoNuev = (precioProductos) =>{
     const {nombre,precio} = precioProductos
        console.log(nombre,precio)
        
    let li = document.createElement(`li`)
    listadoNocta.innerHTML =`<strong> Nombre: </strong> ${nombre}
    <strong>Precio :</strong> $ ${precio}
            `
            li.appendChild(li)
            }
            armandoUnObjetoNuev(produc3);
 }
    }) 
}

btnRetro.addEventListener(`click`,eventoRetro)
function eventoRetro(){
    carrito.forEach(element => {
        if (element.nombre == `Campera Retro`) {
            Toastify({
                text: "Agregaste una Campera Retro",
                duration: 3000,
                newWindow: true,
                close: true,
                gravity: "top", // `top` or `bottom`
                position: "center", // `left`, `center` or `right`
                stopOnFocus: true, // Prevents dismissing of toast on hover
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                },
                onClick: function(){} // Callback after click
              }).showToast();

    const armandoUnObjetoNuev = (precioProductos) =>{
    const {nombre,precio} = precioProductos
    console.log(nombre,precio)
        
    let li = document.createElement(`li`)
    listadoRetro.innerHTML =` <strong> Nombre: </strong> ${nombre}
    <strong>Precio : </strong>$${precio}`
    li.appendChild(li)
    }
    armandoUnObjetoNuev(produc4);         
}
}) 
}


/*

//DOM


//ingreso de Login con condicion
let mail = document.getElementById (`mail`)
const password = document.getElementById(`password`)
let ingresoPas = document.getElementById(`ingresoPas`)




function login () {
    mail = e.target.email.value;
    password = e.target.password.value;

    if ((mail==="jonathan.villagra@hotmail.com") && (password ==="xxx")) {
        swal("Bienvenido");
    }




    localStorage.setItem(`email`,mail)
    localStorage.setItem(`password`,password)
login();
}


let contador = 80000

 //evento click con suma y resta para zapas
btnAumentar.addEventListener (`click`,()=>{
    let sumaProduc = contador += 80000 
    producto.innerHTML = sumaProduc
    
    carrito.forEach(nombre => {
    if (nombre.nombre === `Retro 1`){
       
      lista.innerHTML =`<p>${nombre.nombre}</p>`
      li.appendChild(li)
      } 
      
});
});

btnQuitar.addEventListener(`click`,()=>{

    let resta = contador -= 80000
     producto.innerHTML = resta
    
    })
 //evento click con suma y resta para supreme

 let contadorSuma= 4300

btnAumentarRemera.addEventListener(`click`,()=>{
    let superemeSuma = contadorSuma += 4300
    producto1.innerHTML = superemeSuma

    carrito.forEach(nombre => {
        if (nombre.nombre === `Supreme`){
           
         listaRemera.innerHTML =`<p>${nombre.nombre}</p>`
         listaRemera.appendChild(li)
          } 
});
});

btnQuitarRemera.addEventListener(`click`,()=>{

    let resta1 = contadorSuma -= 4300
     producto1.innerHTML = resta1
    
    });

//Nocta
let sumaNocta = 180000

btnAumentarNocta.addEventListener(`click`,()=>{
    let noctaSuma = sumaNocta += 180000
    productoNocta.innerHTML= noctaSuma

    carrito.forEach(nombre=>{
        if (nombre.nombre === `Nocta Campera`) {
            listaNocta.innerHTML=`<p>${nombre.nombre}</p>`
            listaNocta.appendChild(li)
        }
    });

});

btnQuitarNocta.addEventListener(`click`,() => {
    let restaNocta = sumaNocta -= 180000
    productoNocta.innerHTML = restaNocta

});

//Campera Retro

   let camperaSuma = 50000

btnRetroAumentar.addEventListener(`click`,()=>{
 
    let retroCampera = camperaSuma += 50000
    camperaRetro.innerHTML= retroCampera

    carrito.forEach(nombre=>{
        if (nombre.nombre === `Campera Retro`) {
            listaRetro93.innerHTML=`<p>${nombre.nombre}</p>`
            listaRetro93.appendChild(li)
        }
    });
});

btnRetroQuitar.addEventListener(`click`,()=>{
    let restaCampera = camperaSuma -= 50000
    camperaRetro.innerHTML = restaCampera
});


//usando Strong

// incorporando Storag y Json

localStorage.setItem("zapatillas", "caras");
localStorage.setItem("tengohambre" ,true);
localStorage.setItem("edad",30);
localStorage.setItem("usuarios",["Juan", "Pedro", "Angel"])
localStorage.setItem("usario", {nombre:'Angel', edad: 28})



for (let i = 0; i < localStorage.length ; i++){
    let clave = localStorage.key(i)
    console.log(`${clave} ${localStorage.getItem(clave)}`)
}


let zapatillas = localStorage.getItem("zapatillas");
let boolean = (localStorage.getItem("tengoHambre") == 'true')
let edad = localStorage.getItem("edad")
let usuarios = localStorage.getItem("usuarios").split(',')
let usuario = localStorage.getItem("usuario")

console.log(typeof zapatillas)
console.log(typeof boolean)
console.log(typeof edad)
console.log(usuarios)
console.log(typeof usuario)

*/