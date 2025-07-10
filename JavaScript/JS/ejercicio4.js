'use strict'

/* 
Mostrar todos los numeros impares entre dos numeros introducidos
por el usuario
*/

var num = parseInt(prompt("Dame un numero",0))
var num2 = parseInt(prompt("Dame otro numero",0))

for(var i = num;i<=num2;i++){
    if(i%2!=0){
        console.log(i)
    }
}