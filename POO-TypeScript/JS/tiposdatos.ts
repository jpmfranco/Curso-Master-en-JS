type letrasonumeros = string | number;
// string
let va: letrasonumeros = "numbers";
let cadena: string | number | boolean = "sdadad";
cadena = 12;
cadena = true;
// number
let numero: number = 12;
//Bool
let verdadero: boolean = true;
// Any
let cualquiera: any = "hola";
cualquiera = 77;

// Arrays
var lenguajes:  Array<any> = ["PHP","JS","CSS",1];

let years: number[] = [12,2,3,4,5];

console.log(cadena, numero,verdadero,cualquiera,lenguajes,years);

// Let vs var
// var es global y let de bloque como en un if o un while
var num1 = 10;
var num2 = 12;

if(num1 ==10){
    let num1 = 44;
    var num2 = 55;
    console.log(num1,num2);
}
console.log(num1,num2);

