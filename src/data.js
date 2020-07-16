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

// export const filterFunction = (property, value) => {
//   return property.value==
// };