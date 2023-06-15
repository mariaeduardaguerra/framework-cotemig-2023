const pokemons = [
    {
        id: 1,
        nome: 'Eevee',
        tipo: 'normal',
        registro: 133,
        CP: 300,
    },
    {
        id: 2,
        nome: 'Charmander',
        tipo: 'fire',
        registro: 004,
        CP: 500,
    },
    {
        id: 3,
        nome: 'Abra',
        tipo: 'psíquico',
        registro: 063,
        CP: 350
    }
];

function atualizarCP() {
    pokemons.forEach(function(pokemon) {
        pokemon.CP += 50;
    });

    document.getElementById("resultado").innerText = "CP atualizado com sucesso!";
}

function filtrarCharmander() {
    var charmanders = pokemons.filter(function(pokemon) {
        return pokemon.nome === 'Charmander';
    });

    document.getElementById("resultado").innerText = JSON.stringify(charmanders);
}

function mostrarDados() {
    var idSelecionado = parseInt(prompt("digite o ID do pokemon:"));

    var pokemonSelecionado = pokemons.find(function(pokemon) {
        return pokemon.id === idSelecionado;
    });

    if (pokemonSelecionado) {
        document.getElementById("resultado").innerText = JSON.stringify(pokemonSelecionado);
    } else {
        document.getElementById("resultado").innerText = "pokemon não encontrado!";
    }
}

function calcularCPTotal() {
    var cpTotal = pokemons.reduce(function(acumulador, pokemon) {
        return acumulador + pokemon.CP;
    }, 0);

    document.getElementById("resultado").innerText = "CP total: " + cpTotal;
}