import { data2 } from './data.js';

// Menu Function ---------------------------------------------------------------------------
document.getElementById("menuBtn").addEventListener("onclick" , openNav);

function openNav() {
  document.getElementById("navMenu").style.display="block";
}

function closeNav() {
  document.getElementById("navMenu").style.display= "none";
}
// Menu Function ---------------------------------------------------------------------------

let result = data2();
let container = document.getElementById("container");

for (let pokemonIndex of result){
    
  let pokemon = document.createElement("div");
  pokemon.setAttribute("class", "pokemon");

  let nameText=document.createTextNode(pokemonIndex.name);
  let name=document.createElement("h1");
  name.setAttribute("class", "name");
  
  let numText=document.createTextNode(pokemonIndex.num);
  let num=document.createElement("h3");
  num.setAttribute("class", "num");

  let img=document.createElement("figure");
  img.setAttribute("class", "img");

  let imgPokemon=document.createElement("img");
  imgPokemon.setAttribute("class", "imgPokemon");
  imgPokemon.setAttribute("src", pokemonIndex.img);

  let type=document.createElement("div");
  type.setAttribute("class", "type");

  let typeText=document.createTextNode(pokemonIndex.type);
  let typeSpan=document.createElement("span");
  typeSpan.setAttribute("class", pokemonIndex.type);

  name.appendChild(nameText);
  num.appendChild(numText);
  img.appendChild(imgPokemon);
  typeSpan.appendChild(typeText)
  type.appendChild(typeSpan);
  
  pokemon.appendChild(name);
  pokemon.appendChild(num);
  pokemon.appendChild(img);
  pokemon.appendChild(type);

  container.appendChild(pokemon);
}
























