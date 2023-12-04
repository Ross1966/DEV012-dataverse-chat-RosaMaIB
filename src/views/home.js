import  data  from '../data/dataset.js';
import { navigateTo } from '../router.js';
import { Footer } from '../components/footer.js';
import { Titulo } from '../components/Titulo.js';
//import dataset from '../data/dataset.js';
import { sortData } from '../lib/dataFunctions.js';
let datosOrdenados = data;


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
        <dt>Hábitat:</dt>
        <dd itemprop ='' class="parrafoBox">${animal.facts.tipoHabitad}</dd>
        <dt>Dieta:</dt>
        <dd itemprop ='' class="parrafoBox">${animal.facts.tipoDieta}</dd>
        </dl>   
      `;
          const box = li.querySelector(`#${animal.id}`);
          box.addEventListener("click", function() {
            sessionStorage.selecVista = animal.id
           
             navigateTo('/Example','props')
           
        });
        container.appendChild(li)
       
    });
    
    
    // CREACION DEL MENU DE FILTROS

      const filtroView = `
      
          <button class="abrir-menu" id="abrir-menu"><i class="bi bi-list"></i></button>
          
            <button class="cerrar-menu" id="cerrar-menu"><i class="bi bi-x"></i></button>
            <label>Ordenar de:</label>
            <select name="name" data-testid="select-sort">
              <option value="" disabled selected>--Elige una Opción--</option>
              <option value="asc">A - Z</option>
              
              <option value="desc">Z - A</option>
                  
  
            </select>
            <label>Tipo de Dieta:</label>
            <select name="dieta" data-testid="select-filter">
              <option value="" disabled selected>--Elige una Opción--</option>
              <option value="Omnívora">Omnivoros</option>
              <option value="Insectívora">Insectivoros</option>
              <option value="Frugívora">Frugívoros</option>
              <option value="Carnívoro">Carnívoros</option>
              <option value="Herbívoro">Hervívoros</option>
            </select>
  
  
            <label>Hábitat:</label> 
            <select name="habitad">
              <option value="" disabled selected>--Elige una Opción--</option>
              <option value="Bosque">Bosque</option>
              <option value="Granja">Granja</option>
              <option value="Campo">Campo</option>
              <option value="Hogar">Hogar</option>
              <option value="Cueva">Cueva</option>
              <option value="Selva">Selva</option>
              <option value="Jardín">Jardín</option>
              <option value="Sabana Africana">Sabana Africana</option>
              <option value="Montaña">Montaña</option>
              <option value="Desierto">Desierto</option>
            </select>
          
          
            <button class="boton" data-testid="button-clear">Limpiar</button><br><br>
          
            <p id="calcular"><span>Promedio de peso:</span><br>Animales carnívoros</p>
  
            <p id="calcularHabitad"><span>Porcentaje total Hábitat:</span><br>Selva</p>
      `;
      
         
      const crearDivView = document.createElement("div");
      crearDivView.classList.add("contenedor1")
      crearDivView.innerHTML =  filtroView;
      
//  ANEXAMOS EL TITULO, EL FOOTER Y EL MENU DE FILTROS

    container.appendChild(Titulo());
    container.appendChild(Footer());
    container.appendChild(crearDivView);
    
    

    // LLAMADO PARA ORDENAR DATOS ASCENDENTE Y DESCENDENTE

        const ordenar =  crearDivView.querySelector(`select[data-testid="select-sort"]`);
          console.log(ordenar)

            ordenar.addEventListener("change", (e) => {
            const opcion = e.target.value
            sortData(datosOrdenados, "name" , opcion);
            console.log(datosOrdenados)
            
            //container.innerHTML = (datosOrdenados)
            //console.log(container)
            
          });

          
        
    
 
    return container 

    
}
  
