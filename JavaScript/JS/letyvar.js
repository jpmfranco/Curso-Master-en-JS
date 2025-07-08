'use strict'
// alert("Hola");
var numero = 40;
console.log(numero);
if (true){
    var numero = 50;
    console.log(numero);
}
console.log(numero);


// Prueba con let

var texto = "Curso";
console.log (texto);
/* 
var es global, es decir, se puede modificar en cualquier bloque de codigo, pero let
solo se puede modificar en el bloque de texto que se esta
utilizando, limitando 
*/
if(true){
    let texto = "Curso Laravel 5"
    console.log (texto);
    
}
console.log (texto);

