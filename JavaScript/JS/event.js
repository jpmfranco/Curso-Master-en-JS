'use strict'

// Eventos del raton
window.addEventListener('load',() => {
    function cambiarcolor(){
        console.log("me diste clic")
        var bg = boton.style.background;
        if (bg == "green") {
            boton.style.background = "red";
            
        }else{
            boton.style.background = "green";  

        }
        boton.style.padding = "10px";
            boton.style.border = "1px solid #ccc";  
        return true;

    }

    var boton = document.querySelector("#boton");

    boton.addEventListener("click",function(){
        cambiarcolor();
        console.log(this);
        this.style.border = " 10px solid black";
    });

    //Mouse over
    boton.addEventListener("mouseover",function(){
    boton.style.background = "#ccc";
    });

    //Mouse out
    boton.addEventListener("mouseout",function(){
    boton.style.background = "white";
    });
    var input = document.querySelector("#campo_nombre");
    //Focus
    input.addEventListener("focus",function(){
        console.log("[focus] Estas dentro del input");
    });

    //Blur
    input.addEventListener("blur",function(){
        console.log("[blur] Estas fuera del input");
    });
    // keydown
    input.addEventListener("keydown",function(event){
        console.log("[keydown] pulsando esta tecla",String.fromCharCode(event.keyCode));
    });
    //keypress
    input.addEventListener("keypress",function(event){
        console.log("[keypress] Tecla presionada",String.fromCharCode(event.keyCode));
    });
    //keyup
    input.addEventListener("keyup",function(event){
        console.log("[keypress] Tecla soltada",String.fromCharCode(event.keyCode));
    });    
}); // end load

