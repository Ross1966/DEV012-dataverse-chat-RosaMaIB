//FUNCION PARA EL LLAMADO DE LA API GRUPAL

const historialMensajeGrupal = [];

export function agregarMensajesUsuario(mensaje) {
  historialMensajeGrupal.push({
    role: "user",
    content: mensaje,
  });
}

export function agregarMensajeIA(mensaje) {
  historialMensajeGrupal.push({
    role: "assistant",
    content: mensaje,
  });
}

export function iniciarChat(nombre) {
  historialMensajeGrupal.length = 0;
  historialMensajeGrupal.push({
    role: "system",
    content: "Resnpondeme como si fueras un " + nombre,
  });
  return historialMensajeGrupal;
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

