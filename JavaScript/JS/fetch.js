'use strict'

// Fetch y peticiones a serviciones / apis rest
var divusers = document.querySelector("#users");
var divprofe = document.querySelector("#profe");
var divjanet = document.querySelector("#janet");
console.log
getusers().then(res => res.json()).then(user => {
    console.log(users);
    listusers(user.data);
    
    return getinfo();
}).then(data =>{
    divprofe.innerHTML = data;
    return getJanet();
}).then(data => data.json()).then(janet => {
    mostrarJanet(janet.data);
    
}).catch(error => {
    console.log(error+'error');
});
function getusers(){
   return fetch("https://reqres.in/api/users", {
  headers: {
    'x-api-key': 'reqres-free-v1'
  }

})
}

function getJanet(){
    return fetch("https://reqres.in/api/users/2", {
  headers: {
    'x-api-key': 'reqres-free-v1'
  }

})
}

function listusers(users){
    users.map((user,i) => {
        let nombre = document.createElement("h2");
        nombre.innerHTML = i +'.-'+user.first_name + " "+ user.last_name;
        divusers.append(nombre);
        document.querySelector(".load").style.display = "none";
    });
}

function mostrarJanet(user){
        console.log(user)
        let nombre = document.createElement("h4");
        let avatar = document.createElement("img");
        nombre.innerHTML = user.first_name + " "+ user.last_name;
        avatar.src= user.avatar;
        avatar.style.width="100px";
        divjanet.appendChild(nombre);
        divjanet.appendChild(avatar);
        document.querySelector("#janet .load").style.display = "none";
}

function getinfo(){
    var profe = {
        nombre:"Pedro",
        apellidos:"Sanchez",
        url:"https://pedrosanchez.org"
    };
    
    return new Promise((resolve, reject) => {
        var profestr = "";
        setTimeout(function(){
        profestr = JSON.stringify(profe);
        if ( typeof profestr != 'string' || profestr == '') reject('Error');
       
        return resolve(profestr);
       },3000);

       
    });
}