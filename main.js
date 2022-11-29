let usuario = "Lucas";
let contrasenia = "1";

function ingreso () {

         let usuario = prompt("ingresa tu usuario");
         let contrasenia = Number(prompt("ingresa tu clave"));

         if (usuario == `Lucas` & contrasenia === 1) {
               alert("Usuario valido, Bienvenido "  +  usuario);

         } else {
            alert("Los datos ingresados no son validos, adios");
            
         }
         }

ingreso();

             
                  


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
calculador();

