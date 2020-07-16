/*import { data2, anotherExample } from '../src/data.js';*/
import { data2, filterFunction } from '../src/data.js';
//import pokemon from '../src/data/pokemon/pokemon.js';
const mockData=[{
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
  ]}];

  const filtradoGrass=[{
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

describe('filterFunction es una función para filtrar por type', ()=>{

  it('is a function', ()=> {
    expect(typeof filterFunction).toBe('function');
  });

  it('devuelve un array',()=> {
    let resultado=filterFunction(mockData, "Grass");
    expect(resultado).toEqual(filtradoGrass);
  });

});

describe('data2 es una función', () => {
  it('is a function', () => {
    expect(typeof data2).toBe('function');
  });


  it('data2 retorna un object', () => {
    let returns= data2();
    expect(typeof returns).toBe('object');
  });

  it('Cada objeto de data2 debe tener la propiedad "num"', () => {
    let returns= data2();
    expect(returns[0]).toHaveProperty("num");
  });

  it('Cada objeto de data2 debe tener la propiedad "name"', () => {
    let returns= data2();
    expect(returns[0]).toHaveProperty("name");
  });
  
  it('Cada objeto de data2 debe tener la propiedad "type"', () => {
    let returns= data2();
    expect(returns[0]).toHaveProperty("type");
  });

  it('Cada objeto de data2 debe tener la propiedad "img"', () => {
    let returns= data2();
    expect(returns[0]).toHaveProperty("img");
  });

  it('data2 debe retornar un array con 151 objetos', () => {
    let returns= data2();
    expect(returns).toHaveLength(151);
  });

  


});

