/*import { data2, anotherExample } from '../src/data.js';*/
import { data2 } from '../src/data.js';
import pokemon from '../src/data/pokemon/pokemon.js';

describe('data2 es una función', () => {
  it('is a function', () => {
    expect(typeof data2).toBe('function');
  });


  it('data2() retorna un array', () => {
    expect(data2(pokemon)).toBe('object');
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
