export const vistaApi = () =>{
    const apiHtml = `
    
        <div class="cajaApi">
            <label for="">Ingresa aquí tu número ApiKey:</label>
            <br>
            <input class="inputApi" type="number" placeholder="API KEY"></input>
            <br>
            <button class="botonApi">Entrar</button>
            <br>
            <img class="koala" src="../img/koala.png" alt="koala">
            
        </div>
    `
    const apiView = document.createElement("section");
    apiView.classList.add("apiSection");
    apiView.innerHTML = apiHtml;

    return apiView;
} 


