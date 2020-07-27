import { data2, detailCardPokemon } from './data.js';
import { filterFunction } from './data.js';
import { sortAzAsc } from './data.js';
import { sortNumAsc } from './data.js';
import { findData2 } from './data.js';


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
// agrego el evento click a los elementos nuevos ----------------------------------------------
let result = data2();
let container = document.getElementById("container");
createPokemons(result);
// Funcion de crear tarjetas pokemon ------------------------------------------------------------

// Filter function implementation -----------------------------------------------
var initialText = "151 pokémons available";
document.getElementById("pFilter").innerText = initialText;

const showTypeFilter = () => {
  var cath = "type";
  var subcath = event.target.innerHTML;

  if (subcath == "All") {
    createPokemons(result);
    document.getElementById("pFilter").innerText = initialText;
  } else {
    var resultTypeFilter = filterFunction(result, cath, subcath);
    let nFilter = resultTypeFilter.length;
    document.getElementById("pFilter").innerText = nFilter + " pokémon found";
    createPokemons(resultTypeFilter);
  }
  screenWidthMobile.matches ? document.getElementById("navMenu").style.display = "none" : document.getElementById("typeMenu").style.display = "none";
}

const showTypeMenu = () => {

  if (screenWidthDesk.matches) {
    var displayMenu = document.getElementById("typeMenu");
    (displayMenu.style.display == "" || displayMenu.style.display == "none") ? displayMenu.style.display = "block" : displayMenu.style.display = "none";

    document.getElementById("weaknessMenu").style.display = "none";
    document.getElementById("sort").style.display = "none";
  }
}




const showWeakFilter = () => {
  var cath = "weaknesses";
  var subcath = event.target.innerHTML;
  if (subcath == "All") {
    createPokemons(result);
    document.getElementById("pFilter").innerText = initialText;
  } else {
    let resultWeakFilter = filterFunction(result, cath, subcath);
    let nFilter = resultWeakFilter.length;
    document.getElementById("pFilter").innerText = nFilter + " pokémon found";
    createPokemons(resultWeakFilter);
  }
  screenWidthMobile.matches ? document.getElementById("navMenu").style.display = "none" : document.getElementById("weaknessMenu").style.display = "none";
}

const showWeaknessMenu = () => {
  if (screenWidthDesk.matches) {
    var displayMenu = document.getElementById("weaknessMenu");
    (displayMenu.style.display == "" || displayMenu.style.display == "none") ? displayMenu.style.display = "block" : displayMenu.style.display = "none";

    document.getElementById("typeMenu").style.display = "none";
    document.getElementById("sort").style.display = "none";
  }
}


const showSortMenu = () => {
  if (screenWidthDesk.matches) {

    let displayMenu = document.getElementById("sort");
    (displayMenu.style.display == "" || displayMenu.style.display == "none") ? displayMenu.style.display = "block" : displayMenu.style.display = "none";

    document.getElementById("typeMenu").style.display = "none";
    document.getElementById("weaknessMenu").style.display = "none";
  }
}

document.getElementById("typeMenu").addEventListener("click", showTypeFilter);
document.getElementById("typeButton").addEventListener("click", showTypeMenu);
document.getElementById("weaknessMenu").addEventListener("click", showWeakFilter);
document.getElementById("weaknessButton").addEventListener("click", showWeaknessMenu);
document.getElementById("sortButton").addEventListener("click", showSortMenu);

// sortListAzAsc function implementation --------------------------------------------------------
let sortListAz = sortAzAsc(data2(),"aZ");
const sortListAzAsc = () => {
  createPokemons(sortListAz);
  screenWidthMobile.matches ? document.getElementById("navMenu").style.display = "none" : document.getElementById("sort").style.display = "none";
}
document.getElementById("Az").addEventListener("click", sortListAzAsc);

