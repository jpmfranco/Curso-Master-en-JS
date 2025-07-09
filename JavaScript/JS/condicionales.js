'use strict'

// Condicional if
// si a es igual a B entonces haz algo

var edad1 = 19;
// var edad2 = 12;
var nombre = "David Perez";


// Operadores relacionales
/*  Mayor: >
    Menor: <
    Mayor o igual que: >=
    Menor o igual que: <=
    igual: == 
    Distinto: != 
*/
if (edad1 >= 18){
    console.log(nombre+" tiene "+edad1+" años, es mayor de edad");
    if(edad1 <= 33){
        console.log("Todavia eres milenial");
    }else if(edad1 >= 70){
        console.log("Eres anciano");
        
    }else{
        console.log("Ya no eres milenial");
    
    }

}else{
    console.log(nombre+" tiene "+edad1+" años, es menor de edad");

}
// if(edad1 > edad2){
//     console.log("Edad uno es mayor a Edad dos");
// }else{
//     console.log("La edad uno es inferior")
// }
/* 
Operador logico
 and: &&
 or: ||
 Not: !
*/
//Negacion
var year = 2028;
if(year != 2016){
    console.log("El año no es 2016, realmente es "+year);
}

//and
if(year >=2000 && year <= 2020 && year != 2020){
    console.log("Estamos en la era actual");
}else{
    console.log("Estamos en la era post moderna");
}

//or 
if(year == 2008 || (year >= 2018 && year == 2028)){
    console.log("El año acaba en 8");
}else{
    console.log("Año no registrado")
}
