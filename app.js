

//zapatillas
//objetos con contructor dentro de un array de Zappatillas

class Retros {
    constructor (nombre,precio,color){
        this.nombre = nombre;
        this.precio = precio;
        this.color = color;
    }
} 

const produc1 = new Retros("Retro 1" , 80000, "Negras");
const produc2 = new Retros("Supreme" , 8510000, "Blanca,Azul,Gris");
const produc3 = new Retros("Nocta Campera" , 40000, "Negra Clasica");
const produ4 = new Retros("Campera Retro" , 40000, "Varios colores");

const carrito= [];
 
carrito.push(produc1,produc2,produc3,produ4);
console.log(carrito)


//guardar los datos en el local de todo el array
const guardarProductos = (clave,valor)=>{localStorage.setItem(clave,valor)};
for (const producto of carrito){
    guardarProductos("listadeProductos",JSON.stringify(carrito))
}
//eventos zapas

let btnAumentar = document.getElementById(`btn_aumentar`)
let btnQuitar = document.getElementById(`btn_quitar`)

let producto = document.getElementById(`producto`)
let lista = document.getElementById("lista")


let contador = 80000

 //evento click con suma
btnAumentar.addEventListener (`click`,()=>{
    let sumaProduc = contador += 80000 
    producto.innerHTML = sumaProduc
    
    carrito.forEach(nombre => {
    if (nombre.nombre === `Retro 1`){
       
      lista.innerHTML =`
      <p>Producto: ${nombre.nombre}</p>
      <p>Precio:  ${nombre.precio}</p>
      <p>Color: ${nombre.color}</p>`
      li.appendChild(li)
      } 
      

 
});
});

//Resta Del Producto
btnQuitar.addEventListener(`click`,()=>{

    let resta = contador -= 80000
     producto.innerHTML = resta
    
    })




const submitHandler = e =>{
    e.preventDeFault();

    const mail = e.target.email.value;
    const password = e.target.password.value;

    if ((email==="xxx") && (password ==="xxx")) {
        console.log (`Perfecto iniciaste secion succes`)
    }

    localStorage.setItem(`email`,email)
    localStorage.setItem(`password`,password)
}

//usando Strong



/*

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