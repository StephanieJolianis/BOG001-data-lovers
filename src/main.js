import { data2, detailCardPokemon } from './data.js';
import { filterFunction } from './data.js';
import { sortAzAsc } from './data.js';
import { sortZaDesc } from './data.js';
import { sortNumAsc } from './data.js';
import { sortNumDesc } from './data.js';

// Menu Function ---------------------------------------------------------------------------
document.getElementById("menuBtn").addEventListener("click", openNav);
document.getElementById("closeBtn").addEventListener("click", closeNav);
function openNav() {
  document.getElementById("navMenu").style.display = "block";
}

function closeNav() {
  document.getElementById("navMenu").style.display = "none";
}


// Menu Function ------------------------------------------------------------------------------

// Pikachu Function ---------------------------------------------------------------------------

var screenWidthDesk = window.matchMedia("(min-width: 800px)");
var screenWidthMobile = window.matchMedia("(max-width: 800px)");

var pikachuOnType = () => {
  document.getElementById("pikachu").style.display = "block";
  document.getElementById("pikachu").style.gridColumnStart = 2;
  document.getElementById("pikachu").style.gridColumnEnd = 3;
  
  
}

var pikachuOnWeakness = () => {
  document.getElementById("pikachu").style.display = "block";
  document.getElementById("pikachu").style.gridColumnStart = 3;
  document.getElementById("pikachu").style.gridColumnEnd = 4;
}

var pikachuOnSort = () => {
  document.getElementById("pikachu").style.display = "block";
  document.getElementById("pikachu").style.gridColumnStart = 4;
  document.getElementById("pikachu").style.gridColumnEnd = 5;
}

var pikachuOnStats = () => {
  document.getElementById("pikachu").style.display = "block";
  document.getElementById("pikachu").style.gridColumnStart = 5;
  document.getElementById("pikachu").style.gridColumnEnd = 6;
}

if (screenWidthDesk.matches) {
  document.getElementById("typeButton").addEventListener("mouseover", pikachuOnType);
  document.getElementById("weaknessButton").addEventListener("mouseover", pikachuOnWeakness);
  document.getElementById("sortButton").addEventListener("mouseover", pikachuOnSort);
  document.getElementById("pokestatsButton").addEventListener("mouseover", pikachuOnStats);

} else {
  document.getElementById("pikachu").style.gridColumnStart = 2;
  document.getElementById("pikachu").style.gridColumnEnd = 3;
}
// Pikachu Function -----------------------------------------------------------------------------

// To top function ------------------------------------------------------------------------------

var topButton = document.getElementById("topButtonImg");
var main = document.getElementsByTagName("main")[0];

const showToTopButton = () => {

  if (main.scrollTop > 200) {
    topButton.style.display = "block";
  } else {
    topButton.style.display = "none";
  }
}

const topFunction = () => {
  main.scrollTop = 0;

}

main.addEventListener("scroll", showToTopButton);
topButton.addEventListener("click", topFunction);

// To top function ------------------------------------------------------------------------------

// Funcion de crear detalle del pokemon ---------------------------------------------------------

function createDetailPokemon(numPokemon) {
  let callingFind = detailCardPokemon(numPokemon);
  console.log(callingFind);
}
// Funcion de crear detalle del pokemon ---------------------------------------------------------

// Funcion de crear tarjetas pokemon ------------------------------------------------------------
const createPokemons = (result) => {
// elimino los child creados en container antes de crear nuevos child ---------------------------
  while (container.firstChild) {
    container.removeChild(container.firstChild);
  }
// elimino los child creados en container antes de crear nuevos child ---------------------------
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

  // agrego el evento click a los elementos nuevos ----------------------------------------------
  const listPokemonCard = document.querySelectorAll(".pokemon");

  for (let i = 0; i < listPokemonCard.length; i++) {
    listPokemonCard[i].addEventListener("click", function () {
      createDetailPokemon(listPokemonCard[i].childNodes[1].textContent);
    });
  }

}

var result = data2();
let container = document.getElementById("container");
createPokemons(result);
// Funcion de crear tarjetas pokemon ------------------------------------------------------------

// Filter function implementation -----------------------------------------------


