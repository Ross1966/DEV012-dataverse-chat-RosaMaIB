import { Home } from "./home";

export const Example = () => {
    
    
    /*const result = document.createElement('p');
    result.innerHTML += "Hola Mundo";
    return result;
    */

document.addEventListener("DOMContentLoaded", () => {
    const holaHome = Home();
    document.body.appendChild(holaHome)
    console.log("hOLA")

});
 
}