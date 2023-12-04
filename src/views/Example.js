
//import  Home  from "./home";

import { getElementById } from "../lib/apiData.js";
import { navigateTo } from "../router.js";




export const Example = () => {
    const result = document.createElement('p');
    let traerId = sessionStorage.getItem(`selecVista`)
    const animal = getElementById(traerId)
    const vistaHtml =  `
    <div id="tarjetaPrincipal">
    <div id="contenedorTarjeta">
    <h2 class="tituloId">${animal.name}</h2>
    <img class="imgIndividual" src="${animal.imageUrl}">
    <p class="imgParrafo">${animal.description}</p>
    </div>

    <div id="contenedorInput">
    <br>
    <div id="contenedorTexto"></div>
    <br>
    <input type="text" id="miInput" placeholder="Escribe algo...">
    <div class="botones">
    <button id="mostrarTexto">Enviar</button>
    
    </div>
    </div>
    </div>
    `
    
    result.innerHTML = (vistaHtml);


    ///CHAT INDIVIDUAL

    const mostrarTexto = result.querySelector("#mostrarTexto");
    const miInput = result.querySelector("#miInput");
    const contenedorTexto = result.querySelector("#contenedorTexto");
    //const borrarTexto = result.querySelector("#borrarTexto");
    //<button id="borrarTexto">Limpiar</button>

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
    }

    /*
    borrarTexto.addEventListener("click", function(){
        contenedorTexto.innerHTML = "";
        
        console.log("Estas dentro del boton BORRAR")
    })
    */ 
        
    return result;
   
   
}

