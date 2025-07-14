'use strict'

// Local storage


// comprobar disponibilidad de Localstorage
if(typeof(Storage) != 'undefined'){
    console.log("Localstorage disponible");
}else{
    console.log("Incompatible con Localstorage disponible");
}

//Guardar datos
localStorage.setItem("titulo","Curso de Python");

//Recuperar elemento
document.querySelector("#peliculas").innerHTML =(localStorage.getItem("titulo"));

//Guardar objetos

var usuario = {
    nombre: "Juan franco",
    email:"sdada@example.com",
    web:"web.com"
};
localStorage.setItem("usuario",JSON.stringify(usuario));


//Recuperar objeto
var userjs =JSON.parse(localStorage.getItem("usuario"));
console.log(userjs);
document.querySelector("#peliculas").append(" "+userjs.web+" "+userjs.nombre);

localStorage.clear();