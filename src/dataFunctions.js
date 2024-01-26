// Funcion para filtrar subtitulos
export const filtrarSubtitulos = (data, idioma) => {
  // Verificar que el idioma sea válido (coreano, inglés, español)
  if (idioma === "Coreano" || idioma === "Inglés" || idioma === "Español") {
    // Filtrar kdramas según el idioma de los subtítulos
    const kdramasFiltrados = data.filter(it => item.facts.totalSubtitulos === idioma);
    console.log(kdramasFiltrados)
    return kdramasFiltrados;
  } else {
    // Si no es ninguno de esos 3 idiomas , mantener las mismas tarjetas sin cambios
    return data;
  }
}

export const filtrarGenero = (data, genero) => {
  // verificando que el genero sea valido (romance, drama, comedia, fantasia, thriller, accion)
  if (genero === "Romance" || genero === "Drama" || genero === "Comedia" || genero === "Fantasía" || genero === "Thriller" || genero === "Accion") {
    // filtrando los kdramas por el genero
    const generoFiltrado = data.filter(item => {
      item.facts.totalGenero === genero;
    });
    return generoFiltrado;
  } else {
    // en caso de que no exista ese filtro muestra todos los kdramas
    return data;
  }
}
