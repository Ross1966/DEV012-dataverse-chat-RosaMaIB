import { getElementById } from "../lib/apiData.js";
import {
  getCompletion,
  iniciarChat,
  agregarMensajeIA,
  agregarMensajesUsuario,
} from "../lib/openIAapi.js";
import { navigateTo } from "../router.js";

export const Detalle = () => {
  const result = document.createElement("p");
  const traerId = sessionStorage.getItem(`selecVista`);
  const animal = getElementById(traerId);
  const vistaHtml = `
    <div id="tarjetaPrincipal">
    <div id="contenedorTarjeta">
    <button id="home">
    <img  id="botonHome" src="../img/BotonHome.png">
    </button>
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
    `;
  result.innerHTML = vistaHtml;
  //BOTON HOME
  const home = result.querySelector("#home");
  home.addEventListener("click", function () {
    navigateTo("/", "props");
  });
  ///CHAT INDIVIDUAL
  const mostrarTexto = result.querySelector("#mostrarTexto");
  const miInput = result.querySelector("#miInput");
  const contenedorTexto = result.querySelector("#contenedorTexto");

  const historialText = iniciarChat(animal.name);

  //mostrarHistorial()
  mostrarTexto.addEventListener("click", function () {
    enviarTexto();
  });
  miInput.addEventListener("keydown", function (e) {
    // Verificar si la tecla presionada es "Enter"
    if (e.key === "Enter") {
      e.preventDefault(); // Evitar el comportamiento predeterminado del "Enter" en un campo de texto (como agregar una nueva línea)
      enviarTexto();
    }
  });
  function enviarTexto() {
    const texto = miInput.value;
    agregarMensajesUsuario(texto);
    const keyUsuario = localStorage.getItem("Api_Ingresada");
    getCompletion(keyUsuario, historialText).then((respuesta) => {
      agregarMensajeIA(respuesta.choices[0].message.content);
      miInput.value = "";
      //console.log("SOY EL ADDEVENT LISTENER");
      mostrarHistorial();
    });
  }
  function mostrarHistorial() {
    const contenedor = contenedorTexto;
    contenedor.innerHTML = "";
    const mostrarMensajeSystem = false;
    historialText.forEach(function (mensaje) {
      if (!(mensaje.role === "system" && !mostrarMensajeSystem)) {
        const nuevoDiv = document.createElement("div");
        nuevoDiv.classList.add("textIndividual");

        //se crea un class para darle color a los mensajes de "user" y diferenciarlos del mensaje del "assistant"
        if (mensaje.role === "user") {
          nuevoDiv.classList.add("userMensaje");
        } else if (mensaje.role === "assistant") {
          nuevoDiv.classList.add("assistantMensaje");
        } else if (mensaje.role === "system") {
          nuevoDiv.classList.add("systemMensaje");
        }

        const nuevoParrafo = document.createElement("p");
        nuevoParrafo.innerText = mensaje.content;
        nuevoDiv.appendChild(nuevoParrafo);
        contenedor.appendChild(nuevoDiv);
      }
    });

    //Agregamos el SCROLL AUTOMATICO
    contenedor.scrollTop = contenedor.scrollHeight;
  }

  return result;
};
