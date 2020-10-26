const menu = {
  seletor: '.principal'
}

console.log(menu.seletor);

({clientX, clientY}) => console.log(clientX, clientY);
  
document.addEventListener('click', ({clientX, clientY}) => console.log(clientX, clientY))


const frutas =['banana', 'uva'];
const [frutas1] = frutas;

console.log(frutas1);

const usequadrado = [4, function(lado){return lado**2}]

const [valor, perimetro] = usequadrado;

console.log(perimetro(2) );

function showList(empresa, ...clients) {
  clients.forEach((client) => {
    console.log(client, empresa);
  });
}

showList('Google', 'André', 'pole', 'celio', 1);