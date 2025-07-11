'use strict'

/*
1. Pida 6 numeros por pantalla y los meta en un array
2. Mostrar el array entero (todos sus elementos) en el cuerpo 
de la pagina y en la consola.
3. Ordenarlo y mostrarlo
4. Invertir su orden y mostrarlo
5. Mostrar cuantos elementos tiene el array
6. Busqueda de un valor introducido por el usuario, que nos diga 
si lo encuentra y su indice
*/

var numeros = [];
for(var i = 0; i<6;i++){
   numeros.push(parseInt(prompt("Dame un numero")));
}
console.log("Lista completa: ",numeros);
document.write("<h1>Lista completa: </h1><br>"+numeros);
numeros.sort();
console.log(numeros);
numeros.reverse();
console.log(numeros);
console.log(numeros.length);
var busqueda = parseInt(prompt("Dime un numero a buscar: "));
console.log(numeros.indexOf(busqueda));


