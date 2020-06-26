import { sortData } from './data.js';

let result = sortData();
//console.log(result);


console.log(example, data);


//document.getElementById("root").src = data.pokemon[0]["img"];

var x = document.createElement("IMG");
x.setAttribute("src", data.pokemon[0]["img"]);
x.setAttribute("width", "200");
x.setAttribute("height", "200");
document.body.appendChild(x);
