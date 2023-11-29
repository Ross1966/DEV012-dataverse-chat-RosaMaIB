
import { getElementById } from "../lib/apiData.js";

export const Example = () => {
    const result = document.createElement('p');
    let traerId = sessionStorage.getItem(`selecVista`)
    const animal = getElementById(traerId)
    const vistaHtml =  `
    <div id="contenedorTarjeta">
    <h2>${animal.name}</h2>
    <img class="imgIndividual" src="${animal.imageUrl}">
    <p class="imgParrafo">${animal.description}</p>
    </div>
    `
    result.innerHTML = vistaHtml;
   
   

       return result
   
   
}





//export default Example;