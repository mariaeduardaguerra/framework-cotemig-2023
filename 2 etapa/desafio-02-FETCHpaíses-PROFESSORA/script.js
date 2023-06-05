
// url da API

var url = "data.json";                   

// declaração dos elementos do HTML

var ulPaises = document.querySelector('#tabCountries');
var ulFav = document.querySelector('#tabFavorites')
var popuTot = document.querySelector('#totalPopulationList')
var totalP = document.querySelector('#countCountries')
var totalPF = document.querySelector('#countFav')
var popuTotF = document.querySelector('#totalPopulationFavorites')

//variáveis

var populationGlob = 0;
var contP = 0;
var favoritos = [];  
var country = [];

/*------------------------------------------------------------------------------------------*/

fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((result) => {
        for (var i = 0; i < result.length; i++) {
            country.push(result[i]);
        }
        popuTot.textContent = populationGlob;
        //console.log(country)
        renderizar();
        //contP=country.length;
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
    ulPaises.innerHTML = paises;
    popuTot.innerHTML = populationGlob;
    totalP.innerHTML = contP;
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

    favoritos.forEach((FavItem, index) => {
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
    ulFav.innerHTML = paises;
    totalPF.innerHTML = contP;
    popuTotF.innerHTML = populationGlob;
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