import dataset from "../data/dataset.js";
import { Filtros }   from "../components/Filtros.js";


export const sortData = (dataset, sortBy, sortOrder) => {
    dataset.sort((a, b) => {
  
        if(sortOrder === "asc"){
        return a.name.localeCompare(b.name)
        
      }else if(sortOrder === "desc"){
        return b.name.localeCompare(a.name)
      }else{
        return 0
      }
        
    })
     
    return dataset;
  
  };


  // FUNCION PARA FILTRAR LA INFORMACION POR TIPO DE DIETA
  export const filterDataByDiet = (data, filtrar) => {
  let resultado = [];
  if (filtrar === "") {
    return null;
  } else { 
    resultado = data.filter((data) => data.facts.tipoDieta === filtrar);
   }
  return resultado
}; 

//FUNCION PARA FILTAR POR HABITAD

export const filterDataByHabit = (data, filtrar) => {
  let resultado = [];
  const sinDatos =  [];
  resultado = data.filter((data) => data.facts.tipoHabitad === filtrar);
  if (resultado.length !== 0){
    return resultado;
  }else{
    return sinDatos
    
    
  }
  
};
  


