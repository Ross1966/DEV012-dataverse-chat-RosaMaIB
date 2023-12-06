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
     //console.log(dataset)
    //root.innerHTML = dataset(datosFiltrados);
    return dataset;
  
  };


  // FUNCION PARA FILTRAR LA INFORMACION POR TIPO DE DIETA
  export const filterDataByDiet = (data, filtrar) => {
  let resultado = [];
  if (filtrar === "") {
    return null;
  } else { 
    resultado = data.filter((data) => data.facts.tipoDieta === filtrar);
  //console.log(resultado)
  }
  return resultado
}; 
  