// sortListZaDesc function implementation ------------------------------------------------------
let sortListZa = sortAzAsc(data2(),"zA");
const sortListZaDesc = () => {
  createPokemons(sortListZa);
  screenWidthMobile.matches ? document.getElementById("navMenu").style.display = "none" : document.getElementById("sort").style.display = "none";
}
document.getElementById("Za").addEventListener("click", sortListZaDesc);

// sortListNumAsc function implementation -----------------------------------------------------
let sortNum1 = sortNumAsc(data2(),"1,2");
const sortListNumAsc = () => {
  createPokemons(sortNum1);
  screenWidthMobile.matches ? document.getElementById("navMenu").style.display = "none" : document.getElementById("sort").style.display = "none";
}
document.getElementById("numberAsc").addEventListener("click", sortListNumAsc);


// sortListNumDesc function implementation ----------------------------------------------------
let sortNum2 = sortNumAsc(data2(),"2,1");
const sortListNumDesc = () => {
  createPokemons(sortNum2);
  screenWidthMobile.matches ? document.getElementById("navMenu").style.display = "none" : document.getElementById("sort").style.display = "none";
}
document.getElementById("numberDesc").addEventListener("click", sortListNumDesc);
// sortListNumDesc function implementation ----------------------------------------------------

// Search Bar Function:
var searchInput = document.getElementById("searchInput");

const searchFunction = () => {
  var searchArray = findData2(result, searchInput.value);

  console.log(typeof (searchArray))

  createPokemons(searchArray);
}

searchInput.addEventListener("keyup", searchFunction);


/////////////////////////////////////////////////////////////////////////
///////////                pokeStats                         /////////////

//var Chart = require('chart.js');
var pokeStatsButton=document.getElementById("pokestatsButton");
var pokeStatsPage1=document.getElementById("pokeStats1");
var pokeStatsPage2=document.getElementById("pokeStats2");
var divFilter= document.getElementById("divFilter");
var backBar=document.getElementsByClassName("backBar")[0];
var backButton=document.getElementById("back");
var navMenu=document.getElementById("navMenu");
var menuBar=document.getElementsByClassName("menuBar")[0];
var searchBar=document.getElementById("searchBar");
var tryAgainButton=document.getElementById("tryAgain");


const showPokeStats = () => {
  menuBar.style.display="none";
  navMenu.style.display="none";
  searchBar.style.display="none";
  container.style.display="none";
  divFilter.style.display="none";
   
  pokeStatsPage1.style.display="block";
  backButton.style.display="block";
  backBar.style.display="block";

  document.getElementById("pikachu").style.display = "block";
  document.getElementById("pikachu").style.gridColumnStart = 2;
  document.getElementById("pikachu").style.gridColumnEnd = 3;
}
let pokemonCard = document.getElementById("containerCard1")
const backHome = () => {
  menuBar.style.display=null;
  navMenu.style.display=null;
  searchBar.style.display=null;
  container.style.display=null;
  divFilter.style.display=null;
  pokeStatsPage1.style.display=null;
  pokeStatsPage2.style.display=null;
  pokemonCard.style.display= null;
  backButton.style.display=null;
  backBar.style.display=null;
}

pokeStatsButton.addEventListener("click", showPokeStats);
backButton.addEventListener("click", backHome);


// pokemonCard ----------------------------------------------------------

const pokemonCardView = () => {
  menuBar.style.display="none";
  navMenu.style.display="none";
  searchBar.style.display="none";
  container.style.display="none";
  divFilter.style.display="none";
   
  pokemonCard.style.display="block";
  backButton.style.display="block";
  backBar.style.display="block";

  document.getElementById("pikachu").style.display = "block";
  document.getElementById("pikachu").style.gridColumnStart = 2;
  document.getElementById("pikachu").style.gridColumnEnd = 3;
}

// Funcion de crear detalle del pokemon ---------------------------------------------------------

