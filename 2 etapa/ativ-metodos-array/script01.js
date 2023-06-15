document.getElementById('notasForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio do formulário

    // obtém as notas digitadas pelo usuário
    var nota1 = parseInt(document.getElementById('nota1').value);
    var nota2 = parseInt(document.getElementById('nota2').value);
    var nota3 = parseInt(document.getElementById('nota3').value);
    var nota4 = parseInt(document.getElementById('nota4').value);

    // cria um array com as notas
    var notas = [nota1, nota2, nota3, nota4];

    // calcula a média utilizando a função reduce()
    var media = notas.reduce(function(acumulador, nota) {
      return acumulador + nota;
    }) / notas.length;

    // exibe o resultado
    document.getElementById('media').textContent = media.toFixed(2);
    document.getElementById('resultado').style.display = 'block';
  });