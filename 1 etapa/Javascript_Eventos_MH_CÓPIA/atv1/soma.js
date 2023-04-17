const calcular = document.getElementById('calcular');

function calculadora () {
    let valorA = parseInt(document.getElementById('valorA').value);
    let valorB = parseInt(document.getElementById('valorB').value);
    let valorTexto = document.getElementById('resultado');
  

    if(valorA !== ' ' && valorB !== ' '){
        
        let conta = valorA + valorB;

        valorTexto.textContent = `O valor de ${valorA} + ${valorB} é igual à ${conta}`;
    }else{
        valorTexto.textContent = ("Preencha todos os campos");
    }
    
}

    calcular.addEventListener('click', calculadora);


    let valorTexto = document.getElementById('resultado');
