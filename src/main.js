//importando funciones
import { filterData, sortData } from './dataFunctions.js';
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
  console.log(totalData);
  rootElement.innerHTML = "";
  rootElement.appendChild(renderItems(totalData));
})
// aqui invocamos a las opciones de seleccion por subtitulos DOM
const selectSubtitle = document.querySelector("select[name=subtitle]");
selectSubtitle.addEventListener("change", (event) => {
  const idiomaSeleccionado = event.target.value;
  //llamo a la funcion de filtrar data
  const kdramasFiltrados = filterData(totalData, "totalSubtitulos", idiomaSeleccionado)
  rootElement.innerHTML = ""; // Limpiar el contenedor root
  //aqui seria appenChild de los kdramasFiltrados ya no de totalData
  rootElement.appendChild(renderItems(kdramasFiltrados));
})
// aqui invocamos a las opciones para ordenar de asc y desc "DOM"
const order = document.querySelector("select[name=ordenar]");
order.addEventListener("change", (event) => {
  // creamos la variable ordenSeleccionado que contiene el valor al hacer click (A-Z) (Z-A)
  const ordenSeleccionado = event.target.value;
  // si selecciona asc que se ordene ascendente
  //  de lo contrario que ordene descendente
  if (ordenSeleccionado === "asc") {
    // Ordenar por nombre de manera ascendente
    const datosOrdenadosAsc = sortData(totalData, "name", "asc");
    totalData = [...datosOrdenadosAsc]
    console.log(datosOrdenadosAsc);
    rootElement.innerHTML = "";
    rootElement.appendChild(renderItems(datosOrdenadosAsc));
  } else {
    // Ordenar por nombre de manera descendente
    const datosOrdenadosDesc = sortData(totalData, "name", "desc");
    totalData = [...datosOrdenadosDesc]
    console.log(datosOrdenadosDesc);
    rootElement.innerHTML = "";
    rootElement.appendChild(renderItems(datosOrdenadosDesc));
  }
});
