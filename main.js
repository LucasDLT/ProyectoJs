let usuario = "lucas";
let contrasenia = 1;
let efectivos = [];//array de gerarquias vacio 
let personas = [];//array de personas vacio 



function ingreso () {

         let usuario = prompt("ingresa tu usuario");
         let contrasenia = Number(prompt("ingresa tu clave"));
         let intentos = 3;

         while (intentos > 1) {
            
            if (usuario == `lucas` & contrasenia === 1) {
               alert("Usuario valido, Bienvenido "  +  usuario);
               break

            } else { 
            intentos -= 1; 
            alert(`Los datos ingresados no son validos, intenta nuevamente, tenes ${intentos} intentos` );
          
            usuario = prompt("ingresa tu usuario");
            contrasenia = Number(prompt("ingresa tu clave"));      
            }
           
         }         
            while (intentos > 1) {
               alert("Superaste la cantidad de intentos")
               break
            }
         
}
//ingreso();

function calculador () {


   let jerarquia = prompt(`ingrese la jerarquia de la siguiente manera: 
                  1) oficial 
                  2) oficialPrimero 
                  3) oficialMayor 
                  4) inspector 
                  5) principal`);    


         switch (jerarquia) {
            case `oficial`:
               alert("tiene 15 dias anuales de licencia");
               break;

            case `oficialPrimero`:
               alert("tiene 21 dias anuales de licencia");   
               break;

            case `oficialMayor`: 
               alert("tenes 30 dias anuales de licencia");
               break; 
            
            case `inspector`: 
               alert("tenes 30 dias anuales de licencia");
               break; 

            case `principal`: 
               alert("tenes 30 dias anuales de licencia");
               break; 
         
            default:
               alert(`no ingresaste ninguna jerarquia, adios`);
               break;
         }  
                 
            let totalDias = Number(prompt("ingresa cuantos dias le quedan"));
            let cantidadSolicitada = Number(prompt("ingrese la cantidad de dias que pide"));  
            

         if ( cantidadSolicitada <= 30 ) {

               function resta (){                    
                    diasRestantes =  totalDias - cantidadSolicitada;
                    return mensaje = `si confirma le van a quedar ${diasRestantes} dias`;
                    }
                    alert(resta());
                    
                    
          } else {alert("ingresaste una cantidad que no es valida, adios");
                    
          }
          
}
//calculador();



//CONSTRUCTOR DE OBJETOS JERARQUIA

function Jerarquia (nombre, dias, tipo){
   this.nombre = nombre.toUpperCase();// todos los nombres quedan en mayuscula
   this.dias = dias;
   this.tipo = tipo;
   this.informeJerarquia = function() {
      console.log("vas a operar en el perfil de un " + this.nombre);
   }
   this.informeTipo = function(){
      console.log("tene en cuenta que se trata de un Oficial " + this.tipo);
   }


   
}

//***********OBJETOS JERARQUIAS*************

const oficial  = new Jerarquia ("Oficial", 15, "operativo");

const oficialPrimero = new Jerarquia ("Oficial Primero", 21, "operativo");

const oficialMayor = new Jerarquia ("Oficial Mayor", 30, "operativo");

const inspector = new Jerarquia ("Inspector", 30, "supervision");

const principal = new Jerarquia ("Principal", 30, "supervision");


// PUSH DE OBJETOS
efectivos.push(oficial, oficialPrimero, oficialMayor, inspector, principal);

//PRUEBA DE METODOS DEL CONSTRUCTOR
oficialPrimero.informeJerarquia();
oficialPrimero.informeTipo()


//MOSTRAR TODAS LOS OBJETOS DE LA LISTA CON LOS QUE SE OPERA (LENGHT)
for (let i = 0; i <efectivos.length ; i++) {
   console.log(efectivos[i]);   
}

//SEPARADOR DE OBJETOS
console.log(efectivos.join("-///-"));

//COPIAS DE LISTA DIVIDIDAS EN:

