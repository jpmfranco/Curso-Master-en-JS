'use strict'

/* 
Muestre todos los numeros divisores de un numero introducido en
un prompt
*/

var num = parseInt(prompt("Dame un numero",0));
var i = 0;
while(i<100){
    if(num%i==0){
        console.log(i);
    }
    i++;
}