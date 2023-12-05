//import { sortData } from "../lib/dataFunctions";

import { sortData } from "../lib/dataFunctions.js";

export const Filtros = (clickFuncion) =>{
 
  
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
        
        
          <button  id="prueba" class="boton" data-testid="button-clear">Limpiar</button><br><br>
        
          <p id="calcular"><span>Promedio de peso:</span><br>Animales carnívoros</p>

          <p id="calcularHabitad"><span>Porcentaje total Hábitat:</span><br>Selva</p>
    `;
    
               
    const crearDivView = document.createElement("div");
    crearDivView.classList.add("contenedor1")
    crearDivView.innerHTML =  filtroView;
     


    // PRUEBA DE LA FUNCION  EN LA OFFICE HOUR
    const nueva = crearDivView.querySelector("#prueba")
    nueva.addEventListener("click" , function () {
      console.log("Prueba")
      clickFuncion()
    })

  //HASTa AQUI


  const ordenar =  crearDivView.querySelector(`select[data-testid="select-sort"]`);
  console.log(ordenar)

    ordenar.addEventListener("change", (e) => {
    const opcion = e.target.value
    console.log(opcion)
    
    clickFuncion()
  
    //sortData(datosOrdenados, "name" , opcion);
    //console.log(datosOrdenados)
    
    //container.innerHTML = (datosOrdenados)
    //console.log(container)

    });

    
    return crearDivView;
}