const showTypeFilter = () => {
  var cath="type";
  var subcath = event.target.innerHTML;

  if (subcath=="All"){
    createPokemons(result);  
  } else {
    var resultTypeFilter=filterFunction(result, cath, subcath);
    createPokemons(resultTypeFilter);
  }

  screenWidthMobile.matches ? document.getElementById("navMenu").style.display="none":document.getElementById("typeMenu").style.display="none";
}    

const showTypeMenu = () => {

  if(screenWidthDesk.matches){
    document.getElementById("typeMenu").style.display=="none"? document.getElementById("typeMenu").style.display="block":document.getElementById("typeMenu").style.display="none";
    document.getElementById("weaknessMenu").style.display="none";
    document.getElementById("sort").style.display="none";
    console.log("prueba")
  }
}







const showWeakFilter = () => {
  var cath="weaknesses";
  var subcath = event.target.innerHTML;
  if (subcath=="All"){
      createPokemons(result);  
  } else {var resultWeakFilter=filterFunction(result, cath, subcath);
  createPokemons(resultWeakFilter);
  }
  screenWidthMobile.matches ? document.getElementById("navMenu").style.display="none" : document.getElementById("weaknessMenu").style.display="none";
}

const showWeaknessMenu = () => {
  if(screenWidthDesk.matches){
    document.getElementById("weaknessMenu").style.display=="none" ? document.getElementById("weaknessMenu").style.display="block": document.getElementById("weaknessMenu").style.display="none";
    document.getElementById("typeMenu").style.display="none";
    document.getElementById("sort").style.display="none";
  }
}


const showSortMenu = () => {

  if(screenWidthDesk.matches){
    
    if(document.getElementById("sort").style.display=="none")
    {
      document.getElementById("sort").style.display="block";
      console.log("abre")
    }else {
      document.getElementById("sort").style.display="none";
      console.log("cierra")
    }
    document.getElementById("typeMenu").style.display="none";
    document.getElementById("weaknessMenu").style.display="none";
    console.log("prueba")
  }
}



document.getElementById("typeMenu").addEventListener("click", showTypeFilter);
document.getElementById("typeButton").addEventListener("click", showTypeMenu);
document.getElementById("weaknessMenu").addEventListener("click", showWeakFilter);
document.getElementById("weaknessButton").addEventListener("click", showWeaknessMenu);
//document.getElementById("sortMenu").addEventListener("click", showSort);
document.getElementById("sortButton").addEventListener("click", showSortMenu);





// Filter function implementation ---------------------------------------------------------------

// sortListAzAsc function implementation --------------------------------------------------------
let sortListAz = sortAzAsc();
const sortListAzAsc = () => {
 createPokemons(sortListAz);
 if(screenWidthMobile.matches) {
  document.getElementById("navMenu").style.display="none";
}
if(screenWidthDesk.matches) {
  document.getElementById("sort").style.display="none";
}
}
document.getElementById("Az").addEventListener("click", sortListAzAsc);
// sortListAzAsc function implementation -------------------------------------------------------

// sortListZaDesc function implementation ------------------------------------------------------
let sortListZa = sortZaDesc();
const sortListZaDesc = () => {
 createPokemons(sortListZa);
 if(screenWidthMobile.matches) {
  document.getElementById("navMenu").style.display="none";
}
if(screenWidthDesk.matches) {
  document.getElementById("sort").style.display="none";}
}
document.getElementById("Za").addEventListener("click", sortListZaDesc);
// sortListZaDesc function implementation -----------------------------------------------------

// sortListNumAsc function implementation -----------------------------------------------------
let sortNum1 = sortNumAsc();
const sortListNumAsc = () => {
 createPokemons(sortNum1);
 if(screenWidthMobile.matches) {
  document.getElementById("navMenu").style.display="none";
}
if(screenWidthDesk.matches) {
  document.getElementById("sort").style.display="none";}
}
document.getElementById("numberAsc").addEventListener("click", sortListNumAsc);
// sortListNumAsc function implementation -----------------------------------------------------

// sortListNumDesc function implementation ----------------------------------------------------
let sortNum2 = sortNumDesc();
const sortListNumDesc = () => {
 createPokemons(sortNum2);
 if(screenWidthMobile.matches) {
  document.getElementById("navMenu").style.display="none";
}
if(screenWidthDesk.matches) {
  document.getElementById("sort").style.display="none";}
}
document.getElementById("numberDesc").addEventListener("click", sortListNumDesc);
// sortListNumDesc function implementation ----------------------------------------------------