function createDetailPokemon(numPokemon) {
  let callingFind = detailCardPokemon(numPokemon);
  let numName = document.getElementById("pokemonNameNum");
  numName.innerText = callingFind.num + " " + callingFind.name;
  let imagePokemonMain = document.getElementById("mainImg");
  imagePokemonMain.src = callingFind.img;
  let imgPokemonType1 = document.getElementById("typeImg1");
  imgPokemonType1.src = "imagenes/" + callingFind.type[0].toLowerCase() + ".png";
  let element1 = document.getElementById("elemntType1");
  element1.innerText = callingFind.type[0];
  let imgPokemonType2 = document.getElementById("typeImg2");
  let element2 = document.getElementById("elemntType2");

  if (callingFind.type.length > 1) {
    imgPokemonType2.src = "imagenes/" + callingFind.type[1].toLowerCase() + ".png";
    element2.innerText = callingFind.type[1];
    imgPokemonType2.style.display = null;
    element2.style.display = null;
  } else {
    imgPokemonType2.style.display = "none";
    element2.style.display = "none";
  }

  let heightPokemon = document.getElementById("height");
  heightPokemon.innerText = callingFind.height;
  let weightPokemon = document.getElementById("weight");
  weightPokemon.innerText = callingFind.weight;
  let weaknessesInfo = document.getElementById("infoWeaknesses");
  weaknessesInfo.innerText = callingFind.weaknesses;

  let evo1 = document.getElementById("evo1");
  let evo2 = document.getElementById("evo2");
  let evo3 = document.getElementById("evo3");
  let flecha1 = document.getElementById("flechatransparente1");
  let flecha2 = document.getElementById("flechatransparente2");
  let numEvo1 = document.getElementById("numEvo1");
  let numEvo2 = document.getElementById("numEvo2");
  let numEvo3 = document.getElementById("numEvo3");
  let nameEvo1 = document.getElementById("nameEvo1");
  let nameEvo2 = document.getElementById("nameEvo2");
  let nameEvo3 = document.getElementById("nameEvo3");
  let div3 = document.getElementById("divEvo3");
  let div2 = document.getElementById("divEvo2");
  let div1 = document.getElementById("divEvo1");

  if (callingFind.evolutions.length > 2){
    
    evo1.src = callingFind.evolutions[0].img;
    evo2.src = callingFind.evolutions[1].img;
    evo3.src = callingFind.evolutions[2].img;
    numEvo1.innerText = callingFind.evolutions[0].num;
    numEvo2.innerText = callingFind.evolutions[1].num;
    numEvo3.innerText = callingFind.evolutions[2].num;
    nameEvo1.innerText = callingFind.evolutions[0].name;
    nameEvo2.innerText = callingFind.evolutions[1].name;
    nameEvo3.innerText = callingFind.evolutions[2].name;
    div1.style.display = "flex";
    div2.style.display = "flex";
    div3.style.display = "flex";
    flecha1.style.display = null;
    flecha2.style.display = null;
  } else if (callingFind.evolutions.length > 1){
    evo1.src = callingFind.evolutions[0].img;
    evo2.src = callingFind.evolutions[1].img;
    flecha1.style.display = null;
    flecha2.style.display = "none";
    numEvo1.innerText = callingFind.evolutions[0].num;
    numEvo2.innerText = callingFind.evolutions[1].num;
    nameEvo1.innerText = callingFind.evolutions[0].name;
    nameEvo2.innerText = callingFind.evolutions[1].name;
    div1.style.display = "flex";
    div2.style.display = "flex";
    div3.style.display = "none";
  } else {
    div1.style.display = "none";
    div2.style.display = "none";
    div3.style.display = "none";
    flecha1.style.display = "none";
    flecha2.style.display = "none";
  } 

  const divEvolutions = document.querySelectorAll(".evolution");

  for (let i = 0; i < divEvolutions.length; i++) {
    divEvolutions[i].removeEventListener("click",function () {
      createDetailPokemon(divEvolutions[i].childNodes[3].childNodes[0].innerText);
    });
    divEvolutions[i].addEventListener("click", function () {
      console.log("click", i);
      createDetailPokemon(divEvolutions[i].childNodes[3].childNodes[0].innerText);
    });
  }
 pokemonCardView();

}

