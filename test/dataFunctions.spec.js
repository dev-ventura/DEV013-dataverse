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
// test unitario para la funcion filtrar
describe('filterData por Genero de Prueba ', () => {
  const filter1 = [fakeData[0]];
  it('Deberia filtrar por genero Romance', () => {
    const result = filterData(fakeData, 'totalGenero', 'Romance');
    expect(result).toStrictEqual(filter1);
  });
  const filter2 = [fakeData[1]];
  it('Deberia filtrar por genero Drama', () => {
    const result = filterData(fakeData, 'totalGenero', 'Drama');
    expect(result).toStrictEqual(filter2);
  });
  const filter3 = [fakeData[2]];
  it('Deberia filtrar por genero Comedia', () => {
    const result = filterData(fakeData, 'totalGenero', 'Comedia');
    expect(result).toStrictEqual(filter3);
  });
  const filter4 = [fakeData[3]];
  it('Deberia filtrar por genero Fantasía', () => {
    const result = filterData(fakeData, 'totalGenero', 'Fantasía');
    expect(result).toStrictEqual(filter4);
  });
  const filter5 = [fakeData[4]];
  it('Deberia filtrar por genero Thriller', () => {
    const result = filterData(fakeData, 'totalGenero', 'Thriller');
    expect(result).toStrictEqual(filter5);
  });
  const filter6 = [fakeData[5]];
  it('Deberia filtrar por genero Acción', () => {
    const result = filterData(fakeData, 'totalGenero', 'Acción');
    expect(result).toStrictEqual(filter6);
  });
});
