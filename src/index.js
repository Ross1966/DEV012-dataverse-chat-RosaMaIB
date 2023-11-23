import {Example} from './views/Example.js';
import { Home } from './views/home.js';
import { Error } from './views/error.js';
import {onURLChange, setRootElement, setRoutes } from './router.js';
import { Footer } from './components/footer.js';
import dataset from './data/dataset.js';


const routes = {
    "/Example": Example,
    "/": Home,
    "/Error": Error,
}
const renderSection = document.getElementById("root");
renderSection.innerHTML = Home(dataset);


setRoutes(routes)
setRootElement(renderSection);


/*
if ((dataset)) {
    renderSection.innerHTML = Home(dataset);
    console.log("HOLA SI HAY DATA")
} else {
    console.log("Error: NO HAY DATA QUE MOSTRAR");
}
*/

function init() {
    
    const section1= document.createElement("section")
    section1.appendChild(Footer())
    document.body.appendChild(section1);
  }
  init();





window.addEventListener("DOMContentLoaded", (e) => {
    onURLChange(e.currentTarget.location.pathname);
    
})
// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.




//Ejemplo de definición de rutas:




/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/