

let botao_azul = document.getElementById("link_Azul").addEventListener("mouseover",mudar_azul);
let botao_vermelho = document.getElementById("link_Vermelho").addEventListener("mouseover",mudar_vermelho);
let botao_aqua= document.getElementById("link_Aqua").addEventListener("mouseover",mudar_aqua);
let botao_preto = document.getElementById("link_Preto").addEventListener("mouseover",mudar_preto);

let fundo = document.querySelector("body");

function mudar_azul () {
    fundo.style.backgroundColor = "blue"
}

function mudar_vermelho () {
    fundo.style.background="red";

}

function mudar_aqua () {
    fundo.style.background="aqua";

}

function mudar_preto () {
    fundo.style.background="black";

}