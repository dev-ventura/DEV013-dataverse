export const renderItems = (data) => {
  // Creamos un contenedor para los elementos renderizados
  const container = document.createElement('ul');
  // Iteraremos sobre cada objeto en el dataset
  data.forEach(item => {
    // Creamos un objeto contenedor para cada item (tarjeta)
    const itemContainer = document.createElement('li');
    const imageUrl = document.createElement('img');
    const nameKdrama = document.createElement('dt');
    //const descriptionTotal = document.createElement('p');
    const cantidadEpisodios = document.createElement('dt');
    const totalGenero = document.createElement('dt');
    const totalSubtitulos = document.createElement('dt')


    itemContainer.setAttribute('itemscope', '');
    itemContainer.setAttribute('itemprop','ordenar');
    itemContainer.setAttribute('itemtype', 'kdramas');
    itemContainer.setAttribute('class', 'lista');
    imageUrl.src = item.imageUrl;
    nameKdrama.setAttribute('itemprop', 'name');
    //descriptionTotal.setAttribute('itemprop', 'descripcionTotal');
    cantidadEpisodios.setAttribute('itemprop', 'cantidadEpisodios');
    totalGenero.setAttribute('itemprop', 'totalGenero');
    totalSubtitulos.setAttribute('itemprop', 'totalSubtitulos');
    nameKdrama.innerHTML = item.name;
    cantidadEpisodios.innerHTML = `${item.facts.cantidadEpisodios} Ep.`;
    totalGenero.innerHTML = item.facts.totalGenero;
    totalSubtitulos.innerHTML = `Sub. ${item.facts.totalSubtitulos}`;
    //descriptionTotal.innerHTML = `${item.facts.cantidadEpisodios} Ep. | ${item.facts.totalGenero} | Sub. ${item.facts.totalSubtitulos}`;
    itemContainer.append(imageUrl, nameKdrama, cantidadEpisodios, totalGenero, totalSubtitulos);
    container.appendChild(itemContainer);
  });
  // Devolver el contenedor principal con todos los elementos renderizados
  return container;
};



