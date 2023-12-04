

export const Titulo = () => {
    const crearTitulo = `
    <h1> InfoZoo </h1> `
    const crearHeader = document.createElement("header")
    crearHeader.innerHTML = crearTitulo;
    
return crearHeader;
}