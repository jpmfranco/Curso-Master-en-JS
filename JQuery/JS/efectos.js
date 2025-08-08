$(document).ready(function(){
    var mos = $("#mostrar");
    var ocu = $("#ocultar");
    var caja = $("#caja");
    mos.hide();
    mos.click(function(){
        ocu.show();
        mos.hide();
        caja.slideDown('slow',function(){
            console.log("Cartel mostrado");
        });
    });
    ocu.click(function(){
        mos.show();
        caja.slideUp('slow',function(){
            console.log("Cartel ocultado");
        });
        ocu.hide()
    });
    $("#tio").click(function(){
        caja.slideToggle('fast');
    });

    $("#anime").click(function(){
        caja.animate({marginLeft:'500px',
                    fontSize:'40px' ,
                    height:'110px'
                    },'slow')
            .animate({
                borderRadius: '900px',
                marginTop: '100px'
            },'slow')
            .animate({
                borderRadius: '0px',
                marginLeft: '0px'
            },'slow')
            .animate({
                borderRadius: '100px',
                marginTop: '0px'
            },'slow')
    });
});