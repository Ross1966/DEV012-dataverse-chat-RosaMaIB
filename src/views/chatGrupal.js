import { getElementById } from "../lib/apiData.js";
import dataset from "../data/dataset.js";
import { navigateTo } from "../router.js";
import { getCompletion, iniciarChat, agregarMensajeIA, agregarMensajesUsuario} from "../lib/openIAapiGrupo.js"; 

export const chatGrupal = () =>{
    const contenedorPrincipal = document.createElement("div")
    contenedorPrincipal.classList.add("contenedorPrincipal")
    const resultadoLista = document.createElement("ul")
    resultadoLista.classList.add("ulGrupal")
    
   
    const contenedorInputGrupal = document.createElement("div")
    contenedorInputGrupal.setAttribute("id", "contenedorInputGrupal") 
    

    const contenedorTextoGrupal = document.createElement("div")
    contenedorTextoGrupal.setAttribute("id", "contenedorTextoGrupal")

   
    const miInputGrupal = document.createElement("input")
    miInputGrupal.setAttribute("id", "miInputGrupal")
    miInputGrupal.placeholder = "Escribe Algo..."

    const mostrarTexto = document.createElement("button")
    mostrarTexto.setAttribute("id", "mostrarTexto")
    mostrarTexto.innerText = "Enviar"

   
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
   
    contenedorInputGrupal.appendChild(contenedorTextoGrupal)
    contenedorInputGrupal.appendChild(miInputGrupal)
    contenedorInputGrupal.appendChild(mostrarTexto)

    const contenedorChat = document.createElement("div");
    contenedorChat.classList.add("contenedorChat")
    contenedorChat.appendChild(contenedorInputGrupal)
    /*contenedorChat.appendChild(contenedorTextoGrupal)
    contenedorChat.appendChild(miInputGrupal)
    contenedorChat.appendChild(mostrarTexto)*/
    
    contenedorPrincipal.appendChild(resultadoLista);
    contenedorPrincipal.appendChild(contenedorChat)
    console.log(contenedorChat)

     ///CHAT GRUPAL

     let historialText = iniciarChat(dataset);
    

     mostrarTexto.addEventListener("click", function() {
        enviarTexto();
    })
    miInputGrupal.addEventListener("keydown", function(e) {
        // Verificar si la tecla presionada es "Enter"
        if (e.key === "Enter") {
            e.preventDefault(); // Evitar el comportamiento predeterminado del "Enter" en un campo de texto (como agregar una nueva línea)
            enviarTexto();
        }
    });



     function enviarTexto() {
        let texto = miInputGrupal.value;
        const keyUsuario = localStorage.getItem("Api_Ingresada")
        const arregloDePromesas = []
        dataset.forEach((animal) => {
         agregarMensajesUsuario(texto)
         console.log(agregarMensajesUsuario())
        arregloDePromesas.push(getCompletion(keyUsuario, dataset))
        /* console.log(keyUsuario)
         getCompletion(keyUsuario, historialText).then((respuesta) => {
            console.log(respuesta)
            agregarMensajeIA(respuesta.choices[0].message.content)
            miInput.value = ""
            //console.log("SOY EL ADDEVENT LISTENER");
              mostrarHistorial()
         })*/
        })
          console.log(arregloDePromesas)  
         Promise.all(arregloDePromesas).then((arregloDeRespuestas) =>{
          arregloDeRespuestas.forEach((respuesta) => {
            console.log(respuesta)
            mostrarHistorial()
          })
         } )
    };
     
     
     

    function mostrarHistorial() {
        let contenedor = contenedorGrupal;
        contenedor.innerHTML = "";

        historialText.forEach(function(mensaje) {
        let nuevoDiv = document.createElement("div");
        nuevoDiv.classList.add("textIndividual");

        //se crea un class para darle color a los mensajes de "user" y diferenciarlos del mensaje del "assistant"
        if (mensaje.role === "user") {
            nuevoDiv.classList.add("userMensaje");
          } else if (mensaje.role === "assistant") {
            nuevoDiv.classList.add("assistantMensaje");
          } else if (mensaje.role === "system") {
            nuevoDiv.classList.add("systemMensaje");
          }


        let nuevoParrafo = document.createElement("p");
        nuevoParrafo.innerText = mensaje.content;
        nuevoDiv.appendChild(nuevoParrafo);
        contenedor.appendChild(nuevoDiv);
        });

        //Agregamos el SCROLL AUTOMATICO
        contenedor.scrollTop = contenedor.scrollHeight;
    }


     //BOTON PARA REGRESAR AL HOME
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

