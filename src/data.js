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
      weaknesses:prueba1.weaknesses
    };
    myArray.push(firstObject);
    }
  return myArray;
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
}else if(a.name === b.name){
 return 0;
 }else{
 return -1;
 }
};

export const sortAzAsc = () => {
let dataPokemon = data2();
return dataPokemon.sort(sortAz1);
};
// sortListAzAsc function definition ----------------------------------------

// sortZaDesc function definition -------------------------------------------
const sortZa1 = (a,b) => {
  if (a.name < b.name) {
  return 1;
}else if(a.name === b.name){
 return 0;
 }else{
 return -1;
 }
};

export const sortZaDesc = () => {
  let dataPokemon1 = data2();
  return dataPokemon1.sort(sortZa1);
  };
// sortZaDesc function definition -------------------------------------------

// sortNumAsc function definition -------------------------------------------
const sortNumAsc1 = (a,b) => {
  return a.num - b.num
};

export const sortNumAsc = () => {
  let dataPokemon2 = data2();
  return dataPokemon2.sort(sortNumAsc1);
  };
// sortNumAsc function definition -------------------------------------------


const sortNumDesc1 = (a,b) => {
  return b.num - a.num
};

export const sortNumDesc = () => {
  let dataPokemon3 = data2();
  return dataPokemon3.sort(sortNumDesc1);
  };