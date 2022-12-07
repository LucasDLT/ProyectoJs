let usuario = "Lucas";
let contrasenia = "1";

function ingreso () {

         let usuario = prompt("ingresa tu usuario");
         let contrasenia = Number(prompt("ingresa tu clave"));
         let intentos = 0;

         do {
            if (usuario == `Lucas` & contrasenia === 1) {
               alert("Usuario valido, Bienvenido "  +  usuario);

         } else {
            alert("Los datos ingresados no son validos, adios");
            
            
         }
         intentos += 1;   
          usuario = prompt("ingresa tu usuario");
          contrasenia = Number(prompt("ingresa tu clave"));
            
         } while (intentos < 3);
         alert("superaste la cantidad de intentos, adios");

         }

         

ingreso();

 
/*function calculador () {


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
calculador();



//CONSTRUCTOR
/*
function Jerarquia (nombre, dias, servicio){
   this.nombre = nombre.toUpperCase();
   this.dias = dias;
   this.informar = function () {
      console.log()//tengo que ver que pongo como metodo aca ESTO TODAVIA LO TENES QUE HACER 
   }
}

//OBJETOS

const oficial  = new Jerarquia ("Oficial", 15);

const oficialPrimero = new Jerarquia ("Oficial Primero", 21);

const oficialMayor = new Jerarquia ("Oficial Mayor", 30);

const inspector = new Jerarquia ("Inspector", 30);

const principal = new Jerarquia ("Principal", 30);

console.log(inspector);



let efectivos = [];//array vacio

efectivos.push(oficial, oficialPrimero, oficialMayor, inspector, principal);// pusheo de objetos 


// por lo que vi en la clase se puede usar el metodo shift para eliminar objetos del array. Entonces si ahi agrego a un efectivo y despues lo quiero borrar antes de consultar los datos, podria agregar un boton usando este metodo, nose como todavia. 


/*console.log(efectivos);

console.log(efectivos.indexOf(inspector));// indexof para buscar dentro del array la ubicacion de la jerarquia inspector


console.log(efectivos.includes(oficial));// includes para que mediga si esta la jerarquia oficial, devuelve true o false, asi que podria usarla mas adelante para alguna funcion 

efectivos.reverse();// reverse para 
console.log(efectivos);*/


//NOTA cuando se trata de arrays como es una lista, no contas en cantidad, sino el longitud osea que si una lista tiene como tope 5 por ejemplo, no vas a contar cinco elementos, sino una longitud de 5. por que en el ejemplo del profesor pensaste que era en cantidad y usando length es en longitud


//foreach mostrando indice de objetos en array
/*
efectivos.forEach((e, indice) => {
   console.log(`${indice} : ${e}`);
});


//map
efectivos.map((e,i)=>{
   console.log(`${i} : ${e}`);
});
console.log(efectivos);



*/
