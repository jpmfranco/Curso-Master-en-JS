'use strict'

// JSON  - JavaScript Object Notation

var pelicula = {
    titulo: "Batman vs Superman",
    year:2017,
    pais: "Estados Unidos"
};

var peliculas = [
    {titulo: "Harry Potter",year:2010,pais: "Inglaterra"},
    pelicula
]
var caja = document.querySelector("#peliculas");
var i;
for(i in peliculas){
    var p = document.createElement("p");
    p.append(peliculas[i].titulo+ " - "+ peliculas[i].year);
    caja.append(p);
}