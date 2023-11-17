import {Example} from './views/Example.js';
import { Home } from './views/home.js';
import {onURLChange, setRootElement, setRoutes } from './router.js';
import data from './data/dataset.js'



const routes = {
    "/Example": Example,
    "/": Home,
}
const renderSection = document.getElementById("root");



if ((data)) {
    renderSection.innerHTML = Home(data);
    console.log("HOLA SI HAY DATA")
} else {
    console.log("Error: NO HAY DATA QUE MOSTRAR");
}



setRoutes(routes);
setRootElement(renderSection);


window.addEventListener("DOMContentLoaded", (e) => {
    onURLChange(e.currentTarget.location.pathname);
    
})
// En este archivo definirás tus rutas e importarás los componentes que vas a renderizar.

/*
import Example from './views/Example.js';

Ejemplo de definición de rutas:

const routes = {
    "/": Example,
    ...
}
*/

/*
TODO:
1.- Definir rutas en router.
2.- Pasar "root element" a router.
3.- Invocar el router para renderizar la vista correcta.
*/