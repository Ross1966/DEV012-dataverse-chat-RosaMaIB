
//import  Home  from "./home";

export const Example = () => {
    const result = document.createElement('p');
    let traerVista = sessionStorage.getItem(`selecVista`)
    result.innerHTML = ("Animal seleccionado" + traerVista);
   
   // const tarjeta = document.createElement('div');
   
       //let vista = document.createElement('p');
      
       //vista.innerHTML = (traerVista);

       return result
   
   
}





//export default Example;