//import { example } from './dataFunctions.js';
import { renderItems } from './view.js';

import data from './data/dataset.js';
// interaccion con el DOM
const items = document.getElementById('root');

items.appendChild(renderItems(data))




// console.log(example, renderItems(data), data);