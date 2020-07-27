/*import { data2, anotherExample } from '../src/data.js';*/
import { data2, filterFunction, sortAzAsc, sortNumAsc, findData2, detailCardPokemon } from '../src/data.js';
//import pokemon from '../src/data/pokemon/pokemon.js';
const mockData = [{
  "id": 1,
  "num": "001",
  "name": "Bulbasaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "0.71 m",
  "weight": "6.9 kg",
  "candy": "Bulbasaur Candy",
  "candy_count": 25,
  "egg": "2 km",
  "spawn_chance": 0.69,
  "avg_spawns": 69,
  "spawn_time": "20:00",
  "multipliers": [1.58],
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "next_evolution": [{
    "num": "002",
    "name": "Ivysaur"
  }, {
    "num": "003",
    "name": "Venusaur"
  }]
}, {
  "id": 2,
  "num": "002",
  "name": "Ivysaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "0.99 m",
  "weight": "13.0 kg",
  "candy": "Bulbasaur Candy",
  "candy_count": 100,
  "egg": "Not in Eggs",
  "spawn_chance": 0.042,
  "avg_spawns": 4.2,
  "spawn_time": "07:00",
  "multipliers": [
    1.2,
    1.6
  ],
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "prev_evolution": [{
    "num": "001",
    "name": "Bulbasaur"
  }],
  "next_evolution": [{
    "num": "003",
    "name": "Venusaur"
  }]
}, {
  "id": 3,
  "num": "003",
  "name": "Venusaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "2.01 m",
  "weight": "100.0 kg",
  "candy": "Bulbasaur Candy",
  "egg": "Not in Eggs",
  "spawn_chance": 0.017,
  "avg_spawns": 1.7,
  "spawn_time": "11:30",
  "multipliers": null,
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "prev_evolution": [{
    "num": "001",
    "name": "Bulbasaur"
  }, {
    "num": "002",
    "name": "Ivysaur"
  }]
}, {
  "id": 4,
  "num": "004",
  "name": "Charmander",
  "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
  "type": [
    "Fire"
  ],
  "height": "0.61 m",
  "weight": "8.5 kg",
  "candy": "Charmander Candy",
  "candy_count": 25,
  "egg": "2 km",
  "spawn_chance": 0.253,
  "avg_spawns": 25.3,
  "spawn_time": "08:45",
  "multipliers": [1.65],
  "weaknesses": [
    "Water",
    "Ground",
    "Rock"
  ],
  "next_evolution": [{
    "num": "005",
    "name": "Charmeleon"
  }, {
    "num": "006",
    "name": "Charizard"
  }]
}, {
  "id": 5,
  "num": "005",
  "name": "Charmeleon",
  "img": "http://www.serebii.net/pokemongo/pokemon/005.png",
  "type": [
    "Fire"
  ],
  "height": "1.09 m",
  "weight": "19.0 kg",
  "candy": "Charmander Candy",
  "candy_count": 100,
  "egg": "Not in Eggs",
  "spawn_chance": 0.012,
  "avg_spawns": 1.2,
  "spawn_time": "19:00",
  "multipliers": [1.79],
  "weaknesses": [
    "Water",
    "Ground",
    "Rock"
  ],
  "prev_evolution": [{
    "num": "004",
    "name": "Charmander"
  }],
  "next_evolution": [{
    "num": "006",
    "name": "Charizard"
  }]
}, {
  "id": 6,
  "num": "006",
  "name": "Charizard",
  "img": "http://www.serebii.net/pokemongo/pokemon/006.png",
  "type": [
    "Fire",
    "Flying"
  ],
  "height": "1.70 m",
  "weight": "90.5 kg",
  "candy": "Charmander Candy",
  "egg": "Not in Eggs",
  "spawn_chance": 0.0031,
  "avg_spawns": 0.31,
  "spawn_time": "13:34",
  "multipliers": null,
  "weaknesses": [
    "Water",
    "Electric",
    "Rock"
  ],
  "prev_evolution": [{
    "num": "004",
    "name": "Charmander"
  }, {
    "num": "005",
    "name": "Charmeleon"
  }]
}, {
  "id": 7,
  "num": "007",
  "name": "Squirtle",
  "img": "http://www.serebii.net/pokemongo/pokemon/007.png",
  "type": [
    "Water"
  ],
  "height": "0.51 m",
  "weight": "9.0 kg",
  "candy": "Squirtle Candy",
  "candy_count": 25,
  "egg": "2 km",
  "spawn_chance": 0.58,
  "avg_spawns": 58,
  "spawn_time": "04:25",
  "multipliers": [2.1],
  "weaknesses": [
    "Electric",
    "Grass"
  ],
  "next_evolution": [{
    "num": "008",
    "name": "Wartortle"
  }, {
    "num": "009",
    "name": "Blastoise"
  }]
}, {
  "id": 8,
  "num": "008",
  "name": "Wartortle",
  "img": "http://www.serebii.net/pokemongo/pokemon/008.png",
  "type": [
    "Water"
  ],
  "height": "0.99 m",
  "weight": "22.5 kg",
  "candy": "Squirtle Candy",
  "candy_count": 100,
  "egg": "Not in Eggs",
  "spawn_chance": 0.034,
  "avg_spawns": 3.4,
  "spawn_time": "07:02",
  "multipliers": [1.4],
  "weaknesses": [
    "Electric",
    "Grass"
  ],
  "prev_evolution": [{
    "num": "007",
    "name": "Squirtle"
  }],
  "next_evolution": [{
    "num": "009",
    "name": "Blastoise"
  }]
}, {
  "id": 9,
  "num": "009",
  "name": "Blastoise",
  "img": "http://www.serebii.net/pokemongo/pokemon/009.png",
  "type": [
    "Water"
  ],
  "height": "1.60 m",
  "weight": "85.5 kg",
  "candy": "Squirtle Candy",
  "egg": "Not in Eggs",
  "spawn_chance": 0.0067,
  "avg_spawns": 0.67,
  "spawn_time": "00:06",
  "multipliers": null,
  "weaknesses": [
    "Electric",
    "Grass"
  ],
  "prev_evolution": [{
    "num": "007",
    "name": "Squirtle"
  }, {
    "num": "008",
    "name": "Wartortle"
  }]
}, {
  "id": 10,
  "num": "010",
  "name": "Caterpie",
  "img": "http://www.serebii.net/pokemongo/pokemon/010.png",
  "type": [
    "Bug"
  ],
  "height": "0.30 m",
  "weight": "2.9 kg",
  "candy": "Caterpie Candy",
  "candy_count": 12,
  "egg": "2 km",
  "spawn_chance": 3.032,
  "avg_spawns": 303.2,
  "spawn_time": "16:35",
  "multipliers": [1.05],
  "weaknesses": [
    "Fire",
    "Flying",
    "Rock"
  ],
  "next_evolution": [{
    "num": "011",
    "name": "Metapod"
  }, {
    "num": "012",
    "name": "Butterfree"
  }]
}];

