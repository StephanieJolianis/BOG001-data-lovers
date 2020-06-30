import { data2 } from './data.js';

let result = data2();

var rootNode=document.getElementById("root");

for (let pokemons of result){

  var divPokemon=document.createElement("div");
  var divPokemonText=document.createElement("div");
  var imagePokemon=document.createElement("IMG");
  var pokemonNumberH1= document.createElement("h1");
  var pokemonNameP= document.createElement("p");
  var pokemonTypeP= document.createElement("p");

  var pokemonNumber=document.createTextNode(pokemons.num);
  var pokemonName=document.createTextNode(pokemons.name);
  var pokemonType=document.createTextNode(pokemons.type);
  
  imagePokemon.setAttribute("src", pokemons.img);
  divPokemon.setAttribute("class", "container");
  pokemonNameP.setAttribute("class", "pokemonNameStyle");
  
  pokemonNumberH1.appendChild(pokemonNumber);
  pokemonNameP.appendChild(pokemonName);
  pokemonTypeP.appendChild(pokemonType);

  divPokemonText.appendChild(pokemonNumberH1);
  divPokemonText.appendChild(pokemonNameP);
  divPokemonText.appendChild(pokemonTypeP);
  
  divPokemon.appendChild(imagePokemon);
  divPokemon.appendChild(divPokemonText);
  
  rootNode.appendChild(divPokemon);
}