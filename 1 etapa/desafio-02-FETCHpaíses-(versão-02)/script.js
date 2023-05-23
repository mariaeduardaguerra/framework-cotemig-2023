/*---------------------------- url/arquivo da API ----------------------------*/

var url = "data.json";                   

/*---------------------------- declaração dos elementos do HTML ----------------------------*/

// table RESULTADO de TODOS os países
var tableAllCountries = document.querySelector('#table-all-countries');

// table RESULTADO dos países FAVORITOS
var tableFavoriteCountries = document.querySelector('#table-favorite-countries');

// span no <h5> que mostra a quantidade de TODOS os países na table ESQUERDA
var spanAllCountries = document.querySelector('#span-all-countries');

// span no <h5> que mostra a quantidade de países FAVORITOS na table DIREITA
var spanFavoriteCountries = document.querySelector('#span-favorite-countries');

// span no <h6> que mostra a população total de TODOS os países na table ESQUERDA
var spanAllTotalPupulation = document.querySelector('#span-all-total-population');

// span no <h6> que mostra a população total dos países FAVORITOS na table DIREITA
var spanFavoriteTotalPupulation = document.querySelector('#span-favorites-total-population');


/*---------------------------- variáveis ----------------------------*/

// armazena a população total de todos os países
// é atualizada ao percorrer os países nos arrays 'country' e 'favorites'
var globalPupulation = 0;

// é uma contagem de países 
// incrementada toda vez que um país é adicionado à lista
// usada para acompanhar o número de países na lista
var contP = 0;

// array que armazena os países marcados como favoritos
// é atualizada quando um país é adicionado ou removido da lista de favoritos
var favorites = [];

// array que armazena os dados dos países obtidos da API
// os dados dos países são armazenados após a busca e transformação dos dados
var country = [];

/*----------------------------  ----------------------------*/

// método FETCH busca os dados da API e processa o resultado
// fetch usado para fazer uma requisição HTTP para a URL especificada na variável 'url'
// sempre usar o método '.then' junto com o fetch
// '.then()' é encadeado para tratar a resposta da requisição
fetch(url)

    // função 'response' para tratar a resposta HTTP e retornar a promessa com os dados convertidos em .json
    // é uma função de retorno (callback)
    .then((response) => {

        // converte a resposta em formato .json, pois ao fazer a requisição na API os dados vêm em formato binário (0 e 1)
        return response.json()

    })

    // função 'result' é um parâmetro da função anônima passada como callback para o segundo .then() encadeado
    // é executada quando os dados .json da resposta estão disponíveis
    // o parâmetro/função 'result' representa os dados obtidos, que são um array contendo informações dos países.
    .then((result) => {

        // laço 'for' para percorrer cada elemento do array 'result' e adicionar os países ao array 'country'
        for (var i = 0; i < result.length; i++) {
            // adiciona o país ao array 'country'
            // a cada iteração, o país correspondente no índice atual (result[i]) é adicionado ao array 'country'
            // usando o método .push().
            country.push(result[i]);
        }

        // atualiza o conteúdo do elemento HTML com a população total
        spanAllTotalPupulation.textContent = globalPupulation;
        
        // chama a função para renderizar a tabela de países
        renderizar();

    })

function renderizar() {
    populationGlob = 0;
    contP = 0;
    var paises = `
    <tr>
        <th>Bandeira</th>
        <th>Nome</th>
        <th>População</th>
    </tr>`;

    country.forEach((countryItem, index) => {
        if (countryItem != '') {
            populationGlob += parseInt(countryItem.population);
            contP++;

            paises +=
                `<tr>
                <td> <button onclick="favoritar(${index})"> + </button> <img src='${countryItem.flag}'>  </td>
                <td> ${countryItem.name}</td>
                <td> ${countryItem.population}</td>
            </tr>`;
        }

    });
    tableAllCountries.innerHTML = paises;
    spanAllTotalPupulation.innerHTML = populationGlob;
    spanAllCountries.innerHTML = contP;
}
function renderizarF() {
    populationGlob = 0;
    contP = 0;
    var paises = `
    <tr>
        <th>Bandeira</th>
        <th>Nome</th>
        <th>População</th>
    </tr>`;

    favorites.forEach((FavItem, index) => {
        if (FavItem != '') {
            populationGlob += parseInt(FavItem.population);
            contP++;
            paises +=
                `<tr>
            <td> <button onclick="removeFav(${index})"> - </button> <img src='${FavItem.flag}'>  </td>
            <td> ${FavItem.name}</td>
            <td> ${FavItem.population}</td>
        </tr>`;
        }

    });
    tableFavoriteCountries.innerHTML = paises;
    spanFavoriteCountries.innerHTML = contP;
    spanFavoriteTotalPupulation.innerHTML = populationGlob;
}

function favoritar(indice) {

    favoritos[indice] = country[indice];
    country[indice] = '';
    renderizar();
    renderizarF();
}

function removeFav(indice) {
    country[indice] = favoritos[indice];
    favoritos[indice] = '';
    renderizarF();
    renderizar();

}