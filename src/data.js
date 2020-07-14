import data from './data/pokemon/pokemon.js';


// export const data2 = (x) => {
//   let myArray = [];
//   for (let prueba1 of x){
//     let firstObject = {
//       num: prueba1.num, 
//       name: prueba1.name,
//       type: prueba1.type,
//       img: prueba1.img
//     };
//     myArray.push(firstObject);
//     }
//   return myArray;
// };

// result=data2(data.pokemon);



// export const anotherExample = () => {
//   return 'OMG';
// };





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

// export const anotherExample = () => {
//   return 'OMG';
// };