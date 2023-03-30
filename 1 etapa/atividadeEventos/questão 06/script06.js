document.getElementById("btnVerificar").addEventListener("click", verificar)
resultado = document.getElementById("resultado");
const limpa = document.getElementById('btnLimpar');

function verificar() {

    let numero = parseInt(document.getElementById("numero").value);
  
    if (numero === 0) {
        resultado.textContent = "programa finalizado!"
    }
    else if (numero < 0) {
        resultado.textContent = "por favor, digite um número inteiro e positivo!"
    }
    else if (numero % 3 === 0 && numero % 5 === 0) {
        resultado.textContent = `"${numero}" é divisível por 3 e 5 ao mesmo tempo!`; 
    }
    else {
        resultado.textContent = `"${numero}" não é divisível por 3 e 5 ao mesmo tempo!`; 
    }
}

function limpar () {

    const limpaResultado = document.getElementById('resultado');
    limpaResultado.textContent = '';
    const limpaInput = document.getElementById('numero');
    limpaInput.textContent = '';

}

limpa.addEventListener('click', limpar)

