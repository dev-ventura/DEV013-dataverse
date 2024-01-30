//importando funciones 
import { filterData, sortData, computeStats } from './dataFunctions.js';
import { renderItems } from './view.js';
import data from './data/dataset.js';
// en esta variable estan los valores de toda la data 
let totalData = [...data]

//renderizar la data 
const rootElement = document.querySelector('#root');
// aqui renderizamos los item sacados del dataset con la funcion que creamos en view y lo pasamos a html
rootElement.appendChild(renderItems(data));

// manipulacion del DOM
const selectGenre = document.querySelector("select[name=genero]");
//const selectSubtitle = document.querySelector("select[name=subtitle]");
const order = document.querySelector("select[name=ordenar]");
const estadistica = document.querySelector("select[name=estadisticas]");
const limpiarFiltros = document.querySelector("button[name=button-clear]")


// filtrar por genero
selectGenre.addEventListener("change", (event) => {
  // creamos la variable generoSeleccionado que contiene el valor de los generos
  const generoSeleccionado = event.target.value;
  //llamo a la funcion de filtrar data
  const generoFiltrado = filterData(data, "totalGenero", generoSeleccionado)
  // aqui se almacena los generos filtrados en totalData 
  totalData = [...generoFiltrado]
  //console.log(totalData);
  rootElement.innerHTML = "";
  rootElement.appendChild(renderItems(totalData));
})

// ordenar de manera ascedente y descendente
order.addEventListener("change", (event) => {
  // creamos la variable ordenSeleccionado que contiene el valor al hacer click (A-Z) (Z-A)
  console.log(totalData);
  const ordenSeleccionado = event.target.value;
  if (ordenSeleccionado === "asc") {
    // Ordenar por nombre de manera ascendente
    const datosOrdenadosAsc = sortData(totalData, "name", "asc");
    totalData = [...datosOrdenadosAsc]
    //console.log(totalData);
    rootElement.innerHTML = "";
    rootElement.appendChild(renderItems(totalData));
  } else {
    // Ordenar por nombre de manera descendente
    const datosOrdenadosDesc = sortData(totalData, "name", "desc");
    totalData = [...datosOrdenadosDesc]
    //console.log(totalData);
    rootElement.innerHTML = "";
    rootElement.appendChild(renderItems(totalData));
  }
});

//Aqui vamos a seleccionar para mostrar estadistica(prueba y error)
estadistica.addEventListener("change", (event) => {
  const estadisticaSeleccionada = event.target.value;
  console.log(estadisticaSeleccionada);
  const stats1 = computeStats(totalData)
  //return (stats1);
  console.log(stats1);
});

// aqui limpiamos todos los filtros
limpiarFiltros.addEventListener("click", function limpiar() {
  rootElement.innerHTML = "";
  rootElement.appendChild(renderItems(data));
});

// filtrar por subtitulo (opcional)
// selectSubtitle.addEventListener("change", (event) => {
//   //creamos la variable idiomaSeleccionado que contiene el valor de los subtitulos(idioma)
//   const idiomaSeleccionado = event.target.value;
//   //llamo a la funcion de filtrar data
//   const kdramasFiltrados = filterData(totalData, "totalSubtitulos", idiomaSeleccionado)
//   //totalData = [...kdramasFiltrados]
//   // Limpiar el contenedor root
//   rootElement.innerHTML = "";
//   //aqui seria appenChild de los kdramasFiltrados 
//   rootElement.appendChild(renderItems(kdramasFiltrados));

// });