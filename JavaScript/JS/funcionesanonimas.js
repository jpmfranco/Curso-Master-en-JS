'use strict'

// Funciones anonimas
// funcion que no tiene nombre

var pelicula= function(nombre){
    return "La pelicula es: "+nombre;
}

function sumame(num, num2,sumaYmuestra,sumapordos){
    var sum = num + num2;

    sumaYmuestra(sum);
    sumapordos(sum);

    return sum;
}

sumame(5,7,
//funcion flecha
(dato) => {
    console.log("la suma es: ",dato)
},(dato)=>{
    console.log("La suma por dos es: ",(dato*2))
});

// console.log(
//     sumame(10,1)
// );