//OFICIALES OPERATIVOS 

const oficialOperativos = efectivos.slice(0,3);
console.log(oficialOperativos);

//OFICIALES DE SUPERVISION
const oficialSupervision = efectivos.slice(3,5);
console.log(oficialSupervision);


//*****METODO DE BUSQUEDA (FOREACH)

efectivos.forEach((jerarquia) => {
   
console.log(jerarquia.nombre);
console.log(jerarquia.dias);
console.log(jerarquia.tipo);
})



//CONSTRUCTOR DE OBJETOS PERSONAS

function Persona (nombre, apellido, edad, funcion, jerarquia, servActivo, condAscenso, domicilio){
   this.nombre = nombre;
   this.apellido = apellido.toUpperCase();
   this.edad = edad;
   this.funcion = funcion.toUpperCase();
   this.jerarquia = jerarquia.toUpperCase();
   this.servActivo = servActivo;
   this.condAscenso = condAscenso;
   this.domicilio = domicilio.toUpperCase();
}


//OBJETOS PERSONAS

const perez = new Persona ("Juan", "Perez", 30, "oficial de guardia", "oficial", "si", "si", "pba");
const gomez = new Persona ("Lucas", "Gomez", 25, "oficial de guardia", "oficial", "si","no", "caba");
const torre = new Persona ("Sebastian", "Torre", 32, "chofer", "oficial", "si", "si", "pba");
const monte = new Persona ("Alejandro", "Monte", 35, "encargado de movil", "oficial", "si", "si", "pba");
const rojo = new Persona ("Leonel", "Rojo", 27, "chofer", "oficial", "si", "si", "caba");
const toro = new Persona ("Alan", "Toro", 34, "encargado de movil", "oficial primero", "si", "no", "caba");
const hernandez = new Persona ("Lionel", "Hernandez", 33, "faccion", "oficial primero", "si", "si", "caba");
const gonzalez = new Persona ("Tomas", "Gonzalez", 34, "faccion", "oficial primero", "si", "si", "pba");
const ale = new Persona ("Maria", "Ale", 30, "encargada de movil", "oficial primero", "si", "no", "caba");
const marco = new Persona ("Paula", "Marco", 34, "faccion", "oficial primero", "si", "si", "pba");
const brizuela = new Persona ("Marcos", "Brizuela", 35, "faccion", "oficial primero", "si", "no", "caba");
const carola = new Persona ("Alan", "Carola", 33, "faccion", "oficial primero", "si", "no", "caba");
const alba = new Persona ("Roberto", "Alba", 34, "encargado de movil", "oficial Mayor", "si", "si", "caba");
const jordi = new Persona ("Mariano", "Jordi", 35, "encargado de movil", "oficial Mayor", "si", "si", "caba");
const karin = new Persona ("Carlos", "Karin", 36, "encargado de movil", "inspector", "si", "si", "caba");
const gucci = new Persona ("Ramiro", "Gucci", 36, "jefe de servicio externo", "inspector", "si", "si", "pba");
const caro = new Persona ("Rafael", "Caro", 37, "jefe de servicio", "principal", "si", "si", "pba");

// PUSH A LISTA PERSONAS

personas.push(perez,gomez, torre, monte, rojo, toro, hernandez, gonzalez, ale, marco, brizuela, carola, alba, jordi, karin, gucci, caro);


