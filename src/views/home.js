import  data  from '../data/dataset.js';
import { navigateTo } from '../router.js';
//import { vistaTarjeta } from '../dataFunctions.js';



export const Home = () => {
     let selecVista = "";
    const container = document.createElement('ul');
    container.classList.add("lista")
    data.forEach((animal) => {
      //<li itemscope itemtype="animal" class="box" id="imagen">
        const li = document.createElement("li")
        li.classList.add("box")

        li.innerHTML=`
        <dl id="${animal.id}">
        <h2 class="id">${animal.name}</h2>
        <img class="imgTarjetas" src="${animal.imageUrl}" alt="${animal.name}"/>
        <dt>Nombre:</dt>
        <dd itemprop ='name' class="parrafoBox">${animal.name}</dd>
        <dt>Descripción:</dt> 
        <dd itemprop ='' class="descripcion">${animal.shortDescription}</dd>
        <dt>Peso en Kilos:</dt>
        <dd itemprop ='' class="parrafoBox">${animal.facts.pesoEnKilos}</dd>
        <dt>Años de Vida:</dt>
        <dd itemprop ='' class="parrafoBox">${animal.facts.anosDeVida}</dd>
        <dt>Habitad:</dt>
        <dd itemprop ='' class="parrafoBox">${animal.facts.tipoHabitad}</dd>
        <dt>Dieta:</dt>
        <dd itemprop ='' class="parrafoBox">${animal.facts.tipoDieta}</dd>
        </dl>   
      `;
          const box = li.querySelector(`#${animal.id}`);
          box.addEventListener("click", function() {
            sessionStorage.selecVista = `${animal.id} ${animal.imageUrl} ${animal.description}`
            console.log(`selecVista`)
            //console.log(`soy una Prueba de ${animal.id}`)
            navigateTo('/Example','pathname')
        });
        container.appendChild(li)

    });
    //console.log(elemento);
    //return `<ul class="lista">${elemento}</ul>`;

   
    
    
    // container.innerHTML = `<ul class="lista">${elemento}</ul>`;

  
  
 
    return container 

    
}
  
