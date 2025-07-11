'use strict'

// DOM - Document Object Model

function cambiacolor(color){
    caja.style.color = color;
}

//Conseguir elementos con un ID concreto

// var caja = document.getElementById("micaja");
var caja = document.querySelector("#micaja");
caja.innerHTML = "¡Texto en la caja desde js!";
caja.style.background = "blue";
caja.style.padding = "20px";
caja.style.color = "white";
caja.className = "hola";

//Conseguir elementos por su etiqueta
var todosLosDivs = document.getElementsByTagName('div');
var seccion = document.querySelector("#miseccion");
var hr = document.createElement("hr");

var valor;
for(valor in todosLosDivs){
    if (typeof todosLosDivs[valor].textContent == 'string') {
        var parrafo = document.createElement("p");
        var texto  = document.createTextNode(todosLosDivs[valor].textContent);
        parrafo.appendChild(texto);
        seccion.prepend(parrafo);
    }
}
seccion.append(hr);

//Conseguir elementos por su clase css
var divsRojos = document.getElementsByClassName('rojo');
var divsAmarillos = document.getElementsByClassName('amarillo');
divsAmarillos[0].style.background ="yellow";
var i ;
for(i in divsRojos){
    if (divsRojos[i].className == "rojo") {
        divsRojos[i].style.background ="red";
    }
} 
// Query selector
var classred = document.querySelectorAll(".rojo");
console.log(classred);

