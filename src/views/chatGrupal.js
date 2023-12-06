import { getElementById } from "../lib/apiData.js";
import dataset from "../data/dataset.js";

export const chatGrupal = () =>{
    const resultadoLista = document.createElement("ul")
    resultadoLista.classList.add("ulGrupal")
    

    dataset.forEach((animal) =>{ 
        const li = document.createElement("li")
        li.classList.add("listaGrupal")
        li.innerHTML =`
        <div id="contenedorGrupal">
        <img class="imagenGrupal" src="${animal.imageUrl}" alt="${animal.name}"/>
        <h2 class="nombreGrupal">${animal.name}</h2>
        </div>
        `
    resultadoLista.appendChild(li)
    })
   
    return resultadoLista;
}