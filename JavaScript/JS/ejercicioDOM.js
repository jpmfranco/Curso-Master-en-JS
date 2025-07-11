'use strict'

window.addEventListener("load",function(){
    console.log("dom cargado");

    var formulario = document.querySelector("#form");
    var bd = document.querySelector(".dashed");
    bd.style.display = "none";
    formulario.addEventListener("submit",function(){
        console.log("Evento submit capturado");
        var nombre = document.querySelector("#nombre").value;
        var apellidos = document.querySelector("#apellidos").value;
        var edad = document.querySelector("#edad").value;
        bd.style.display = "block";
        // var data  = [nombre,apellidos,edad];
        // var i;
        // for(i in data){
        //     var p = document.createElement("p");
        //     p.append(data[i]);
        //     bd.append(p)
        // }
        var pn = document.querySelector("#pn span");
        var pa = document.querySelector("#pa span");
        var pe = document.querySelector("#pe span");
        pn.innerHTML = nombre;
        pa.innerHTML = apellidos;
        pe.innerHTML = edad;






    });
});