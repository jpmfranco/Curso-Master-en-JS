$(document).ready(function(){
    reloadlinks();
    $("#abutton").removeAttr('disabled').click(function(){
        $("#menu").after('<li><a href="'+$('#add').val()+'"></a></li>');
        $('#add').val("");
        reloadlinks();
    });
    
});

function reloadlinks(){
    $('a').each(function(index){
        var t = $(this);
        var enlace = t.attr("href");

        t.attr('target','_blank');
        
        t.text(enlace);
    });
}