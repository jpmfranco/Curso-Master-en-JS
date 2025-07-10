'use strict'

/*
Calculadora:
-Pida dos numeros por pantalla.
-Si metemos uno mal que nos lo vuelva a pedir.
-Mostrar en body de la pagina, en una alerta y por la consola
el resultado de sumar, restar,multiplicar y dividir esas dos cifras.
*/

do {
    var num = parseInt(prompt("Dame un numero",0));
    var num2 = parseInt(prompt("Dame otro numero",0));  
} while (isNaN(num) || isNaN(num2));

// Consola
console.log(num+' + '+num2+' = '+(num+num2));
console.log(num+' - '+num2+' = '+(num-num2));
console.log(num+' * '+num2+' = '+(num*num2));
console.log(num+' / '+num2+' = '+(num/num2));

//Body

document.write("<h1>Suma</h1>");
document.write(num+' + '+num2+' = '+(num+num2));
document.write("<h1>Resta</h1>");
document.write(num+' - '+num2+' = '+(num-num2));
document.write("<h1>Multiplicacion</h1>");
document.write(num+' * '+num2+' = '+(num*num2));
document.write("<h1>Division</h1>");
document.write(num+' / '+num2+' = '+(num/num2));

// Alert
alert(num+' + '+num2+' = '+(num+num2));
alert(num+' - '+num2+' = '+(num-num2));
alert(num+' * '+num2+' = '+(num*num2));
alert(num+' / '+num2+' = '+(num/num2));

