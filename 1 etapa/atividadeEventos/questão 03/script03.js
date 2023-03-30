let linkRoxo = document.getElementById("roxo").addEventListener("mouseover", mudarRoxo);
let linkVermelho = document.getElementById("vermelho").addEventListener("mouseover", mudarVermelho);
let linkAzul= document.getElementById("azul").addEventListener("mouseover", mudarAzul);
let linkVerde = document.getElementById("verde").addEventListener("mouseover", mudarVerde);
let btnPreto = document.getElementById("preto").addEventListener("mouseover", mudarPreto);


// let fundo = document.querySelector("body");

function mudarRoxo () {
    document.body.style.backgroundColor  = "purple";
}

function mudarVermelho () {
    document.body.style.backgroundColor  = "red";
}

function mudarAzul () {
    document.body.style.backgroundColor  = "blue";
}

function mudarVerde () {
    document.body.style.backgroundColor  = "green";
}

function mudarPreto () {
    document.body.style.backgroundColor  = "black";
}
