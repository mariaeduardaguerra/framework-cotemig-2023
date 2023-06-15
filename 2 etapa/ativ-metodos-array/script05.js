function gerarEstados() {
    var estados = [];

    for (var i = 0; i < 4; i++) {
        var nome = prompt("digite o nome do estado " + (i + 1) + ":");
        var abreviatura = prompt("digite a abreviatura do estado " + (i + 1) + ":");

        var estado = {
            nome: nome,
            abreviatura: abreviatura
        };

        estados.push(estado);
    }

    var estadosFormatados = estados.map(function(estado) {
        return "<i>" + estado.nome + "</i> - " + estado.abreviatura;
    });

    document.getElementById("resultado").innerHTML = estadosFormatados.join("<br>");
}