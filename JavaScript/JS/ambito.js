'use strict'
var text = "Hola Mundo soy una variable global";
var numero = 12;
function holaMundo(text){
    var hola_mundo = "Texto dentro de función"
    console.log(text);
    console.log(numero.toString());
    console.log(hola_mundo);
}

holaMundo(text);