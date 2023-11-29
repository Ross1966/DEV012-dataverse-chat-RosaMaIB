
//import  Home  from "./home";

import { getElementById } from "../lib/apiData.js";
import { navigateTo } from "../router.js";

export const Example = () => {
    const result = document.createElement('p');
    let traerId = sessionStorage.getItem(`selecVista`)
    const animal = getElementById(traerId)
    const vistaHtml =  `
    <div id="contenedorTarjeta">
    <h2 class="tituloId">${animal.name}</h2>
    <img class="imgIndividual" src="${animal.imageUrl}">
    <p class="imgParrafo">${animal.description}</p>
    </div>
    `
    
    result.innerHTML = (vistaHtml);
   
   // const tarjeta = document.createElement('div');
   
       //let vista = document.createElement('p');
      
       //vista.innerHTML = (traerVista);
        
        
    return result
   
   
}

