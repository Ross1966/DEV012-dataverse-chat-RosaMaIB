
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
<<<<<<< HEAD
    result.innerHTML = vistaHtml;
=======
    
    result.innerHTML = (vistaHtml);
>>>>>>> 96e957dd214e88b4372660d35d9f59afa3e2db56
   
   
<<<<<<< HEAD

       return result
=======
       //let vista = document.createElement('p');
      
       //vista.innerHTML = (traerVista);
        
        
    return result
>>>>>>> 96e957dd214e88b4372660d35d9f59afa3e2db56
   
   
}

