export const Home = (data) => {
  console.log('Data recibida', data);


  let elemento = "";
  data.forEach((animal) => {
      console.log('Verificando animales', animal);
    elemento += `
    
     <li itemscope itemtype="animal" class="box">

     <dl>
     <h2 class="id">${animal.name}</h2>
     <img class="imgTarjetas" src="${animal.imageUrl}" alt="${animal.name}"/>
     <dt>Nombre:</dt>
     <dd itemprop ='name' class="parrafoBox">${animal.name}</dd>
     <dt>Descripción:</dt> 
     <dd itemprop ='' class="descripcion">${animal.shortDescription}</dd>
     <dt>Peso en Kilos:</dt>
     <dd itemprop ='' class="parrafoBox">${animal.facts.pesoEnKilos}</dd>
     <dt>Años de Vida:</dt>
     <dd itemprop ='' class="parrafoBox">${animal.facts.anosDeVida}</dd>
     <dt>Habitad:</dt>
     <dd itemprop ='' class="parrafoBox">${animal.facts.tipoHabitad}</dd>
     <dt>Dieta:</dt>
     <dd itemprop ='' class="parrafoBox">${animal.facts.tipoDieta}</dd>
     </dl>
     </li>
    
     
   `;
    //.join("");

    //console.log(data)

    
  });
  console.log("Aqui el elemento",elemento);
  return `<ul class="lista">${elemento}</ul>`;
  
};