// BUSQUEDA DE JERARQUIA, CON SOME PARA QUE ME DIGA SI EXISTE Y POR METODO FILTER PARA QUE ME DEVUELVA LA CANTIDAD
/*
function buscadorJerarquia (){
         let buscadorJerarquia = prompt("ingresa la jerarquia");

         const resultado4 = personas.some((persona) => persona.jerarquia === buscadorJerarquia.toUpperCase());
         console.log(resultado4);

         if (resultado4 != true) {
            alert("no ingresaste una jerarquia valida");
            
         } else {
            const resultado = personas.filter((persona) => persona.jerarquia === buscadorJerarquia.toUpperCase());
            console.log(resultado);         
         }
}
//buscadorJerarquia();

//BUSQUEDA DE DOMICILIO POR LOCALIDAD ASIGNADA EN OBJETO

function buscadorDomicilio(){
         let buscadorDomicilio = prompt("ingresa el parametro de busqueda: pba o caba");

         const resultado5 = personas.some((persona) => persona.domicilio === buscadorDomicilio.toUpperCase())

         if (resultado5 != true) {
            alert("no ingresaste un parametro valido");
         } else {
            const resultado1 = personas.filter((persona) => persona.domicilio === buscadorDomicilio.toUpperCase());
            console.log(resultado1);            
         }

}

//buscadorDomicilio();

//BUSQUEDA Y FILTRADO CON SOME Y FILTER (BUSCA POR FUNCION ASIGNADA EN EL OBJETO)

function buscadorFuncion () {
let preguntaFuncion = prompt("que funcion buscas");

const resultado2 = personas.some((persona) => persona.funcion === preguntaFuncion.toUpperCase());

console.log(resultado2);

if (resultado2 != true) {
   console.log("no se encontraron coinsidencias");
   
} else {
   const resultado3 = personas.filter((persona) => persona.funcion === preguntaFuncion.toUpperCase());
   console.log(resultado3);
   
}

}*/
//buscadorFuncion();


///////////////////////////    DOM    ////////////////////////////

 


//MODIFIQUE EL TITULO ORIGINAL
let tituloNuevo = document.querySelector(".headerIndex").textContent = "INGRESASTE AL CALCULADOR DE LICENCIAS Y CONCEPTOS"
console.log(tituloNuevo);


///////////////////////////////////////////////////

/*let listaImpresa = document.querySelector(".listaIndex");

for (let p of personas){
   let listado = document.createElement("li");
   listado.innerHTML=`${p.funcion}`;
   listaImpresa.appendChild(listado);
}


console.log(listaImpresa);*/



const inputSearch = document.querySelector("#inputSearch")
const tbody = document.querySelector("tbody")


const listadoBusqueda = (p)=>{
   return`<tr>
            <td>${p.jerarquia}</td>
            <td>${p.nombre}</td>
            <td>${p.apellido}</td>
            <td>${p.funcion}</td>
         </tr>`
}

const filtradoJerarquia = ()=>{
   let parametro1 = inputSearch.value
   let resultado6 = personas.filter(p=> p.jerarquia.includes(parametro1))
   if (resultado6.length > 0) {
 cargarBusqueda(resultado6)
 }
}

const cargarBusqueda = (array)=>{
   let listado = ""
   if (array.length > 0) {
      array.forEach(p=>{
         listado += listadoBusqueda(p)
      })
      tbody.innerHTML = listado;
   }
}
cargarBusqueda(personas)


     


/**********************BOTONES***********************/

//BOTON LICENCIAS

let botonLicencia = document.createElement("button");
botonLicencia.textContent= "LICENCIAS";
botonLicencia.setAttribute("class", "botonLicencia");
document.querySelector(".listaIndex").appendChild(botonLicencia);

//onclick
botonLicencia.onclick = function(){
   //console.log("hiciste click en el boton de licencias");
   location.href = `pages/licencias.html`
}
//mousemove con msj para el boton
botonLicencia.addEventListener("mousemove", ()=>{
   botonLicencia.title = "presiona para ingresar a Licencias"
} )

//BOTON CONCEPTOS

let botonConcepto = document.createElement("button");
botonConcepto.textContent= "CONCEPTO";
botonConcepto.setAttribute("class", "botonConcepto");
document.querySelector(".listaIndex").appendChild(botonConcepto);

botonConcepto.addEventListener("click", ()=>{
   //console.log("Hiciste click en boton de conceptos");
   location.href = `pages/conceptos.html`
})

botonConcepto.addEventListener("mousemove", ()=>{
   botonConcepto.title = "presiona para ingresar a Concepto"
} )