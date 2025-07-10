'use strict'

/* 
programa que pida dos numeros y que diga cual es el mayor, el menor
y si son iguales
*/

var num = parseInt(prompt("Dame un numero",0));
var num2 = parseInt(prompt("Dame otro numero",0));
while(isNaN(num) || isNaN(num2) || num <= 0 || num2 <= 0){
    num = parseInt(prompt("Dame un numero",0));
    num2 = parseInt(prompt("Dame otro numero",0));
}
if(num>num2){
    console.log("El numero mayor es: "+num);
    console.log("El numero menor es: "+num2);
}else if(num<num2){
    console.log("El numero menor es:"+num);
    console.log("El numero mayor es: "+num2);
}else if(num==num2){
    console.log("El numero "+num+' es igual a '+num2);
}else{
    console.log("Error no existe el numero");
}