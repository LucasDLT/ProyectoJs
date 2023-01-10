//MODIFIQUE EL TITULO ORIGINAL
let tituloNuevo = document.querySelector(".headerIndex").textContent = "INGRESASTE AL SISTEMA DE LICENCIAS Y CONCEPTOS"
console.log(tituloNuevo);


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
   localStorage.setItem("location", JSON.stringify(`pages/licencias.html`) )
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

