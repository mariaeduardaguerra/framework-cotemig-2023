let btnEnviar = document.querySelectorAll('#botoes button')[0];
let btnExcluir = document.querySelectorAll('#botoes button')[1];
let btnEditar = document.querySelectorAll('#botoes button')[2];

let nome = document.querySelectorAll('#wrap input')[0];
let quantidade = document.querySelectorAll('#wrap input')[1];
let preco = document.querySelectorAll('#wrap input')[2];

let prateleira = document.querySelectorAll('#wrap input')[3];
let descricao = document.querySelectorAll('#wrap input')[4];
let categoria = document.querySelectorAll('#wrap input')[5];

let tabela = document.querySelector('#saida table');
let BD = [];


//btnEnviar.addEventListener('click', cadastrar)

//function cadastrar(){
//métodos
btnEnviar.onclick = function() {

    // function alertCamposVazios() {
    //     if(document.getElementsByClassName("inputs").value == ""){
    //         alert('Por favor, preencha todos os campos!');
    //         // document.getElementsByClassName("inputs").focus();
    //         return false
    //     }
    //     alertCamposVazios(); 
    // }

    let produto = new Object();
    produto.nome = nome.value;
    produto.quantidade = quantidade.value;
    produto.preco = preco.value;
    produto.prateleira = prateleira.value;
    produto.descricao = descricao.value;
    produto.categoria = categoria.value;
    
    produto.id = BD.length;
    
    BD.push(produto);
    tabela.innerHTML += `<tr><td><input type="checkbox" id="${produto.id}" onchange="verificar(this.id)"></td><td>${produto.nome}</td><td>${produto.quantidade}</td><td>${preco.value}</td>
    <td>${produto.prateleira}</td><td>${produto.descricao}</td><td>${produto.categoria}</td></tr>`;
//}
}
btnExcluir.onclick = function() {
    for (let i = 0; i < BD.length; i++){
        let elemento = document.querySelectorAll('#saida table tr td input')[i];
        if (elemento.checked){
            BD.splice(elemento.id, 1);
            tabela.innerHTML = `<tr><td width="30px"></td><td>Nome</td><td>Quantidade</td><td>Preço</td><td>Prateleira</td><td>Descrição</td><td>Categoria</td></tr>`;
            montarTabela();
        }
    }
}

function montarTabela() {
    for (let i = 0; i < BD.length; i++){
        tabela.innerHTML += `<tr><td width="30px"><input type="checkbox" id="${i}" onchange="verificar()"></td><td>${BD[i].nome}</td><td>${BD[i].quantidade}</td><td>${BD[i].preco}</td></tr>`;
    }
}

btnEditar.onclick = function() {
    for (let i = 0; i < BD.length; i++){
        let elemento = document.querySelectorAll('#saida table tr td input')[i];
        if (elemento.checked){
            BD[i].nome = nome.value;
            BD[i].quantidade = quantidade.value;
            BD[i].preco = preco.value;

            BD[i].prateleira = prateleira.value;
            BD[i].descricao = descricao.value;
            BD[i].categoria = categoria.value;

            tabela.innerHTML = `<tr><td width="30px"></td><td>Nome</td><td>Quantidade</td><td>Preço</td><td>Prateleira</td><td>Descrição</td><td>Categoria</td></tr>`;
            montarTabela();
        }
    }    
}

function verificar(id) {
    let cont = 0;
    for (let i = 0; i < BD.length; i++){
        let elemento = document.querySelectorAll('#saida table tr td input')[i];
        if (elemento.checked){
            nome.value = BD[i].nome;
            quantidade.value = BD[i].quantidade;
            preco.value = BD[i].preco;
            prateleira.value = BD[i].prateleira;
            descricao.value = BD[i].descricao;
            categoria.value = BD[i].categoria;

            cont++;
            if (cont > 1){
                alert('não é possível selecionar mais de 1 elemento!');
                elemento.checked = false;
                break;
            }
        }
    }
}


// --------------------------------- BOTÃO LIMPAR ---------------------------------


const limpaNome = document.getElementById("id-nome");
const limpaQuantidade = document.getElementById("id-quantidade");
const limpaPreco = document.getElementById("id-preco");
const limpaPrateleira = document.getElementById("id-prateleira");
const limpaDescricao = document.getElementById("id-descricao");
const limpaCategoria = document.getElementById("id-categoria");
const btnLimpar = document.getElementById("limpar");


btnLimpar.addEventListener("click", function() {

    limpaNome.value = "";
    limpaQuantidade.value = "";
    limpaPreco.value = "";
    limpaPrateleira.value = "";
    limpaDescricao.value = "";
    limpaCategoria.value = "";

});


// --------------------------------- NÃO PERMITIR O CADASTRO DE ITENS VAZIOS ---------------------------------

const btnCadastrar = document.getElementById("cadastrar");

btnCadastrar.addEventListener("click", function() {

    // seleciona o formulário
    const form = document.querySelector('form');

    // adiciona um evento de envio
    form.addEventListener('submit', function(event) {

    // seleciona os campos de entrada
    const inputs = form.querySelectorAll('input[type="text"], textarea');

    // percorre cada campo de entrada
    for (let i = 0; i < inputs.length; i++) {

        // verifica se o campo está vazio
        if (inputs[i].value.trim() === '') {
            // evita que o formulário seja enviado
            event.preventDefault();
            // exibe uma mensagem de erro
            alert('por favor, preencha todos os campos!');
            // interrompe a execução do loop
            return;
        }
    
    }

});

});

