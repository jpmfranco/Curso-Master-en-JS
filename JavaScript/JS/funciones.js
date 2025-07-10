'use strict'

//Funciones 
// agrupación reutilizable de un conjunto de instrucciones

function porConsola(num,num2){
        console.log("Suma: "+(num+num2));
        console.log("Resta: "+(num-num2));
        console.log("Multiplicacion: "+(num*num2));
        console.log("Division: "+(num/num2));
        console.log("*".repeat(30));
}
function porPantalla(num,num2){
        document.write("Suma: "+(num+num2)+"<br>");
        document.write("Resta: "+(num-num2)+"<br>");
        document.write("Multiplicacion: "+(num*num2)+"<br>");
        document.write("Division: "+(num/num2)+"<br>")
        document.write("*".repeat(30)+"<br>");
}
function calculadora(num,num2,mostrar= false){
   if (!mostrar) {
        porConsola(num,num2);
   }else{
        porPantalla(num,num2);
   }
   return true;
}


calculadora(1,10);
calculadora(2,5,true);
calculadora(10,8,true);
calculadora(20,6);




// calculadora(12,8);
// calculadora(98,2);
// for(var i = 1;i<=10;i++){
//     console.log(i);
//     calculadora(i,8);
// }
