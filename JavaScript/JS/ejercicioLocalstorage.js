'use strict'
var formu = document.querySelector("#form");
var formb = document.querySelector("#formb");
formu.addEventListener('submit',function(){
   console.log("entra");
   var titulo = document.querySelector('#add').value;
   if (titulo.length == 0) {
        alert("No pusiste ninguna pelicula");
   }else{
        localStorage.setItem(titulo,titulo);
   }
});
formb.addEventListener("submit",function(){
    var tidel = document.querySelector("#del").value;
    if(tidel in localStorage){
        localStorage.removeItem(tidel);
    }else{
        alert("No se elimino nada");
    }
});
var i;
var ul = document.querySelector("#pl");
for(i in localStorage){
    //console.log(localStorage);
    if (typeof localStorage[i] == 'string') {
        var li = document.createElement("li");
        li.append(localStorage[i]);
        ul.append(li);
    }
  
}