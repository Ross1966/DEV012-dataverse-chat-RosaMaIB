//FUNCION PARA EL LLAMADO DE LA API
const historialMensaje = [];

export function agregarMensajesUsuario(mensaje) {
  historialMensaje.push({
    role: "user",
    content: mensaje,
  });
}

export function agregarMensajeIA(mensaje) {
  historialMensaje.push({
    role: "assistant",
    content: mensaje,
  });
}

export function iniciarChat(nombre) {
  historialMensaje.length = 0;
  historialMensaje.push({
    role: "system",
    content: "Respóndeme como si fueras un " + nombre,
  });
  return historialMensaje;
}

export function getCompletion(apiKey, historial) {
  return fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: "Bearer " + apiKey,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: historial,
    }),
  })
    .then((res) => res.json())
    .catch((error) => alert("Error:", error));
}
