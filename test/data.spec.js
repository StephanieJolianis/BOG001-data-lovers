/*import { data2, anotherExample } from '../src/data.js';*/
import { data2 } from '../src/data.js';
//import pokemon from '../src/data/pokemon/pokemon.js';

describe('data2 es una función', () => {
  it('is a function', () => {
    expect(typeof data2).toBe('function');
  });


  it('data2 retorna un object', () => {
    let returns= data2();
    expect(typeof returns).toBe('object');
  });


  it('data2 valida propiedades de object', () => {
    let returns= data2();
    expect(returns[0]).toHaveProperty("num");
  });

});

// describe('anotherExample', () => {
//   it('is a function', () => {
//     expect(typeof anotherExample).toBe('function');
//   });

//   it.skip('returns `anotherExample`', () => {
//     expect(anotherExample()).toBe('OMG');
//   });
// });
// */