const filtradoGrass = [{
  "id": 1,
  "num": "001",
  "name": "Bulbasaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/001.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "0.71 m",
  "weight": "6.9 kg",
  "candy": "Bulbasaur Candy",
  "candy_count": 25,
  "egg": "2 km",
  "spawn_chance": 0.69,
  "avg_spawns": 69,
  "spawn_time": "20:00",
  "multipliers": [1.58],
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "next_evolution": [{
    "num": "002",
    "name": "Ivysaur"
  }, {
    "num": "003",
    "name": "Venusaur"
  }]
}, {
  "id": 2,
  "num": "002",
  "name": "Ivysaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/002.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "0.99 m",
  "weight": "13.0 kg",
  "candy": "Bulbasaur Candy",
  "candy_count": 100,
  "egg": "Not in Eggs",
  "spawn_chance": 0.042,
  "avg_spawns": 4.2,
  "spawn_time": "07:00",
  "multipliers": [
    1.2,
    1.6
  ],
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "prev_evolution": [{
    "num": "001",
    "name": "Bulbasaur"
  }],
  "next_evolution": [{
    "num": "003",
    "name": "Venusaur"
  }]
}, {
  "id": 3,
  "num": "003",
  "name": "Venusaur",
  "img": "http://www.serebii.net/pokemongo/pokemon/003.png",
  "type": [
    "Grass",
    "Poison"
  ],
  "height": "2.01 m",
  "weight": "100.0 kg",
  "candy": "Bulbasaur Candy",
  "egg": "Not in Eggs",
  "spawn_chance": 0.017,
  "avg_spawns": 1.7,
  "spawn_time": "11:30",
  "multipliers": null,
  "weaknesses": [
    "Fire",
    "Ice",
    "Flying",
    "Psychic"
  ],
  "prev_evolution": [{
    "num": "001",
    "name": "Bulbasaur"
  }, {
    "num": "002",
    "name": "Ivysaur"
  }]
}];

