//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';
// interaccion con el DOM

//console.log(example, renderItems(data), data);
// Renderizar los elementos y agregarlos al cuerpo del documento
const rootElement = document.querySelector('#root');
// aqui renderizamos los item sacados del dataset con la funcion que creamos en view y lo pasamos a html
rootElement.appendChild(renderItems(data));
// por subtitulos
const selectSubtitle = document.querySelector("select[name=Subtitle]");
selectSubtitle.addEventListener("change", (event) => {
    console.log(event.target.value);
})



