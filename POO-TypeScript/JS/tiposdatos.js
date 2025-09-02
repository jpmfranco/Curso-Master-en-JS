// string
var va = "numbers";
var cadena = "sdadad";
cadena = 12;
cadena = true;
// number
var numero = 12;
//Bool
var verdadero = true;
// Any
var cualquiera = "hola";
cualquiera = 77;
// Arrays
var lenguajes = ["PHP", "JS", "CSS", 1];
var years = [12, 2, 3, 4, 5];
console.log(cadena, numero, verdadero, cualquiera, lenguajes, years);
// Let vs var
// var es global y let de bloque como en un if o un while
var num1 = 10;
var num2 = 12;
if (num1 == 10) {
    var num1_1 = 44;
    var num2 = 55;
    console.log(num1_1, num2);
}
console.log(num1, num2);
