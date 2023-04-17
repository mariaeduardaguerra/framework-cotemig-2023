document.getElementById("btn_verificar").addEventListener("click",verificar)
resultado = document.getElementById("resultado");
function verificar() {

    var numero = parseInt(document.getElementById("numero").value);

  
    if (numero === 0) {
        resultado.textContent = "Programa finalizado!"
    } else if (numero < 0) {
        resultado.textContent = "digite um número inteiro positivo!"
    } else if (numero % 3 === 0 && numero % 5 === 0) {
        resultado.textContent = `${numero} é divisível por 3 e 5 ao mesmo tempo!`; 
    } else {
        resultado.textContent = `${numero} não é divisível por 3 e 5 ao mesmo tempo!`; 
    }
}
