import { data2 } from './data.js';

let result = data2();
let rootNode = document.getElementById("root");

for (let pokemon of result) {

  let pokemon1 = document.createElement("div");
  pokemon1.setAttribute("class", pokemon.type[0]);

  let name = document.createElement("span");
  name.setAttribute("class", "name");
  let name1 = document.createTextNode(pokemon.name);

  let num = document.createElement("span");
  num.setAttribute("class", "num");
  let number = document.createTextNode(pokemon.num);

  let img = document.createElement("div")
  img.setAttribute("class", "img");

  let img1 = document.createElement("img");
  img1.setAttribute("src", pokemon.img);

  let type = document.createElement("div");
  type.setAttribute("class", "type");


  let type1 = document.createElement("span");
  type1.setAttribute("class", "type1");
  let types = document.createTextNode(pokemon.type);

  name.appendChild(name1);
  num.appendChild(number);
  type1.appendChild(types);
  img.appendChild(img1);
  type.appendChild(type1);
  
  pokemon1.appendChild(name);
  pokemon1.appendChild(num);
  pokemon1.appendChild(img);
  pokemon1.appendChild(type);

  rootNode.appendChild(pokemon1);
}

