'use strict'

window.addEventListener("load",function(){
    console.log("dom cargado");

    var form = document.querySelector("#formulario");
    form.addEventListener("submit",function(){
        console.log("Evento submit capturado");

        return false;
    });
});