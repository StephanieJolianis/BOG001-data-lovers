import { example } from './data.js';
import data from './data/pokemon/pokemon.js';


console.log(example, data);


//document.getElementById("root").src = data.pokemon[0]["img"];

var x = document.createElement("IMG");
x.setAttribute("src", data.pokemon[0]["img"]);
x.setAttribute("width", "200");
x.setAttribute("height", "200");
document.body.appendChild(x);