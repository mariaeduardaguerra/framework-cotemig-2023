// botão SOMAR

const somar = document.getElementById('somar');

function soma () {

    const valorDeA = document.getElementById('valorA').value;
    const valorDeB = document.getElementById('valorB').value;
    const resultado = document.getElementById('resultado');

    if (valorDeA !== '' && valorDeB !== '') {

        const valorSoma = (parseInt(valorDeA) + parseInt(valorDeB));
        resultado.textContent = `${valorDeA} + ${valorDeB} = ${valorSoma}`;
        // resultado.textContent = String(valorDeA + valorDeB);
    }
    else {

        resultado.textContent = 'Por favor, preencha todos os campos!'

    }

}

somar.addEventListener('click', soma)

///////// botão LIMPAR /////////

const limpar = document.getElementById('limpar');

function limpaDadosResultado () {

    const limpaResultado = document.getElementById('resultado');
    limpaResultado.textContent = '';

}

limpar.addEventListener('click', limpaDadosResultado)

/////////

const limparValorA = document.getElementById('limpar');

function limpaDadosValorA () {

    const limpaValorA = document.getElementsById('valorA');
    limpaValorA.textContent = '';
    
}

limparValorA.addEventListener('click', limpaDadosValorA)