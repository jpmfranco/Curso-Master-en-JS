$(document).ready(function(){
    var ele = $('.elemento');
    // mover los elementos por toda la pagina
    ele.draggable();


    // redimensionar
    ele.resizable();

    // Seleccionar  y ordenar elementos
    // $(".lista-sel").selectable();
    $(".lista-sel").sortable({
        update: function(evebt, ui){
            console.log("Ha cambiado la lista");
        }
    });

    //Drop
    $("#elemento-mov").draggable();
    $("#area").droppable({
        drop: function(){
            console.log("has soltado algo dentro del area")
        }
    });

    // efectos
    $("#show").click(function(){
        $(".caja-efects").toggle("shake",4000);
    });

    //Tooltip
    $(document).tooltip();

    //Dialog
    $("#L").click(function(){
        $("#popup").dialog();
    })
    // Datepicker
    $("#cal").datepicker();

    // Tabs
    $("#pes").tabs();
});