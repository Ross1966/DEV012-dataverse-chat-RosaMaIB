import { Home } from "./views/home";


export const vistaTarjeta = () =>{
    const vista = document.createElement('div');
    vista.innerHTML = Home(`#${animal.id}`);
    console.log(vista)
    return vista;   
}
