import { sortData } from '../src/dataFunctions.js';
import { data as fakeData } from './data.js';


// test unitario para la funcion ordenar 
describe('sortData function', () => {
  //este es el orden real que deberia tener el ordenado ascendente con sortData1
  const sortData1 = [fakeData[0], fakeData[3], fakeData[1], fakeData[4], fakeData[2], fakeData[5]];
  it('retorna datos ordenados ascendente', () => {
    const resultado = sortData(fakeData, 'name', 'asc');
    expect(resultado).toEqual(sortData1);
  });
  //este es el orden real que deberia tener el ordenado descendente con sortData2
  const sortData2 = [fakeData[5], fakeData[2], fakeData[4], fakeData[1], fakeData[3], fakeData[0]];
  it('returna datos ordenados descendente', () => {
    const resultado = sortData(fakeData, 'name', 'desc');
    expect(resultado).toEqual(sortData2);
  });
});