// Crear botones para seleccionar los pokemon en pokestats:


var divSelect1=document.getElementById("poke1");
var select1=document.createElement("select");
var divSelect2=document.getElementById("poke2");
var select2=document.createElement("select");
var divSelect3=document.getElementById("poke3");
var select3=document.createElement("select");
var doneButton=document.getElementById("done");

select1.setAttribute("id", "select1")
select2.setAttribute("id", "select2")
select3.setAttribute("id", "select3")

var option0S1=document.createElement("option");
var option0S2=document.createElement("option");
var option0S3=document.createElement("option");

option0S1.text="Select a Pokémon";
option0S2.text="Select a Pokémon";
option0S3.text="Select a Pokémon";

select1.appendChild(option0S1);
select2.appendChild(option0S2);
select3.appendChild(option0S3);

for (let i in result) {
  var option1=document.createElement("option");
  var option2=document.createElement("option");
  var option3=document.createElement("option");
  
  option1.text=result[i].name;
  option2.text=result[i].name;
  option3.text=result[i].name;
  select1.appendChild(option1);
  select2.appendChild(option2);
  select3.appendChild(option3);
}
divSelect1.appendChild(select1);
divSelect2.appendChild(select2);
divSelect3.appendChild(select3);



let labelsPoke=[];

const selectedOptions =  () => {
  
  
  
  var selected1=select1.value;
  var selected2=select2.value;
  var selected3=select3.value;

  labelsPoke[0]=selected1;
  labelsPoke[1]=selected2;
  labelsPoke[2]=selected3;

  

  
  
}

select1.addEventListener("change", selectedOptions);
select2.addEventListener("change", selectedOptions);
select3.addEventListener("change", selectedOptions);


const showStats = () => {
  

  if(labelsPoke.includes("Select a Pokémon")) {
    alert("Please select three pokémon to compare");
  } else {
    pokeStatsPage1.style.display=null;
    pokeStatsPage2.style.display="block";
    var spawn1=findData2(result, labelsPoke[0])[0].spawnTime;
    var spawn2=findData2(result, labelsPoke[1])[0].spawnTime;
    var spawn3=findData2(result, labelsPoke[2])[0].spawnTime;
    var spawnMinutes1=parseInt(spawn1.split(":")[0])+parseInt(spawn1.split(":")[1])/60;
    var spawnMinutes2=parseInt(spawn2.split(":")[0])+parseInt(spawn2.split(":")[1])/60;
    var spawnMinutes3=parseInt(spawn3.split(":")[0])+parseInt(spawn3.split(":")[1])/60;

    var candy1=parseFloat(findData2(result, labelsPoke[0])[0].candyCount);
    var candy2=parseFloat(findData2(result, labelsPoke[1])[0].candyCount);
    var candy3=parseFloat(findData2(result, labelsPoke[2])[0].candyCount);

    //Chart:
    
    var ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
      type: 'bar',
      data: {
        labels: labelsPoke,
        datasets: [
          {
            label: "Spawn Time (Hours)",
            backgroundColor: "#3e95cd",
            fontFamily:"'Raleway', Sans-Serif",
            data: [spawnMinutes1,spawnMinutes2,spawnMinutes3 ]
          }, {
            label: "Candy Count",
            backgroundColor: "#8e5ea2",
            fontFamily:"'Raleway', Sans-Serif",
            data: [candy1, candy2, candy3]
          }

        ]
      },
      options: {
        title: {
          display: true,
          text: 'Comparison PokeChart',
          fontFamily:"'Raleway', Sans-Serif",
        },
        scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
                }
          }]
        },
        maintainAspectRatio: false,
      }
    });
  }
}



const tryAgain = () => {
  pokeStatsPage1.style.display="block";
  pokeStatsPage2.style.display=null;
}

doneButton.addEventListener("click", showStats);
tryAgainButton.addEventListener("click", tryAgain);

