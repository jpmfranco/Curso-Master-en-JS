'use strict'

var fecha = new Date();
var year = fecha.getFullYear();
var mont = fecha.getMonth();
var day = fecha.getDate();
var hora = fecha.getHours();
var min = fecha.getMinutes();
var textohora = `
    el año es: ${year}
    el mes es: ${mont+1}
    el dia es: ${day}
    la hora es: ${hora}
    los minutos son: ${min}
`;
console.log(textohora);
console.log(parseInt(Math.random()*10));