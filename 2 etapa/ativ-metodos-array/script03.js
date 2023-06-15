var pessoas = [];

for (var i = 0; i < 4; i++) {
    var nome = prompt("digite o nome da pessoa " + (i + 1) + ":");
    var idade = parseInt(prompt("digite a idade de " + nome + ":"));

    var pessoa = {
        nome: nome,
        idade: idade
    };

    pessoas.push(pessoa);
}

var pessoasIdosas = pessoas.filter(function (pessoa) {
    return pessoa.idade >= 60;
});

var tableBody = document.getElementById("tableBody");

pessoasIdosas.forEach(function (pessoa) {
    var row = document.createElement("tr");
    var nomeCell = document.createElement("td");
    var idadeCell = document.createElement("td");

    nomeCell.innerText = pessoa.nome;
    idadeCell.innerText = pessoa.idade;

    row.appendChild(nomeCell);
    row.appendChild(idadeCell);

    row.classList.add("elderly");

    tableBody.appendChild(row);
});