//importando funciones

import { filtrarGenero } from './dataFunctions.js';
import { filtrarSubtitulos } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

// interaccion con el DOM
// Renderizar los elementos y agregarlos al cuerpo del documento
const rootElement = document.querySelector('#root');
// aqui renderizamos los item sacados del dataset con la funcion que creamos en view y lo pasamos a html
rootElement.appendChild(renderItems(data));

// aqui invocamos a las opciones de seleccion por genero
const selectGenre = document.querySelector("select[name=genero]");
selectGenre.addEventListener("change", (event) => {
  const generoFiltrado = event.target.value;
  console.log(generoFiltrado);
  const kdramasFiltrado = filtrarGenero(data, generoFiltrado)
  console.log(kdramasFiltrado);
  rootElement.innerHTML = "";
  rootElement.appendChild(renderItems(kdramasFiltrado));
})

// por subtitulos
const selectSubtitle = document.querySelector("select[name=subtitle]");
selectSubtitle.addEventListener("change", (event) => {
  const idiomaSeleccionado = event.target.value;
  //llamo a la funcion de filtrar Subtitulos 
  const kdramasFiltrados = filtrarSubtitulos(data, idiomaSeleccionado)
  rootElement.innerHTML = ""; // Limpiar el contenedor root
  rootElement.appendChild(renderItems(kdramasFiltrados));
})
// aqui invocamos a las opciones para ordenar de asc y desc
const order = document.querySelector("select[data-testid=select-sort]");
order.addEventListener("change", (event) => {
  console.log(event.target.value);
})
