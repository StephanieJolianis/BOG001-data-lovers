import { data2 } from './data.js';

let result = data2();
//console.log(result);
//document.getElementById("root").src = data.pokemon[0]["img"];
document.getElementById("root");
  for (let prueba2 of result){
    var x = document.createElement("IMG");
    x.setAttribute("src", prueba2.img);
    x.setAttribute("width", "200");
    x.setAttribute("height", "200");
    document.body.appendChild(x);
    
  }