const filteredRock=[{
  "id": 4,
  "num": "004",
  "name": "Charmander",
  "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
  "type": [
    "Fire"
  ],
  "height": "0.61 m",
  "weight": "8.5 kg",
  "candy": "Charmander Candy",
  "candy_count": 25,
  "egg": "2 km",
  "spawn_chance": 0.253,
  "avg_spawns": 25.3,
  "spawn_time": "08:45",
  "multipliers": [1.65],
  "weaknesses": [
    "Water",
    "Ground",
    "Rock"
  ],
  "next_evolution": [{
    "num": "005",
    "name": "Charmeleon"
  }, {
    "num": "006",
    "name": "Charizard"
  }]
}, {
  "id": 5,
  "num": "005",
  "name": "Charmeleon",
  "img": "http://www.serebii.net/pokemongo/pokemon/005.png",
  "type": [
    "Fire"
  ],
  "height": "1.09 m",
  "weight": "19.0 kg",
  "candy": "Charmander Candy",
  "candy_count": 100,
  "egg": "Not in Eggs",
  "spawn_chance": 0.012,
  "avg_spawns": 1.2,
  "spawn_time": "19:00",
  "multipliers": [1.79],
  "weaknesses": [
    "Water",
    "Ground",
    "Rock"
  ],
  "prev_evolution": [{
    "num": "004",
    "name": "Charmander"
  }],
  "next_evolution": [{
    "num": "006",
    "name": "Charizard"
  }]
}, {
  "id": 6,
  "num": "006",
  "name": "Charizard",
  "img": "http://www.serebii.net/pokemongo/pokemon/006.png",
  "type": [
    "Fire",
    "Flying"
  ],
  "height": "1.70 m",
  "weight": "90.5 kg",
  "candy": "Charmander Candy",
  "egg": "Not in Eggs",
  "spawn_chance": 0.0031,
  "avg_spawns": 0.31,
  "spawn_time": "13:34",
  "multipliers": null,
  "weaknesses": [
    "Water",
    "Electric",
    "Rock"
  ],
  "prev_evolution": [{
    "num": "004",
    "name": "Charmander"
  }, {
    "num": "005",
    "name": "Charmeleon"
  }]
},{
  "id": 10,
  "num": "010",
  "name": "Caterpie",
  "img": "http://www.serebii.net/pokemongo/pokemon/010.png",
  "type": [
    "Bug"
  ],
  "height": "0.30 m",
  "weight": "2.9 kg",
  "candy": "Caterpie Candy",
  "candy_count": 12,
  "egg": "2 km",
  "spawn_chance": 3.032,
  "avg_spawns": 303.2,
  "spawn_time": "16:35",
  "multipliers": [1.05],
  "weaknesses": [
    "Fire",
    "Flying",
    "Rock"
  ],
  "next_evolution": [{
    "num": "011",
    "name": "Metapod"
  }, {
    "num": "012",
    "name": "Butterfree"
  }]
}];

const charmander=[{
  "id": 4,
  "num": "004",
  "name": "Charmander",
  "img": "http://www.serebii.net/pokemongo/pokemon/004.png",
  "type": [
    "Fire"
  ],
  "height": "0.61 m",
  "weight": "8.5 kg",
  "candy": "Charmander Candy",
  "candy_count": 25,
  "egg": "2 km",
  "spawn_chance": 0.253,
  "avg_spawns": 25.3,
  "spawn_time": "08:45",
  "multipliers": [1.65],
  "weaknesses": [
    "Water",
    "Ground",
    "Rock"
  ],
  "next_evolution": [{
    "num": "005",
    "name": "Charmeleon"
  }, {
    "num": "006",
    "name": "Charizard"
  }]
}];

const num009=[{
  "id": 9,
  "num": "009",
  "name": "Blastoise",
  "img": "http://www.serebii.net/pokemongo/pokemon/009.png",
  "type": [
    "Water"
  ],
  "height": "1.60 m",
  "weight": "85.5 kg",
  "candy": "Squirtle Candy",
  "egg": "Not in Eggs",
  "spawn_chance": 0.0067,
  "avg_spawns": 0.67,
  "spawn_time": "00:06",
  "multipliers": null,
  "weaknesses": [
    "Electric",
    "Grass"
  ],
  "prev_evolution": [{
    "num": "007",
    "name": "Squirtle"
  }, {
    "num": "008",
    "name": "Wartortle"
  }]
}];

