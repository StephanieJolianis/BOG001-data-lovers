import { data2 } from './data.js';

let result = data2();

/*let pokemoncard2 = ("");
  for (let prueba2 of result){
    let pokemoncard1 = '<div class="' + prueba2.type[0] + '"><span class="name">' + prueba2.name +  '</span><span class="num">' + prueba2.num + '</span><div class="img"><img src=' +  prueba2.img + '></div><div class=type><span class="type1">' + prueba2.type+'</span></div></div>';
  pokemoncard2= pokemoncard2 + pokemoncard1;
    
  }
  let root = document.getElementById("root").innerHTML;
  document.getElementById("root").innerHTML = pokemoncard2;*/


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



