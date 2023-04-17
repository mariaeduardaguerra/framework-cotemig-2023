let botao_vermelho = document.getElementById('btn-vermelho').addEventListener("click",mudar_vermelho);
let botao_verde = document.getElementById('btn-verde').addEventListener("click",mudar_verde);
let botao_azul = document.getElementById('btn-azul').addEventListener("click",mudar_azul);
let botao_amarelo = document.getElementById('btn-amarelo').addEventListener("click",mudar_amarelo);

let fundo =       document.querySelector("body");
function mudar_vermelho () {
    fundo.style.background="red";
    
}
function mudar_verde () {
    fundo.style.background="green";

}
function mudar_azul() {
    fundo.style.background="blue";

}
function mudar_amarelo () {
    fundo.style.background="yellow";

}