describe('filterFunction es una función', () => {

  it('is a function', () => {
    expect(typeof filterFunction).toBe('function');
  });

  it('Filtra los de tipo Grass', () => {
    let resultado = filterFunction(mockData, "type" ,"Grass");
    expect(resultado).toEqual(filtradoGrass);
  });

  it('Filtra lo que tienen en debilidades Rock', () => {
    let resultado = filterFunction(mockData, "weaknesses" ,"Rock");
    expect(resultado).toEqual(filteredRock);
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
    let ordenar = sortAzAsc(data2(),"aZ");
    expect(ordenar[0].name).toEqual('Abra');
    expect(ordenar[150].name).toEqual('Zubat');
  });

  it('la funcion debe retornar en la posicion 0 Zubat, en la posicion 150 Abra', () => {
    let ordenar = sortAzAsc(data2(),"zA");
    expect(ordenar[0].name).toEqual('Zubat');
    expect(ordenar[150].name).toEqual('Abra');
  });

  it ('la funcion debe retornar en la posicion 0 Blastoise, en la posicion 9 Wartortle', () =>{
    let ordenar = sortAzAsc(mockData,"aZ");
    expect(ordenar[0].name).toEqual('Blastoise');
    expect(ordenar[9].name).toEqual('Wartortle');
  });

  it ('la funcion debe retornar en la posicion 0 Wartortle, en la posicion 9 Blastoise', () =>{
    let ordenar = sortAzAsc(mockData,"aZ");
    expect(ordenar[0].name).toEqual('Blastoise');
    expect(ordenar[9].name).toEqual('Wartortle');
  });

});


describe('sortNumAsc es una funcion para ordenar numericamente', () => {
  it('is a function', () => {
    expect(typeof sortNumAsc).toBe('function');
  });

  it('la funcion debe retornar en la posicion 0 001, en la posicion 150 151', () => {
    let ordenar = sortNumAsc(data2(),"1,2");
    expect(ordenar[0].num).toEqual('001');
    expect(ordenar[150].num).toEqual('151');
  });

  it('la funcion debe retornar en la posicion 0 151, en la posicion 150 001', () => {
    let ordenar = sortNumAsc(data2(),"2,1");
    expect(ordenar[0].num).toEqual('151');
    expect(ordenar[150].num).toEqual('001');
  });

  it ('la funcion debe retornar en la posicion 0 001, en la posicion 9 010', () => {
    let ordenar = sortNumAsc(mockData,"1,2");
    expect(ordenar[0].num).toEqual('001');
    expect(ordenar[9].num).toEqual('010');
  });

  it ('la funcion debe retornar en la posicion 0 010, en la posicion 9 001', () => {
    let ordenar = sortNumAsc(mockData,"2,1");
    expect(ordenar[0].num).toEqual('010');
    expect(ordenar[9].num).toEqual('001');
  });

});


describe('findData2 es una función', () => {

  it('findData2 es una función', () => {
    expect(typeof findData2).toBe('function');
  });

  it('findData2 puede buscar por nombre', () => {
    let resultadoNombre = findData2(mockData, "Charmander");
    expect(resultadoNombre).toEqual(charmander);
  });

  it('findData2 puede buscar por número', () => {
    let resultadoNum = findData2(mockData, "009");
    expect(resultadoNum).toEqual(num009);
  });

});


describe('detailCardPokemon es una función', () => {
  it('is a function', () => {
    expect(typeof detailCardPokemon).toBe('function');
  });

  it('detailCardPokemon retorna un object', () => {
    let returns = detailCardPokemon("001");
    expect(typeof returns).toBe('object');
  });

  it('el objeto de detailCardPokemon debe tener la propiedad "num"', () => {
    let returns = detailCardPokemon("001");
    expect(returns).toHaveProperty("num");
  });

  it('el objeto de detailCardPokemon debe tener la propiedad "name"', () => {
    let returns = detailCardPokemon("001");
    expect(returns).toHaveProperty("name");
  });

  it('el objeto de detailCardPokemon debe tener la propiedad "type"', () => {
    let returns = detailCardPokemon("001");
    expect(returns).toHaveProperty("type");
  });

  it('el objeto de detailCardPokemon debe tener la propiedad "img"', () => {
    let returns = detailCardPokemon("001");
    expect(returns).toHaveProperty("img");
  });

  it('el objeto de detailCardPokemon debe tener la propiedad "height"', () => {
    let returns = detailCardPokemon("001");
    expect(returns).toHaveProperty("height");
  });
  it('el objeto de detailCardPokemon debe tener la propiedad "weight"', () => {
    let returns = detailCardPokemon("001");
    expect(returns).toHaveProperty("weight");
  });
  it('el objeto de detailCardPokemon debe tener la propiedad "weaknesses"', () => {
    let returns = detailCardPokemon("001");
    expect(returns).toHaveProperty("weaknesses");
  });
  it('el objeto de detailCardPokemon debe tener la propiedad "evolutions"', () => {
    let returns = detailCardPokemon("001");
    expect(returns).toHaveProperty("evolutions");
  });

});
