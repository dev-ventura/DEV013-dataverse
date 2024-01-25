export const renderItems = (data) => {
  // Aquí comienza tu código y puedes retornar lo que tu necesites
  // iterar en el arreglo usando forEach
  // por cada elemento se debe crear un li
  // cada li debe tener una estructura(con datos seleccionados)
  // cada li se debe agregar a la ul
  // agregar el ul a div 'root'
  
  const ul = document.createElement('ul');
  data.forEach(element => {
    const li = document.createElement('li');
    li.setAttribute("itemscope", "")
    li.setAttribute("itemtype", "http://schema.org/Person")
    li.innerHTML = `
    <dl>
    <img src=${element.imageUrl} alt=${element.name}/>
    <dd itemprop="episodiosGeneros">${element.facts.cantidadEpisodios} episodios | ${element.facts.totalGenero}</dd>
    <dd itemprop="name">${element.name}</dd>
    </dl>`
    ul.appendChild(li)
  });
  return ul
};