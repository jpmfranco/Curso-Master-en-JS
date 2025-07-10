'use strict'

/* 
Utilizando un bucle, mostrar la suma y la media de los numeros introducidos hasta introducir 
un numero negativo y ahi mostrar el resultado

*/
var sum  = 0;
var count = 0;
do {
    var res = parseInt(prompt("Dame un numero: ",0));
    if(isNaN(res)){
        res = 0;
    }else if (res>=0){
        sum += res;
        count++;
        var media = sum / count;
        console.log("La suma es: "+sum);
        console.log(count);
    }
} while (res >= 0);

alert("La suma de todos los numeros es: "+sum);
alert("La media de todos los numeros es:"+media);