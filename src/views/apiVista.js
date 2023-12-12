import { navigateTo } from "../router.js";

export const vistaApi = () =>{
    const apiHtml = `
    
    <button id="home2">Home</button>
      
        <div class="cajaApi">
            <label for="">Ingresa aquí tu número ApiKey:</label>
            <br>
            <input id="entrada" type="password" class="inputApi"  placeholder="API KEY"></input>
            <br>
            <button id="ingresar" class="botonApi">Entrar</button>
            <br>
            <img class="koala" src="../img/koala.png" alt="koala">
            
        </div>
    `

    

    const apiView = document.createElement("section");
    apiView.classList.add("apiSection");
    apiView.innerHTML = apiHtml;

    
     //BOTON HOME

     const home2 = apiView.querySelector("#home2");
     home2.addEventListener("click", function() {
     navigateTo('/', 'props')
 })




    
    //FUNCION PARA CHECAR LA CONTRASEÑA 
    
    const ingresar = apiView.querySelector('#ingresar')
    
    //const correcta = "Hola20"

        ingresar.addEventListener("click", function (){

         const entrada = apiView.querySelector('#entrada').value;
         
         const password = localStorage.setItem("Api_Ingresada", entrada)

          
          
          console.log(entrada)
          console.log(password)
         
         
          



        })


      

    return apiView;
    
} 




