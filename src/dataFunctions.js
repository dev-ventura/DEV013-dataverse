// Funcion para filtrar subtitulos
export const filtrarSubtitulos = (data, idioma) => {
  // Verificar que el idioma sea válido (coreano, inglés, español)
  if (idioma === "Coreano" || idioma === "Inglés" || idioma === "Español") {
    // Filtrar kdramas según el idioma de los subtítulos
    const kdramasFiltrados = data.filter(item => item.facts.totalSubtitulos === idioma);
    //console.log(kdramasFiltrados)
    return kdramasFiltrados;
  } else {
    // Si no es ninguno de esos 3 idiomas , mantener las mismas tarjetas sin cambios
    return data;
  }

  // Estas funciones son ejemplos, aquí puedes desarrollar tus propias funciones.

  export const filterData = () => {
    return 'example';
  };
  export const anotherExample = () => {
    return [];
  };
