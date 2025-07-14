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
        var edad = parseInt(document.querySelector("#edad").value);
        console.log(typeof edad);
        if (nombre.trim()==null || nombre.trim().length == 0) {
            //alert("El nombre no es valido");
            var n = document.querySelector("#en");
            n.innerHTML = "El nombre no es valido";
            n.style.background ="red";
            n.style.color = "white";
            return false;
        }else{
            document.querySelector("#en").style.display = "none";
        }
        if (apellidos.trim()==null || apellidos.trim().length == 0) {
            //alert("Los apellidos no son validos");
            var a = document.querySelector("#ea");
            a.innerHTML = "los apellidos no son validos";
            a.style.background ="red";
            a.style.color = "white";
            return false;
        }else{
            document.querySelector("#ea").style.display = "none";
        }
        if (edad==null || edad <= 0 || isNaN(edad)) {
            //alert("La edad no es valida");
            var e = document.querySelector("#ee");
            e.innerHTML = "La edad no es valida";
            e.style.background ="red";
            e.style.color = "white";
            return false;
        }else{
            document.querySelector("#ee").style.display = "none";
        }
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