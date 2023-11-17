export const Error = () => {
    const parrafoError = `
    <div class = fondoError>
    <img class="jirafaTriste" src="jirafaTriste-removebg-preview.png" alt="">
    <h5 class="TextError">Error</h5>
    <h2 class="TipoError">404</h2>
    <h4 class="TextError2">Page Not Found</h4>
    </div>

    `
   const errorView = document.createElement("section");
    errorView.innerHTML = parrafoError;

    

    return errorView
}