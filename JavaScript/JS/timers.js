'use strict'

window.addEventListener("load",()=>{
        function intervalo(){
            var time = setInterval(function(){
                console.log("Set interval ejecutado");
                var encabezado = document.querySelector("h1");
                if (encabezado.style.fontSize == "50px") {
                    encabezado.style.fontSize = "30px";
                } else {
                    encabezado.style.fontSize = "50px";
                }
            },1000);
            return time;
        }
  
    // timers

    // var time = setTimeout(function(){
    //     console.log("Set interval ejecutado");
    //     var encabezado = document.querySelector("h1");
    //     if (encabezado.style.fontSize == "50px") {
    //         encabezado.style.fontSize = "30px";
    //     } else {
    //         encabezado.style.fontSize = "50px";
    //     }
    // },500);
    var time = intervalo();
    var stop = document.querySelector("#stop");
    stop.addEventListener("click",function(){
        alert("Has parado el intervalo en bucle");
        clearInterval(time);
    });
    var start = document.querySelector("#start");
    start.addEventListener("click",function(){
        alert("Has iniciado el intervalo en bucle");
        intervalo();
    });
}); // end load