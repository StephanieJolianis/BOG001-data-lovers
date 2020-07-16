import data from './data/pokemon/pokemon.js';



export const data2 = () => {
  let myArray = [];
  for (let prueba1 of data.pokemon){
    let firstObject = {
      num: prueba1.num, 
      name: prueba1.name,
      type: prueba1.type,
      img: prueba1.img
    };
    myArray.push(firstObject);
    }
  return myArray;
};


export const filterFunction = (dataBase, cath, subcath) => {
  var a=dataBase.filter(item => item[cath].includes(subcath));   
  return a;
 };


 export const sortAzAsc = (a,b) => {
   if (a.name > b.name) {
    return 1;
  }else if(a.name === b.name){
    return 0;
  }else{
    return -1;
  }
 };
 