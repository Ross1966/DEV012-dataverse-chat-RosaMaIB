import dataset from "../data/dataset.js";


export const sortData = (data, sortBy, sortOrder) => {
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
  