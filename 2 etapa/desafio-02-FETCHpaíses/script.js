// Elementos HTML
const countriesContainerLeft = document.getElementById('div-01');
const countriesContainerRight = document.getElementById('div-02');
const statsLeft = document.getElementById('stats-left');
const statsRight = document.getElementById('stats-right');

// Variáveis
let countries = [];
let favorites = [];

// Função auxiliar para criar elemento HTML de país
function createCountryElement(country, isLeftList) {
  const countryElement = document.createElement('div');
  countryElement.classList.add('country');
  countryElement.innerHTML = `
    <img class="flag" src="${country.flag}" alt="${country.name} Flag">
    <div class="info">
      <h3 class="name">${country.name}</h3>
      <p class="population">Population: ${country.population}</p>
    </div>
  `;

  const button = document.createElement('button');
  button.classList.add(isLeftList ? 'add-button' : 'remove-button');
  button.textContent = isLeftList ? '+' : '-';
  button.addEventListener('click', () => {
    if (isLeftList) {
      addToFavorites(country, button);
    } else {
      removeFromFavorites(country);
    }
  });
  countryElement.appendChild(button);

  return countryElement;
}

// Função para buscar dados dos países
async function fetchCountries() {
  try {
    const response = await fetch('https://restcountries.com/v2/all');
    const data = await response.json();

    // Transformar os dados relevantes
    countries = data.map(country => ({
      name: country.name,
      flag: country.flags.png,
      population: country.population,
      id: country.numericCode
    }));

    // Ordenar por nome
    countries.sort((a, b) => a.name.localeCompare(b.name));

    // Atualizar listas e estatísticas
    updateCountriesList();
    updateFavoritesList();
    updateStatistics();
  } catch (error) {
    console.log('Ocorreu um erro ao buscar os dados dos países:', error);
  }
}

// Função para atualizar a lista de países não favoritos
function updateCountriesList() {
  countriesContainerLeft.textContent = '';
  
  const countriesFragment = document.createDocumentFragment();

  countries.forEach(country => {
    const countryElement = createCountryElement(country, true);
    countriesFragment.appendChild(countryElement);
  });

  countriesContainerLeft.appendChild(countriesFragment);
}

// Função para atualizar a lista de países favoritos
function updateFavoritesList() {
  countriesContainerRight.textContent = '';
  
  const favoritesFragment = document.createDocumentFragment();

  favorites.forEach(country => {
    const countryElement = createCountryElement(country, false);
    favoritesFragment.appendChild(countryElement);
  });

  countriesContainerRight.appendChild(favoritesFragment);
}

// Função para adicionar país aos favoritos
function addToFavorites(country, addButton) {
  favorites.push(country);
  favorites.sort((a, b) => a.name.localeCompare(b.name));

  const index = countries.findIndex(c => c.id === country.id);
  countries.splice(index, 1);

  updateCountriesList();
  updateFavoritesList();
  updateStatistics();

  addButton.classList.remove('add-button');
  addButton.classList.add('remove-button');
  addButton.textContent = '-';
  addButton.removeEventListener('click', () => {
    addToFavorites(country, addButton);
  });
  addButton.addEventListener('click', () => {
    removeFromFavorites(country);
  });
}

// Função para remover país dos favoritos
function removeFromFavorites(country) {
  countries.push(country);
  countries.sort((a, b) => a.name.localeCompare(b.name));

  const index = favorites.findIndex(c => c.id === country.id);
  favorites.splice(index, 1);

  updateCountriesList();
  updateFavoritesList();
  updateStatistics();
}

// Função para atualizar as estatísticas das listas de países
function updateStatistics() {
  const totalCountriesLeft = countries.length;
  const totalPopulationLeft = countries.reduce((total, country) => total + country.population, 0);

  statsLeft.textContent = `Total de países (${totalCountriesLeft}) | População total: ${totalPopulationLeft}`;

  const totalCountriesRight = favorites.length;
  const totalPopulationRight = favorites.reduce((total, country) => total + country.population, 0);

  statsRight.textContent = `Total de países favoritos (${totalCountriesRight}) | População total: ${totalPopulationRight}`;
}

// Chamar a função para buscar os dados dos países
fetchCountries();
