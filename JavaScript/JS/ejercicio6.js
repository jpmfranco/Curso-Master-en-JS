'use strict'

/*
Que nos diga si un numero es par o impar
1. Ventana prompt
2. Si no es valido que nos pida de nuevo el numero
*/

do{
var num = parseInt(prompt("Dame un numero",0));
}while(isNaN(num) || num ==0)

if (num%2==0){
    console.log("Tu numero "+num+" es par");
}else{
    console.log("Tu numero "+num+" es impar");
}