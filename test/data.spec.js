/*import { data2, anotherExample } from '../src/data.js';*/
import { data2, filterFunction, sortAzAsc, sortZaDesc, sortNumAsc, sortNumDesc } from '../src/data.js';
//import pokemon from '../src/data/pokemon/pokemon.js';
const mockData = [{
  "id": 1,
  "name": "Bulbasaur",
  "type": [
    "Grass",
    "Poison"
  ]

}, {
  "id": 2,
  "name": "Ivysaur",
  "type": [
    "Grass",
    "Poison"
  ]

}, {
  "id": 3,
  "name": "Venusaur",
  "type": [
    "Grass",
    "Poison"
  ]
}, {
  "id": 4,
  "name": "Charmander",
  "type": [
    "Fire"
  ]
}, {
  "id": 5,
  "name": "Charmeleon",
  "type": [
    "Fire"
  ]
}];

const filtradoGrass = [{
  "id": 1,
  "name": "Bulbasaur",
  "type": [
    "Grass",
    "Poison"
  ]

}, {
  "id": 2,
  "name": "Ivysaur",
  "type": [
    "Grass",
    "Poison"
  ]

}, {
  "id": 3,
  "name": "Venusaur",
  "type": [
    "Grass",
    "Poison"
  ]
}];

describe('filterFunction es una función para filtrar por type', () => {

  it('is a function', () => {
    expect(typeof filterFunction).toBe('function');
  });

  it('devuelve un array', () => {
    let resultado = filterFunction(mockData, "Grass");
    expect(resultado).toEqual(filtradoGrass);
  });

});

describe('data2 es una función', () => {
  it('is a function', () => {
    expect(typeof data2).toBe('function');
  });


  it('data2 retorna un object', () => {
    let returns = data2();
    expect(typeof returns).toBe('object');
  });

  it('Cada objeto de data2 debe tener la propiedad "num"', () => {
    let returns = data2();
    expect(returns[0]).toHaveProperty("num");
  });

  it('Cada objeto de data2 debe tener la propiedad "name"', () => {
    let returns = data2();
    expect(returns[0]).toHaveProperty("name");
  });

  it('Cada objeto de data2 debe tener la propiedad "type"', () => {
    let returns = data2();
    expect(returns[0]).toHaveProperty("type");
  });

  it('Cada objeto de data2 debe tener la propiedad "img"', () => {
    let returns = data2();
    expect(returns[0]).toHaveProperty("img");
  });

  it('data2 debe retornar un array con 151 objetos', () => {
    let returns = data2();
    expect(returns).toHaveLength(151);
  });




});

describe('sortAzAsc es una funcion para ordenar alfabeticamente', () => {
  it('is a function', () => {
    expect(typeof sortAzAsc).toBe('function');
  });

  it('la funcion debe retornar en la posicion 0 Abra, en la posicion 150 Zubat', () => {
    let ordenar = sortAzAsc();
    expect(ordenar[0].name).toEqual('Abra');
    expect(ordenar[150].name).toEqual('Zubat');
  });

});


describe('sortZaDesc es una funcion para ordenar alfabeticamente', () => {
  it('is a function', () => {
    expect(typeof sortZaDesc).toBe('function');
  });

  it('la funcion debe retornar en la posicion 0 Zubat, en la posicion 150 Abra', () => {
    let ordenar = sortZaDesc();
    expect(ordenar[0].name).toEqual('Zubat');
    expect(ordenar[150].name).toEqual('Abra');
  });

});

describe('sortNumAsc es una funcion para ordenar numericamente', () => {
  it('is a function', () => {
    expect(typeof sortNumAsc).toBe('function');
  });

  it('la funcion debe retornar en la posicion 0 001, en la posicion 150 151', () => {
    let ordenar = sortNumAsc();
    expect(ordenar[0].num).toEqual('001');
    expect(ordenar[150].num).toEqual('151');
  });

});

describe('sortNumDesc es una funcion para ordenar numericamente', () => {
  it('is a function', () => {
    expect(typeof sortNumDesc).toBe('function');
  });

  it('la funcion debe retornar en la posicion 0 151, en la posicion 150 001', () => {
    let ordenar = sortNumDesc();
    expect(ordenar[0].num).toEqual('151');
    expect(ordenar[150].num).toEqual('001');
  });

});

