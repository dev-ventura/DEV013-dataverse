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
const order = document.querySelector("select[name=ordenar]");
const limpiarFiltros = document.querySelector("button[name=button-clear]");
// para estadistica
const botonEstadistica = document.querySelector("#Estadisticas1"); //boton abrir estadisticas
const modal = document.querySelector("#modal");
const closeModal = document.querySelector("#close"); //para cerrar la pantalla emergente

//para el boton estadisticas
botonEstadistica.addEventListener('click', function (event) {
  modal.style.display = "flex"; //se muestra la pantalla emergente
  // aqui alamacenamos la cantidad de kdramas, los resultados y el contenido de texto 
  const totalKdramas = data.length;
  const resultados = computeStats(data);
  const pageText = document.getElementById("page");
  if (event.currentTarget === botonEstadistica) {
    //mostrar los porcentajes en el cuadro de dialogo 
    pageText.innerHTML = "";
    pageText.innerHTML += "El " + (resultados["16 Episodios"] / totalKdramas * 100).toFixed(2) + "% de k-dramas tiene 16 episodios" + "<br>";
    pageText.innerHTML += "El " + (resultados["20 Episodios"] / totalKdramas * 100).toFixed(2) + "% de k-dramas tiene 20 episodios" + "<br>";
    pageText.innerHTML += "El " + (resultados["21 Episodios"] / totalKdramas * 100).toFixed(2) + " % de k-dramas tiene 21 episodios" + "<br>";
    pageText.innerHTML += "El " + (resultados["24 Episodios"] / totalKdramas * 100).toFixed(2) + " % de k-dramas tiene 24 episodios" + "<br>";
    pageText.innerHTML += "El " + (resultados["32 Episodios"] / totalKdramas * 100).toFixed(2) + " % de k-dramas tiene 32 episodios" + "<br>";
    //pageText.log(resultados);
  }
});

// para cerrar la ventana emergente 
closeModal.addEventListener("click", () =>{
  modal.style.display = "none";
});

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
  //console.log(totalData);
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

// aqui limpiamos todos los filtros
limpiarFiltros.addEventListener("click", function limpiar() {
  rootElement.innerHTML = "";
  rootElement.appendChild(renderItems(data));
});

//prueba
