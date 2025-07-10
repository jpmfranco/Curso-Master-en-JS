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

var num = [];
for(var i = 0; i<6;i++){
    num.push(parseInt(prompt("Dame un numero")));
}
console.log(num);
document.write(num);
num.sort();
console.log(num);
num.reverse();
console.log(num);
console.log(num.length);
var numeroUS = parseInt(prompt("Dime un numero a buscar: "));
var nua =num.some(numero => numero == numeroUS);
console.log(num.indexOf(numeroUS));


