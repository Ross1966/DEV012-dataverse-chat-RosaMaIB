import { Home } from './views/home.js';
import {Example} from './views/Example.js';

import { Error } from './views/error.js';
import {onURLChange, setRootElement, setRoutes } from './router.js';



const routes = {
    "/": Home,
    "/Example": Example,
    "/Error": Error,
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
    console.log(e.currentTarget)
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