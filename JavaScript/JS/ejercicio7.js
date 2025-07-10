'use strict'

/* 
Tabla de multiplicar de un numero introducido por pantalla
*/

var num = parseInt(prompt("Dame un numero",0));

for(var i = 1;i<=10;i++){
    console.log(num+" x "+i+" = "+num*i);
}