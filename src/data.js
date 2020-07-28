import data from './data/pokemon/pokemon.js';


// data2 function definition ------------------------------------------------
export const data2 = () => {
  let myArray = [];
  for (let prueba1 of data.pokemon){
    let firstObject = {
      num: prueba1.num, 
      name: prueba1.name,
      type: prueba1.type,
      img: prueba1.img,
      weaknesses:prueba1.weaknesses,
      spawnTime: prueba1.spawn_time,
      eggDistance: prueba1.egg,
      candyCount: prueba1.candy_count,
    };
    myArray.push(firstObject);
    }
  return myArray;
};

//-------------------------------------------------------------------------




export const findData = (pokemonFind) => {
   
  let detailPokemon = data.pokemon.find (onePokemon => 
    onePokemon.num === pokemonFind);

    return detailPokemon;
  }


export const findData2 = (arrayData, toFind) => {
  let detailPokemon = arrayData.filter (onePokemon => 
    (onePokemon.num.includes(toFind) || onePokemon.name.toUpperCase().includes(toFind.toUpperCase())));
  return detailPokemon;
  }

export const detailCardPokemon = (numPokemon) => {
  let startFindData = findData(numPokemon);
     let myDetailPokemon = {
        num: startFindData.num, 
        name: startFindData.name,
        type: startFindData.type,
        img: startFindData.img,
        height: startFindData.height,
        weight: startFindData.weight,
        weaknesses: startFindData.weaknesses,
        evolutions: []
      }

      let arrayEvolutions = [];
    if (startFindData.prev_evolution != undefined){
      arrayEvolutions = arrayEvolutions.concat(startFindData.prev_evolution);
    }

    arrayEvolutions.push({num:startFindData.num, name:startFindData.name});

    if (startFindData.next_evolution != undefined){
      arrayEvolutions = arrayEvolutions.concat(startFindData.next_evolution);
    }

      for (let indice = 0; indice < arrayEvolutions.length; indice ++){
        let findEvolutions = findData(arrayEvolutions[indice].num);
        arrayEvolutions[indice].img = findEvolutions.img
      let detailEvolutions = {
        num: findEvolutions.num,
        name: findEvolutions.name,
        img: findEvolutions.img
      }
      myDetailPokemon.evolutions.push(detailEvolutions);
      }
     
    return myDetailPokemon;
};


// data2 function definition -------------------------------------------------

export const filterFunction = (dataBase, cath, subcath) => {
  var a=dataBase.filter(item => item[cath].includes(subcath));   
  return a;
 };

 // sortListAzAsc function definition ----------------------------------------
 const sortAz1 = (a,b) => {
  if (a.name > b.name) {
  return 1;
 }else{
 return -1;
 }
};

const sortZa1 = (a,b) => {
  if (a.name < b.name) {
  return 1;
 }else{
 return -1;
 }
};

export const sortAzAsc = (list, order) => {
  if(order == "aZ"){
    return list.sort(sortAz1);
  }
  if(order == "zA"){
    return list.sort(sortZa1);
  }

};
// sortListAzAsc function definition ----------------------------------------

// sortNumAsc function definition -------------------------------------------
const sortNumAsc1 = (a,b) => {
  return a.num - b.num
};

const sortNumDesc1 = (a,b) => {
  return b.num - a.num
};

export const sortNumAsc = (list, order) => {
  if(order == "1,2"){
    return list.sort(sortNumAsc1);
  }
  if(order == "2,1"){
    return list.sort(sortNumDesc1);
  }
  };
// sortNumAsc function definition -------------------------------------------

