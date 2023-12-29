import { getCompletion } from "../src/lib/openIAapi";
//import { describe, it, expect, jest } from "node:test";
const openIaRespuesta = jest
  .fn()
  .mockResolvedValueOnce({ choices: [{ message: "foo" }] });
global.fetch = jest.fn(() =>
  Promise.resolve({
    json: openIaRespuesta,
  })
);
describe("endpoint de openIa", () => {
  it("La api es llamada con los datos adecuados", () => {
    const mensajes = [{ role: "user", content: "foo" }];
    getCompletion("123456", mensajes);
    expect(global.fetch).toBeCalledWith(
      "https://api.openai.com/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer 123456",
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: mensajes,
        }),
      }
    );
  });
  it("El edpoint responde de manera correcta", () => {
    const response = {
      choices: [
        {
          message: {
            role: "assistant",
            content: "¡Hola!",
          },
        },
      ],
    };

    openIaRespuesta.mockResolvedValueOnce(response);

    return getCompletion("12345", [{ role: "user", content: "foo" }]).then(
      (resolved) => {
        expect(resolved).toBe(response);
      }
    );
  });
  describe("Respuesta definida", () => {
    it("Obteniendo la respuesta del GetCompletion", () => {
      const mensajes = [{ role: "user", content: "foo" }];
      getCompletion("123456", mensajes);
      expect(mensajes).toBeDefined();
    });
  });
});
