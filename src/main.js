//importando funciones
import { filterData } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';

// interaccion con el DOM
// Renderizar los elementos y agregarlos al cuerpo del documento
const rootElement = document.querySelector('#root');
// en esta variable estan los valores de toda la data 
let totalData = [...data]

// aqui renderizamos los item sacados del dataset con la funcion que creamos en view y lo pasamos a html
rootElement.appendChild(renderItems(totalData));
// aqui invocamos a las opciones de seleccion por genero DOM
const selectGenre = document.querySelector("select[name=genero]");
// evento change 
selectGenre.addEventListener("change", (event) => {
  const generoSeleccionado = event.target.value;
  //llamo a la funcion de filtrar data
  const generoFiltrado = filterData(data, "totalGenero", generoSeleccionado)
  totalData = [...generoFiltrado]
  rootElement.innerHTML = "";
  rootElement.appendChild(renderItems(totalData));
})
// aqui invocamos a las opciones de seleccion por subtitulos DOM
const selectSubtitle = document.querySelector("select[name=subtitle]");
selectSubtitle.addEventListener("change", (event) => {
  const idiomaSeleccionado = event.target.value;
  //llamo a la funcion de filtrar data
  const kdramasFiltrados = filterData(totalData, "totalSubtitulos", idiomaSeleccionado)
  totalData = [...kdramasFiltrados]
  rootElement.innerHTML = ""; // Limpiar el contenedor root
  rootElement.appendChild(renderItems(totalData));
})



// aqui invocamos a las opciones para ordenar de asc y desc
// const order = document.querySelector("select[data-testid=select-sort]");
//order.addEventListener("change", (event) => {
//console.log(event.target.value);
//})
