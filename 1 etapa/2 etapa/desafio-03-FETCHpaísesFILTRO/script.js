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
var country = [
    {
        name: 'Brazil',
        capital: 'Brasília',
        region: 'Americas',
        color: 'green'
    },
    {
        name: 'France',
        capital: 'Paris',
        region: 'Europe',
        color: 'blue'
    },
    // Add more countries with color properties
];

/*----------------------------  ----------------------------*/

// método FETCH busca os dados da API
fetch(url)
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        country = data;
        updateTableWithCountries(country);
        updateAllCountriesInfo();
    })
    .catch(function (error) {
        console.log(error);
    });

// função que atualiza a table com a lista de países
function updateTableWithCountries(countries) {
    var rows = countries.map(function (c) {
        return '<tr style="background-color: ' + c.color + '"><td>' + c.name + '</td><td>' + c.capital + '</td></tr>';
    });
    tableAllCountries.innerHTML = rows.join('');
}

// função que atualiza a informação de todos os países
function updateAllCountriesInfo() {
    var totalPopulation = 0;
    country.forEach(function (c) {
        totalPopulation += c.population;
    });
    spanAllCountries.innerHTML = country.length;
    spanAllTotalPupulation.innerHTML = totalPopulation.toLocaleString();
}

// função que filtra os países por continente
function filterCountriesByContinent(continent) {
    return country.filter(function (c) {
        return c.region === continent;
    });
}

// adiciona um event listener para cada botão de continente
document.querySelector('#btn-africa').addEventListener('click', function () {
    var africaCountries = filterCountriesByContinent('Africa');
    updateTableWithCountries(africaCountries);
});

document.querySelector('#btn-america').addEventListener('click', function () {
    var americaCountries = filterCountriesByContinent('Americas');
    updateTableWithCountries(americaCountries);
});

// Repita para os outros continentes

// função que adiciona um país à lista de favoritos
function addFavoriteCountry(name) {
    var countryToAdd = country.find(function (c) {
        return c.name === name;
    });
    if (favorites.indexOf(countryToAdd) === -1) {
        favorites.push(countryToAdd);
        updateFavoriteCountriesTable();
        updateFavoriteCountriesInfo();
    }
}

// função que remove um país da lista de favoritos
function removeFavoriteCountry(name) {
    var countryToRemove = favorites.find(function (c) {
        return c.name === name;
    });
    var indexToRemove = favorites.indexOf(countryToRemove);
    if (indexToRemove !== -1) {
        favorites.splice(indexToRemove, 1);
        updateFavoriteCountriesTable();
        updateFavoriteCountriesInfo();
    }
}

// função```
// que atualiza a table de países favoritos
function updateFavoriteCountriesTable() {
  var rows = favorites.map(function (c) {
      return '<tr style="background-color: ' + c.color + '"><td>' + c.name + '</td><td>' + c.capital + '</td><td><button class="btn btn-danger btn-sm" onclick="removeFavoriteCountry(\'' + c.name + '\')">Remove</button></td></tr>';
  });
  tableFavoriteCountries.innerHTML = rows.join('');
}

// função que atualiza a informação de países favoritos
function updateFavoriteCountriesInfo() {
  var totalPopulation = 0;
  favorites.forEach(function (c) {
      totalPopulation += c.population;
  });
  spanFavoriteCountries.innerHTML = favorites.length;
  spanFavoriteTotalPupulation.innerHTML = totalPopulation.toLocaleString();
}

// adiciona um event listener para cada botão 'Add to favorites'
document.querySelectorAll('.btn-add-to-favorites').forEach(function (btn) {
  btn.addEventListener('click', function () {
      var countryName = this.getAttribute('data-country-name');
      addFavoriteCountry(countryName);
  });
});
