export const Footer = () => {
  const contenidoFooter = `
    <p class= "classFooter">Autoras: Rosa María & Rossy</p>
    `;


  const creaFooter = document.createElement("footer");
  creaFooter.innerHTML = contenidoFooter;
  return creaFooter;

};

