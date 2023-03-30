var corVermelha = document.getElementById('vermelho');
var corVerde = document.getElementById('verde');
var corAzul = document.getElementById('azul');
var corAmarela = document.getElementById('amarelo');
var btnVoltar = document.getElementById('voltar');

corVermelha.addEventListener("click", function(event) {
    document.body.style.backgroundColor  = "#ff392e";
})

corVerde.addEventListener("click", function(event) {
    document.body.style.backgroundColor  = "#61ffb8";
})

corAzul.addEventListener("click", function(event) {
    document.body.style.backgroundColor  = "#61a8ff";
})

corAmarela.addEventListener("click", function(event) {
    document.body.style.backgroundColor  = "#FDFD96";
})

btnVoltar.addEventListener("click", function(event) {
    document.body.style.backgroundColor  = "black";
})