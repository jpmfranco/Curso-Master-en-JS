$(document).ready(function(){
    // Selector de id
    $("#rojo").css("background","red")
                         .css("color","white");

    $("#amarillo").css("background","yellow")
                                 .css("color","green");

    $("#verde").css("background","green")
               .css("color","white");
    
    // selector de clases
    var miclase = $(".zebra").css("padding","5px");
    $(".sinborde").click(function(){
        console.log("click dado");
        $(this).addClass("zebra");
    });

    // selector de etiquetas
    var par = $("p").css("cursor","pointer");
    par.click(function(){
        var t = $(this);
        if (!t.hasClass("grande")) {
            t.addClass("grande");
        }else{
            t.removeClass("grande");
        }
        
    });

    // selectores de atributo
    $('[title="Google"]').css("background","#ccc");
    $('[title="Facebook"]').css("background","blue");

    //Otros
    //$('p,a').addClass('margen-superior')

    var busqueda = $("#elemento2").parent().parent().find('.resaltado');
    console.log(busqueda);
});