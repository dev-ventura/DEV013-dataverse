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
      const totalAsc = valorA.localeCompare(valorB);
      return totalAsc;

    } else {
      //console.log(valorB.localeCompare(valorA));
      const totalDesc = valorB.localeCompare(valorA);
      return totalDesc;
    }
  })
  return data;
};
// Funcion para mostrar estadistica de cantidad de k-dramas por capitulos 
export const computeStats = (data) => {
  const estadisticas = data.reduce((acumulador, item) => {
    // sacar el porcentaje
    if (item.facts.cantidadEpisodios === 16) {
      acumulador['16 Episodios'] += 1;
    } else if (item.facts.cantidadEpisodios === 20) {
      acumulador['20 Episodios'] += 1;
    } else if (item.facts.cantidadEpisodios === 21) {
      acumulador['21 Episodios'] += 1;
    } else if (item.facts.cantidadEpisodios === 24) {
      acumulador['24 Episodios'] += 1;
    } else if (item.facts.cantidadEpisodios === 32) {
      acumulador['32 Episodios'] += 1;
    }
    // retorna el acumular mostrando el total en cada propiedad de episodios
    return acumulador;
  }, {
    '16 Episodios': 0,
    '20 Episodios': 0,
    '21 Episodios': 0,
    '24 Episodios': 0,
    '32 Episodios': 0,
  });
  return estadisticas;
};
