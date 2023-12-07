import { Home } from './views/home.js';
import {Example} from './views/Example.js';
import { Error } from './views/error.js';
import {onURLChange, setRootElement, setRoutes } from './router.js';
import { vistaApi } from './views/apiVista.js';
import { chatGrupal } from './views/chatGrupal.js';




const routes = {
    "/": Home,
    "/Example": Example,
    "/Error": Error,
    "/ApiKey": vistaApi,
    "/chatGrupal": chatGrupal
}

setRoutes(routes);
setRootElement(document.getElementById("root"));

/*function encabezado() {
    const section2= document.createElement("section")
    section2.appendChild(Titulo())
    document.body.appendChild(section2);
}
*/
/*
 const mostrarTexto = result.querySelector("#mostrarTexto");
    const miInput = result.querySelector("#miInput");
    const resultado = result.querySelector("#resultado");

    let historialText = []

    mostrarTexto.addEventListener("click", function() {
        let texto = miInput.value;
        resultado.innerHTML = texto;
        console.log("SOY EL ADDEVENT LISTENER");
    });
*/
/*
function init() {
    
    const section1= document.createElement("section")
    section1.appendChild(Footer())
    document.body.appendChild(section1);
  }
  init();
  */

  

window.addEventListener("DOMContentLoaded", (e) => {
    onURLChange(e.currentTarget.location.pathname);
    setRootElement(document.getElementById("root"));
    //console.log(e.currentTarget)
    
})


window.onpopstate = onURLChange;




// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.




//Ejemplo de definición de rutas:




/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/
