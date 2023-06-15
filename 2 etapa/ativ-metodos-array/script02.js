// solicitar os valores ao usuário
var valores = [];
for (var i = 1; i <= 4; i++) {
  var valor = parseInt(prompt("Digite o valor " + i + ":"));
  valores.push(valor);
}

// filtrar os valores pares utilizando a função filter()
var valoresPares = valores.filter(function(valor) {
  return valor % 2 === 0;
});

// exibir o resultado
document.write("Valores: " + valores.join(", ") + "<br>");
document.write("<span class='crimson'>Valores pares: </span>");

valoresPares.forEach(function(valor, index) {
  if (index !== valoresPares.length - 1) {
    document.write("<span class='crimson'>" + valor + ", </span>");
  } else {
    document.write("<span class='crimson'>" + valor + "</span>");
  }
});
