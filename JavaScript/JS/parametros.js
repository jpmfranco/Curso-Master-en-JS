'use strict'

//Parametros REST y SPREAD
//                                  los ... es como el *args en python
function listadoFrutas(fruta1,fruta2,...todasfrutas){
    console.log("Fruta 1: "+fruta1);
    console.log("Fruta 2: "+fruta2);
    console.log(todasfrutas)
}

listadoFrutas("Naranja","Manzana","Sandia","Pera","Melon","Coco");

var frutas = ["Naranja","Manzana","Limon","Sandia","Pera","Melon","Coco"];
// pasa lo mismo que lo de arriba
//los ... se le llama spread aqui y arriba
//se le llama REST
// el SPREAD hace que si tienes dos parametros en la
/*
    en la funcion se acomoden correctamente
*/
listadoFrutas(...frutas);
