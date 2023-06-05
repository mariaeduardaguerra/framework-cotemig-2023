
// a function já é criada dentro do próprio evento, assim ela será chamada assim que a página carregar
window.addEventListener('load', function() {
    
console.log("antes fetch");

const valores = this.fetch('https://api.github.com/users/samenezes').then(res => {

    console.log(res);

    res.json().then(dados => {
        console.log(dados);
        mostraDados(dados);
    });

}).catch(erro => {
    console.log(erro + "erro na requisição");
});

console.log(valores);

console.log("depois fetch");

console.log("sem tratamento da 'promise' " + divisao(12,2));

divisao(12,2).then(resul => {
    console.log("o resultado da divisão é: " + resul);
}).catch(erro => {
    console.log("falha na divisão: " + erro);
});

executeDivisao();
doFetchAsync();

});

function mostraDados(dados) {

    // pega do html o primeiro elemento
    const usuario = document.querySelector('#usuario');

    // 'dados' é o objeto e 'login', 'id', 'url' são os atributos
    usuario.textContent = "login: " + dados.login + " " + 'ID: ' + dados.id + ' ' + dados.url;

}