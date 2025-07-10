'use strict'

//Arrays, Arreglos, Matrices

var nombre = "Victor Robles";
var names =["Juan","Pablo","Mayagoitia",52,true];

var lenguajes = new Array("PHP","JS","Go","Java");

/*
var elemento = parseInt(prompt("Que elemento del array quieres"));
if (elemento>=names.length) {
    alert("Introduce el numero correcto menor que "+names.length);
}else{
    alert(names[elemento]);
}
*/
document.write("<h1>Lenguajes de programacion del 2018</h1>");
document.write("<ul>");
/*
for(var i =0 ;i <lenguajes.length;i++){
    document.write("<li>"+lenguajes[i]+"</li>");
}
*/
// lenguajes.forEach((elemento, index,data)=>{
//     console.log(data);
//     document.write("<li>"+index+"-"+elemento+"</li>");
// });
// for(let lenguaje in lenguajes){
//     document.write("<li>"+lenguajes[lenguaje]+"</li>");
// }
// document.write("</ul>");

// Busquedas

var precios = [10,20,50,80,12];
var busqueda = precios.some(precio => precio >= 20);

// var busqueda = lenguajes.find(lenguaje => lenguaje == "PHP");
// busqueda = lenguajes.findIndex(lenguaje => lenguaje == "JS");

console.log(busqueda);

