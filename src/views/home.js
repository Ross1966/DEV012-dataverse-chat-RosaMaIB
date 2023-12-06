import  data  from '../data/dataset.js';
import { navigateTo } from '../router.js';
import { Footer } from '../components/footer.js';
import { renderItems } from '../components/Tarjeta.js';
import { filterDataByDiet, sortData } from '../lib/dataFunctions.js';
import { Titulo } from '../components/Titulo.js';
//const root = document.querySelector("#root");
let datosFiltrados = data;
let datosFiltradosDieta = data;
//root.innerHTML = renderItems;


export const Home = () => {
    
    const mainContainer = document.createElement('div')
    let listaAnimales = document.createElement('section')  
    const filtros = document.createElement('div')
    filtros.classList.add("contenedor1")
    let listadoAnimales = renderItems(datosFiltrados)
   
    
      filtros.innerHTML = `
      
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
      
        //FUNCION PARA ORDENAR DATOS ASCENDENTE Y DESCENDENTE

        const ordenar =  filtros.querySelector(`select[data-testid="select-sort"]`);
          console.log(ordenar)

            ordenar.addEventListener("change", (e) => {
            const opcion = e.target.value;
            datosFiltrados = sortData(datosFiltrados, "name" , opcion);
             const listaNueva = renderItems(datosFiltrados)
             console.log(listaNueva)
             listaAnimales.replaceChild(listaNueva, listadoAnimales)
             listadoAnimales = listaNueva
          }); 


          //FUNCION PARA FILTRAR ANIMALES POR SU DIETA

          const tipoDieta =  filtros.querySelector(`select[data-testid="select-filter"]`);
          console.log(tipoDieta)
     
            tipoDieta.addEventListener("change", (e) => {
              const dieta = e.target.value;
              datosFiltradosDieta = filterDataByDiet(data, dieta);
              console.log(datosFiltradosDieta)
              const listaNuevaDieta = renderItems(datosFiltradosDieta)
            console.log(listaNuevaDieta)
              listaAnimales.replaceChild(listaNuevaDieta, listadoAnimales)
              console.log(listaAnimales)
              listadoAnimales = listaNuevaDieta
            })


    const crearDivView = document.createElement("div");
    crearDivView.classList.add("contenedor1")
    crearDivView.innerHTML =  filtros.innerHTML;


    mainContainer.appendChild(Titulo());
    mainContainer.appendChild(filtros)
    mainContainer.appendChild(listaAnimales)
    listaAnimales.appendChild(listadoAnimales)
    mainContainer.appendChild(Footer());
   
    mainContainer.appendChild(crearDivView)
    

    

  
 
    return mainContainer;

    
}
















