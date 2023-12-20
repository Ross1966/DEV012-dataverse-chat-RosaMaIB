import data from "../data/dataset.js";
import { navigateTo } from "../router.js";
import { Footer } from "../components/Footer.js";
import { renderItems } from "../components/Tarjeta.js";
import { filterDataByDiet, sortData } from "../lib/dataFunctions.js";
import { Titulo } from "../components/Titulo.js";
//import { filterDataByHabit } from '../lib/dataFunctions.js';

let datosFiltrados = data;

export const Home = () => {
  const mainContainer = document.createElement("div");
  const listaAnimales = document.createElement("section");
  const filtros = document.createElement("div");
  filtros.classList.add("contenedor3");
  let listadoAnimales = renderItems(datosFiltrados);

  filtros.innerHTML = `
      
          
            <button class="abrir-menu" id="abrir-menu"><i class="bi bi-list"></i></button>
            <div class="contenedor1" id="contenedor1">
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
  
  
           
          
          
            <button class="boton" data-testid="button-clear">Limpiar</button><br><br>

            <button id="chatGrupo">Chat Grupal</button>
            <button id="api">Api Key</button>
            </div>
      `;
      

  //FUNCION PARA ORDENAR DATOS ASCENDENTE Y DESCENDENTE

  const ordenar = filtros.querySelector(`select[data-testid="select-sort"]`);
  //console.log(ordenar)

  ordenar.addEventListener("change", (e) => {
    const opcion = e.target.value;
    datosFiltrados = sortData(datosFiltrados, "name", opcion);
    const listaNueva = renderItems(datosFiltrados);
    //console.log(listaNueva)
    listaAnimales.replaceChild(listaNueva, listadoAnimales);
    listadoAnimales = listaNueva;
  });

  //FUNCION PARA FILTRAR ANIMALES POR SU DIETA

  const tipoDieta = filtros.querySelector(`select[data-testid="select-filter"]`);
  //console.log(tipoDieta)

  tipoDieta.addEventListener("change", (e) => {
    const dieta = e.target.value;
    datosFiltrados = filterDataByDiet(data, dieta);
    //console.log(datosFiltrados)
    const listaNuevaDieta = renderItems(datosFiltrados);
    //console.log(listaNuevaDieta)
    listaAnimales.replaceChild(listaNuevaDieta, listadoAnimales);
    //console.log(listaAnimales)
    listadoAnimales = listaNuevaDieta;
  });
  //BOTON LIMPIAR

  //BOTON LIMPIAR

  const boton = filtros.querySelector('[data-testid="button-clear"]');
  boton.addEventListener("click", function () {
    tipoDieta.value = "";
    ordenar.value = "";
    const regresar = renderItems(data);
   
    listaAnimales.replaceChild(regresar, listadoAnimales);
    listadoAnimales = regresar;
  });

  //BOTON CHAT GRUPAL
  const chatGrupo = filtros.querySelector("#chatGrupo");
  chatGrupo.addEventListener("click", function () {
    
    navigateTo("/chatGrupal", "props");
  });

  //BOTON APIKEY

  const api = filtros.querySelector("#api");
  api.addEventListener("click", function () {
    navigateTo("/ApiKey", "props");
  });

  
  
  const crearDivView = document.createElement("div");
  crearDivView.classList.add("contenedor2");
  crearDivView.innerHTML = filtros.innerHTML;

  mainContainer.appendChild(Titulo());
  mainContainer.appendChild(filtros);
  mainContainer.appendChild(listaAnimales);
  listaAnimales.appendChild(listadoAnimales);
  mainContainer.appendChild(Footer());
  

  mainContainer.appendChild(crearDivView);

  //MENU HAMBURGUESA
  const contenedor1 = filtros.querySelector("#contenedor1")
  const cerrar = filtros.querySelector("#cerrar-menu");
const abrir = filtros.querySelector("#abrir-menu");

abrir.addEventListener("click", () => {
  contenedor1.classList.add("visible");
  console.log("Hola")
});

cerrar.addEventListener("click", () => {
  contenedor1.classList.remove("visible");
});
console.log("Soy el menu hamburguesa", crearDivView)

  return mainContainer;
};
