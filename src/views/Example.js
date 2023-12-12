
import { getElementById } from "../lib/apiData.js";

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
    
    result.innerHTML = vistaHtml;

    const mostrarTexto = result.querySelector("#mostrarTexto");
    const miInput = result.querySelector("#miInput");
    const contenedorTexto = result.querySelector("#contenedorTexto");

    let historialText = [];

    mostrarTexto.addEventListener("click", function() {
        enviarTexto();
    });

    miInput.addEventListener("keydown", function(e) {
        if (e.key === "Enter") {
            e.preventDefault();
            enviarTexto();
        }
    });

    function enviarTexto() {
        let texto = miInput.value;
        historialText.push(texto);

        miInput.value = "";
        mostrarHistorial();

       /////
    }
    
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
    
    function getCompletion() {
        const apiKey = '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';

        return fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + apiKey,
            },
            
            body:JSON.stringify({
                model: 'gpt-3.5-turbo',
                 messages: [
                {
                  "role": "system",
                  "content": "Eres un Oso"
                },
                {
                  "role": "user",
                  "content": "Hola, que eres"
                },
              ],
                //max_tokens: 100,
                //temperature: 0.9,
            })
           
           /* 
            body: JSON.stringify({
                model: 'gpt-3.5-turbo-instruct',
                prompt: "¿Cuantas razas de perros existen en latinoamerica?",//prompt,
                
            })
            */
            
        }).then(res => res.json()).catch(error => console.log("Error:", error));
    
    }
    console.log(getCompletion())
    
    return result;
}

