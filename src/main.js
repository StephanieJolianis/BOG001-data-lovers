import { data2 } from './data.js';
import {filterFunction} from './data.js';
import {sortAzAsc} from './data.js';
import {sortZaDesc} from './data.js';
import {sortNumAsc} from './data.js';
import {sortNumDesc} from './data.js';

// Menu Function ---------------------------------------------------------------------------
document.getElementById("menuBtn").addEventListener("click", openNav);
document.getElementById("closeBtn").addEventListener("click", closeNav);
function openNav() {
  document.getElementById("navMenu").style.display = "block";
}

function closeNav() {
  document.getElementById("navMenu").style.display = "none";
}

document.getElementById("sortButton").addEventListener("click", openSort);
function openSort(){
  let sort = document.getElementById("sort")
  if (sort.style.display == ""){
    sort.style.display = "none";
  }

  if (sort.style.display == "none"){
    sort.style.display = "block";
  }else{
    sort.style.display = "none";
  }
}

// Menu Function ---------------------------------------------------------------------------

// Pikachu Function ---------------------------------------------------------------------------

var screenWidth = window.matchMedia("(min-width: 800px)");

var pikachuOnFilter = () => {
  document.getElementById("pikachu").style.display="block";
  document.getElementById("pikachu").style.gridColumnStart=2;
  document.getElementById("pikachu").style.gridColumnEnd=3;
}

var pikachuOnSort = () => {
  document.getElementById("pikachu").style.display="block";
  document.getElementById("pikachu").style.gridColumnStart=3;
  document.getElementById("pikachu").style.gridColumnEnd=4;
}

var pikachuOnStats = () => {
  document.getElementById("pikachu").style.display="block";
  document.getElementById("pikachu").style.gridColumnStart=4;
  document.getElementById("pikachu").style.gridColumnEnd=5;
}

if (screenWidth.matches) {
  document.getElementById("sortButton").addEventListener("mouseover", pikachuOnSort);
  document.getElementById("filterButton").addEventListener("mouseover", pikachuOnFilter);
  document.getElementById("pokestatsButton").addEventListener("mouseover", pikachuOnStats);
  
} else {
  document.getElementById("pikachu").style.gridColumnStart=2;
  document.getElementById("pikachu").style.gridColumnEnd=3;
}
// Pikachu Function ---------------------------------------------------------------------------

// To top function ------------------------------------------------------------------------------

var topButton = document.getElementById("topButtonImg");
var main=document.getElementsByTagName("main")[0];

const showToTopButton = () => {
  
  if (main.scrollTop > 200){
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

const topFunction= () => {
   main.scrollTop = 0;
   
}

main.addEventListener("scroll", showToTopButton);
topButton.addEventListener("click", topFunction);

// To top function ------------------------------------------------------------------------------

const createPokemons = (result) => {
  while (container.firstChild) {
    container.removeChild(container.firstChild);
}
for (let pokemonIndex of result) {

  let pokemon = document.createElement("div");
  pokemon.setAttribute("class", "pokemon");

  let nameText = document.createTextNode(pokemonIndex.name);
  let name = document.createElement("h1");
  name.setAttribute("class", "name");

  let numText = document.createTextNode(pokemonIndex.num);
  let num = document.createElement("h3");
  num.setAttribute("class", "num");

  let img = document.createElement("figure");
  img.setAttribute("class", "img");

  let imgPokemon = document.createElement("img");
  imgPokemon.setAttribute("class", "imgPokemon");
  imgPokemon.setAttribute("src", pokemonIndex.img);


  let type = document.createElement("div");
  type.setAttribute("class", "type");


  let widthType = "100%";
  if (pokemonIndex.type.length > 1) {
    widthType = "50%";
  }

  for (let pokemonTypes of pokemonIndex.type) {
    let typeText = document.createTextNode(pokemonTypes);
    let typeSpan = document.createElement("span");
    typeSpan.setAttribute("class", pokemonTypes);
    typeSpan.setAttribute("width", widthType);
    typeSpan.appendChild(typeText)
    type.appendChild(typeSpan);
  }


  name.appendChild(nameText);
  num.appendChild(numText);
  img.appendChild(imgPokemon);


  pokemon.appendChild(name);
  pokemon.appendChild(num);
  pokemon.appendChild(img);
  pokemon.appendChild(type);

  container.appendChild(pokemon);
}
}
let result = data2();
let container = document.getElementById("container");
createPokemons(result);

// Filter function implementation -----------------------------------------------
var cath="type";
var subcath="Psychic";
var b=filterFunction(result, cath, subcath);
// Filter function implementation -----------------------------------------------

// sortListAzAsc function implementation ----------------------------------------
let sortListAz = sortAzAsc();
const sortListAzAsc = () => {
 createPokemons(sortListAz);
}
document.getElementById("Az").addEventListener("click", sortListAzAsc);
// sortListAzAsc function implementation ----------------------------------------

// sortListZaDesc function implementation ---------------------------------------
let sortListZa = sortZaDesc();
const sortListZaDesc = () => {
 createPokemons(sortListZa);
}
document.getElementById("Za").addEventListener("click", sortListZaDesc);
// sortListZaDesc function implementation ---------------------------------------

// sortListNumAsc function implementation ---------------------------------------
let sortNum1 = sortNumAsc();
const sortListNumAsc = () => {
 createPokemons(sortNum1);
}
document.getElementById("numberAsc").addEventListener("click", sortListNumAsc);
// sortListNumAsc function implementation ---------------------------------------

// sortListNumDesc function implementation --------------------------------------
let sortNum2 = sortNumDesc();
const sortListNumDesc = () => {
 createPokemons(sortNum2);
}
document.getElementById("numberDesc").addEventListener("click", sortListNumDesc);
// sortListNumDesc function implementation --------------------------------------






