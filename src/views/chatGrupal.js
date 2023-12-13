import { getElementById } from "../lib/apiData.js";
import dataset from "../data/dataset.js";
import { navigateTo } from "../router.js";

export const chatGrupal = () =>{
    const contenedorPrincipal = document.createElement("div")
    contenedorPrincipal.classList.add("contenedorPrincipal")
    const resultadoLista = document.createElement("ul")
    resultadoLista.classList.add("ulGrupal")
    

    dataset.forEach((animal) =>{ 
        const li = document.createElement("li")
        li.classList.add("listaGrupal")
        li.innerHTML =`
        <div id="contenedorGrupal">
        <img class="imagenGrupal" src="${animal.imageUrl}" alt="${animal.name}"/>
        <h2 class="nombreGrupal">${animal.name}</h2>
        </div>
        `
    resultadoLista.appendChild(li)
    })
   
 
//export const grupoDeChat = () =>{
        const chat = `
        <div id="contenedorInputGrupal">
        <div id="contenedorTextoGrupal"></div>
        <input type="text" id="miInputGrupal" placeholder="Escribe algo...">
        <div class="botones">
        <button id="mostrarTexto">Enviar</button>
        </div>
        
    `
    const contenedorChat = document.createElement("div");
    contenedorChat.classList.add("contenedorChat")
    contenedorChat.innerHTML = chat;
    contenedorPrincipal.appendChild(resultadoLista);
    contenedorPrincipal.appendChild(contenedorChat)
console.log(contenedorChat)

     ///CHAT GRUPAL

     const mostrarTexto = contenedorPrincipal.querySelector("#mostrarTexto");
     const miInput = contenedorPrincipal.querySelector("#miInputGrupal");
     const contenedorTexto = contenedorPrincipal.querySelector("#contenedorTextoGrupal");
     //const borrarTexto = result.querySelector("#borrarTexto");
     //<button id="borrarTexto">Limpiar</button>
     console.log(mostrarTexto)
     let historialText = []
 
     mostrarTexto.addEventListener("click", function() {
         enviarTexto();
     })
 
     miInput.addEventListener("keydown", function(e) {
         // Verificar si la tecla presionada es "Enter"
         if (e.key === "Enter") {
             e.preventDefault(); // Evitar el comportamiento predeterminado del "Enter" en un campo de texto (como agregar una nueva línea)
             enviarTexto();
         }
     });
 
     function enviarTexto() {
         let texto = miInput.value;
         historialText.push(texto);
 
         miInput.value = ""
         console.log("SOY EL ADDEVENT LISTENER");
 
         mostrarHistorial()
     };
     
     function mostrarHistorial() {
         let contenedor = contenedorTexto;
         contenedor.innerHTML = "";
         historialText.forEach(function(texto) {
         let nuevoDiv = document.createElement("div");
         nuevoDiv.classList.add("textIndividual");
         let nuevoParrafo = document.createElement("p");
         nuevoParrafo.innerText = texto;
         nuevoDiv.appendChild(nuevoParrafo);
         contenedor.appendChild(nuevoDiv);
         });
         contenedor.scrollTop = contenedor.scrollHeight;
     }
 
    const botonHome = `<button id="home">
      <img  id="botonHome" src="../img/BotonHome.png">
      </button>`

    

    const contenedorBoton = document.createElement('div')

    contenedorBoton.innerHTML = botonHome
    contenedorPrincipal.appendChild(contenedorBoton)

    const regresaHome = contenedorPrincipal.querySelector('#botonHome')

    regresaHome.addEventListener("click", function() {
        navigateTo('/', 'props')
    })
  
return contenedorPrincipal;
}

