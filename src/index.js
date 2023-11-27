import {Example} from './views/Example.js';
import { Home } from './views/home.js';
import { Error } from './views/error.js';
import {onURLChange, setRootElement, setRoutes } from './router.js';



const routes = {
    "/": Home,
    "/Example": Example,
    "/Error": Error,
}

setRoutes(routes);
setRootElement(document.getElementById("root"));


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