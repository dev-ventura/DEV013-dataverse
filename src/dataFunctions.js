//Funcion para filtrar la data 
export const filterData = (data, filterBy, value) => {
  //Filtrar kdramas según el idioma de los subtítulos
  const kdramasFiltrados = data.filter(item => item.facts[filterBy] === value);
  //console.log(kdramasFiltrados)
  return kdramasFiltrados;
  // cambios 
}


// Funcion para ordenar de manera descendente
