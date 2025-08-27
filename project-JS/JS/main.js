$(document).ready(function(){
    
    
    // slider
    if(window.location.href.indexOf('index') > -1){
        $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        });
        
    }else{
        $('#slider').hide();
    }

    


    //Posts
     if(window.location.href.indexOf('index') > -1){
    var posts = [
        {
            title: "Prueba de titulo 1",
            date: 'Publicado el '+moment().date()+ " de "+moment().format("MMMM")+ " del "+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut justo sed nibh efficitur auctor. In volutpat quam finibus sapien bibendum tempus. Aenean rutrum luctus mi, vitae consequat arcu pellentesque quis. Aenean ultrices tellus sed nisi pretium, eget ultrices turpis mattis. Integer sit amet arcu eget ex laoreet laoreet. Nullam eu justo commodo, dapibus lectus ac, pellentesque ante. Donec lorem eros, iaculis eget quam ac, pharetra gravida nisl. Curabitur hendrerit eleifend lectus, et malesuada turpis imperdiet nec. Ut scelerisque nibh in urna tristique, quis tempus odio ultrices. Etiam malesuada magna id magna ornare, id eleifend justo scelerisque. Ut at sapien mattis, commodo ex nec, viverra mi.'
        },
        {
            title: "Prueba de titulo 2",
            date: 'Publicado el '+moment().date()+ " de "+moment().format("MMMM")+ " del "+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut justo sed nibh efficitur auctor. In volutpat quam finibus sapien bibendum tempus. Aenean rutrum luctus mi, vitae consequat arcu pellentesque quis. Aenean ultrices tellus sed nisi pretium, eget ultrices turpis mattis. Integer sit amet arcu eget ex laoreet laoreet. Nullam eu justo commodo, dapibus lectus ac, pellentesque ante. Donec lorem eros, iaculis eget quam ac, pharetra gravida nisl. Curabitur hendrerit eleifend lectus, et malesuada turpis imperdiet nec. Ut scelerisque nibh in urna tristique, quis tempus odio ultrices. Etiam malesuada magna id magna ornare, id eleifend justo scelerisque. Ut at sapien mattis, commodo ex nec, viverra mi.'
        },
        {
            title: "Prueba de titulo 3",
            date: 'Publicado el '+moment().date()+ " de "+moment().format("MMMM")+ " del "+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut justo sed nibh efficitur auctor. In volutpat quam finibus sapien bibendum tempus. Aenean rutrum luctus mi, vitae consequat arcu pellentesque quis. Aenean ultrices tellus sed nisi pretium, eget ultrices turpis mattis. Integer sit amet arcu eget ex laoreet laoreet. Nullam eu justo commodo, dapibus lectus ac, pellentesque ante. Donec lorem eros, iaculis eget quam ac, pharetra gravida nisl. Curabitur hendrerit eleifend lectus, et malesuada turpis imperdiet nec. Ut scelerisque nibh in urna tristique, quis tempus odio ultrices. Etiam malesuada magna id magna ornare, id eleifend justo scelerisque. Ut at sapien mattis, commodo ex nec, viverra mi.'
        },
        {
            title: "Prueba de titulo 4",
            date: 'Publicado el '+moment().date()+ " de "+moment().format("MMMM")+ " del "+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut justo sed nibh efficitur auctor. In volutpat quam finibus sapien bibendum tempus. Aenean rutrum luctus mi, vitae consequat arcu pellentesque quis. Aenean ultrices tellus sed nisi pretium, eget ultrices turpis mattis. Integer sit amet arcu eget ex laoreet laoreet. Nullam eu justo commodo, dapibus lectus ac, pellentesque ante. Donec lorem eros, iaculis eget quam ac, pharetra gravida nisl. Curabitur hendrerit eleifend lectus, et malesuada turpis imperdiet nec. Ut scelerisque nibh in urna tristique, quis tempus odio ultrices. Etiam malesuada magna id magna ornare, id eleifend justo scelerisque. Ut at sapien mattis, commodo ex nec, viverra mi.'
        },
        {
            title: "Prueba de titulo 5",
            date: 'Publicado el '+moment().date()+ " de "+moment().format("MMMM")+ " del "+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut justo sed nibh efficitur auctor. In volutpat quam finibus sapien bibendum tempus. Aenean rutrum luctus mi, vitae consequat arcu pellentesque quis. Aenean ultrices tellus sed nisi pretium, eget ultrices turpis mattis. Integer sit amet arcu eget ex laoreet laoreet. Nullam eu justo commodo, dapibus lectus ac, pellentesque ante. Donec lorem eros, iaculis eget quam ac, pharetra gravida nisl. Curabitur hendrerit eleifend lectus, et malesuada turpis imperdiet nec. Ut scelerisque nibh in urna tristique, quis tempus odio ultrices. Etiam malesuada magna id magna ornare, id eleifend justo scelerisque. Ut at sapien mattis, commodo ex nec, viverra mi.'
        },
        {
            title: "Prueba de titulo 6",
            date: 'Publicado el '+moment().date()+ " de "+moment().format("MMMM")+ " del "+moment().format("YYYY"),
            content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut justo sed nibh efficitur auctor. In volutpat quam finibus sapien bibendum tempus. Aenean rutrum luctus mi, vitae consequat arcu pellentesque quis. Aenean ultrices tellus sed nisi pretium, eget ultrices turpis mattis. Integer sit amet arcu eget ex laoreet laoreet. Nullam eu justo commodo, dapibus lectus ac, pellentesque ante. Donec lorem eros, iaculis eget quam ac, pharetra gravida nisl. Curabitur hendrerit eleifend lectus, et malesuada turpis imperdiet nec. Ut scelerisque nibh in urna tristique, quis tempus odio ultrices. Etiam malesuada magna id magna ornare, id eleifend justo scelerisque. Ut at sapien mattis, commodo ex nec, viverra mi.'
        }
    ];
    posts.forEach((item,index) => {
    var post = `
        <article class="post">
                <h2>${item.title}</h2>
                <span class="date">${item.date}</span>
                <p>${item.content}</p>
                <a href="#" class="button-more">Leer más</a>
        </article>
    `;
        $("#posts").append(post);
    });
    }
    var theme = $("#theme")
    //Selector de tema
    $("#to-green").click(function(){
        theme.attr("href","css/green.css")
    });
    $("#to-blue").click(function(){
        theme.attr("href","css/blue.css")
    });$("#to-red").click(function(){
        theme.attr("href","css/red.css")
    });

    //Scroll arriba de web
    $("#subir").click(function(e){
        e.preventDefault();
        $("html, body").animate({
            scrollTop: 0
        },10000);
        return false;
    });

    //login falso
    $("#login form").submit(function(){
        var fname =  $("#form_name").val();
        localStorage.setItem("fname",fname);
    });
    var fname = localStorage.getItem("fname");
    if(fname != null && fname != "undefined"){
        var ab = $("#about p");
        ab.html("<br><strong>Bienvenido, "+fname+"</strong");
        ab.append("<a href='#' id='logout'> Cerrar Sesión</a>");
        $("#login").hide();
        
        $("#logout").click(function(){
            localStorage.clear();
            location.reload();
        });
    }

    //acordeon
    if(window.location.href.indexOf('about') > -1){
        $("#acor").accordion();
    }
    //reloj
    if(window.location.href.indexOf('reloj') > -1){
        setInterval(function(){
            var reloj = moment().format("h:mm:ss");
            $("#reloj").html(reloj);
        },1000);

        
        
    }

});
