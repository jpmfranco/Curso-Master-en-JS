$(document).ready(function(){

    //Load
    var dato = $("#datos") 
    // data.load("https://reqres.in/");

    //Get y Post
    $.get("https://reqres.in/api/users?page=2",{'x-api-key': 'reqres-free-v1'},function(res){
        res.data.forEach((element,index) => {
            dato.append("<p>"+element.first_name+ " "+element.last_name +"</p>")
        });
    });
   
    $("#form").submit(function(e){
        e.preventDefault();
         var user = {
        "name": $('input[name="name"]').val(),
        "web": $('input[name="web"]').val()
        };
        // console.log(user)
        // $.post($(this).attr("action"),user,function(res){
        //     console.log(res);
        // });

        $.ajax({
            type:"Post",
            dataType: 'json',
            contentType: 'application/json',
            url: $(this).attr("action"),
            data: user,
            beforeSend: function(){
                console.log("Enviando usuario..");
            },
            success: function(res){
                console.log(res);
            },
            error: function(res){
                console.log("A ocurrido un error..")
            },
            timeout: 1000 
        })

        return false;
    });
});