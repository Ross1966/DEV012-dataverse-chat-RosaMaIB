export const Filtros = () =>{
    const filtroView = `
    
        <button class="abrir-menu" id="abrir-menu"><i class="bi bi-list"></i></button>
        
          <button class="cerrar-menu" id="cerrar-menu"><i class="bi bi-x"></i></button>
          <label>Ordenar de:</label>
          <select name="name" data-testid="select-sort">
            <option value="" disabled selected>--Elige una Opción--</option>
            <option value="asc">A - Z</option>
            
            <option value="desc">Z - A</option>
          </select>

          <label>Tipo de Dieta:</label>
          <select name="dieta" data-testid="select-filter">
            <option value="" disabled selected>--Elige una Opción--</option>
            <option value="Omnívora">Omnivoros</option>
            <option value="Insectívora">Insectivoros</option>
            <option value="Frugívora">Frugívoros</option>
            <option value="Carnívoro">Carnívoros</option>
            <option value="Herbívoro">Hervívoros</option>
          </select>


          <label>Habitad:</label> 
          <select name="habitad">
            <option value="" disabled selected>--Elige una Opción--</option>
            <option value="Bosque">Bosque</option>
            <option value="Granja">Granja</option>
            <option value="Campo">Campo</option>
            <option value="Hogar">Hogar</option>
            <option value="Cueva">Cueva</option>
            <option value="Selva">Selva</option>
            <option value="Jardín">Jardín</option>
            <option value="Sabana Africana">Sabana Africana</option>
            <option value="Montaña">Montaña</option>
            <option value="Desierto">Desierto</option>
          </select>
        
        
          <button class="boton" data-testid="button-clear">Limpiar</button><br><br>
        
          <p id="calcular"><span>Promedio de peso:</span><br>Animales carnívoros</p>

          <p id="calcularHabitad"><span>Porcentaje total Habitad:</span><br>Selva</p>
    `
    const crearDivView = document.createElement("div");
    crearDivView.classList.add("contenedor1")
    crearDivView.innerHTML =  filtroView;

    return crearDivView;
}