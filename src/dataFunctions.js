//Funcion para filtrar la data 
export const filterData = (data, filterBy, value) => {
  //Filtrar kdramas según el idioma de los subtítulos
  const kdramasFiltrados = data.filter(item => item.facts[filterBy] === value);
  //console.log(kdramasFiltrados)
  return kdramasFiltrados;
  // cambios 
};
// Funcion para ordenar de manera ascendente y descendente
export const sortData = (data, sortBy, sortOrder) => {
  data.sort((a, b) => {
    // usamos el metodo toLowerCase para convertir el nombre del Kdrama en minusculas
    const valorA = a[sortBy].toLowerCase();
    const valorB = b[sortBy].toLowerCase();

    if (sortOrder === "asc") {
      //console.log(valorA.localeCompare(valorB));
      return valorA.localeCompare(valorB);

    } else {
      //console.log(valorB.localeCompare(valorA));
      return valorB.localeCompare(valorA);
    }
  })
  return data
};
// Funcion para mostrar estadistica de capitulos 
export const computeStats = (data) => {
  const sumEpisodios = data.reduce((accumulator, currentValue) => accumulator + currentValue.facts.cantidadEpisodios, 0);
  const sumTotalEpisodios = data.length;

  const stats = Math.round( sumEpisodios/ sumTotalEpisodios)  ;
  return `La cantidad de episodios promedio es ${stats}`;
};