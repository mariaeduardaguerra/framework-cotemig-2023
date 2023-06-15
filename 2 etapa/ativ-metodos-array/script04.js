function calcularFatorial() {
    var valores = [];

    var input1 = document.getElementById("input1").value;
    var input2 = document.getElementById("input2").value;
    var input3 = document.getElementById("input3").value;
    var input4 = document.getElementById("input4").value;

    valores.push(parseInt(input1));
    valores.push(parseInt(input2));
    valores.push(parseInt(input3));
    valores.push(parseInt(input4));

    var fatoriais = valores.map(function(valor) {
        return fatorial(valor);
    });

    document.getElementById("resultado").innerText = "fatoriais: " + fatoriais.join(", ");
}

function fatorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }

    var resultado = 1;

    for (var i = 2; i <= n; i++) {
        resultado *= i;
    }

    return resultado;
}