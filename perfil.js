const bodyFicha = document.getElementById("#bodyFicha")


const fichaPersonal = () =>{
          bodyFicha.innerHTML = ""
       
          const main = document.createElement(`main`);
          const contenidoMain = `
          <h2> personal</h2>
          
          <form method="post" action="" enctype="text/plain"> 
          <h4>Nombre:</h4>
          
          <h4>Apellido: "fdfdfdf" </h4>
       
          <h4>Jerarquia: </h4>
          
          <h4>Funcion: </h4>
                    
          <h4>domicilio: </h4>
       
          </form>
          `
          main.innerHTML = contenidoMain;
          bodyFicha.append(main)

} 
       