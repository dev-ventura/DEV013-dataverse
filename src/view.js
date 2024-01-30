export const renderItems = (data) => {
  // Creamos un contenedor para los elementos renderizados
  const container = document.createElement('ul');
  // Iteraremos sobre cada objeto en el dataset
  data.forEach(item => {
    // Creamos un objeto contenedor para cada item (tarjeta)
    const itemContainer = document.createElement('li');
    const imageUrl = document.createElement('img');
    const nameKdrama = document.createElement('h3');
    const descriptionTotal = document.createElement('p');

    itemContainer.setAttribute('itemscope', '');
    itemContainer.setAttribute('itemtype', 'kdramas');
    itemContainer.setAttribute('class', 'lista');
    imageUrl.src = item.imageUrl;
    nameKdrama.setAttribute('itemprop', 'name');
    descriptionTotal.setAttribute('itemprop', 'descripcionTotal');
    nameKdrama.innerHTML = item.name;
    descriptionTotal.innerHTML = `${item.facts.cantidadEpisodios} Ep. | ${item.facts.totalGenero} | Sub. ${item.facts.totalSubtitulos}`;
    itemContainer.append(imageUrl, nameKdrama, descriptionTotal);
    itemContainer.append(imageUrl, descriptionTotal, nameKdrama);
    container.appendChild(itemContainer);
  });
  // Devolver el contenedor principal con todos los elementos renderizados
  return container;
};



