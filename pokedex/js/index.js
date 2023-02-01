const body = document.querySelector('body');

const pokemons = document.querySelector('.pokemons');
const btnLoad = document.querySelector('.btn--more');

const inputBuscarPokemon = document.querySelector('.search__input');
const searchButton = document.querySelector('.search__button');

const modalContainer = document.querySelector('.modal__overlay');
const modal = document.querySelector('.modal');
const modalName = document.querySelector('.modal__name');
const modalClose = document.querySelector('.modal__close');
const modalArrowLeft = document.querySelector('.arrow-left');
const modalArrowRight = document.querySelector('.arrow-right');
const modalPokemonImage = document.querySelector('.modal__image');
const modalContent = document.querySelector('modal__content');

const modalCategories = document.querySelector('.modal__categories');
const modalValueWeight = document.querySelector('.modal__value__weight');
const modalValueHeight = document.querySelector('.modal__value__height');

let pokemonDatabase = [];
let id = 0;
let count = 0;
let infoPokemonDatabase = new Object();
function catchId(url) {
    const urlId = url.split("/");
    const id = urlId[6];
    return (id);
}

function searchPokemons() {

    if (!inputBuscarPokemon.value) {
        btnLoad.disabled = false;

        id = 0;
        pokemons.innerHTML = '';

        loadPokemonCards();
        return;
    } else {
        btnLoad.disabled = true;
        loadFilteredPokemonCards();
        return;
    }

}

modalClose.addEventListener('click', (event) => {
    event.stopPropagation();
    modalContainer.classList.remove('active');
});


btnLoad.addEventListener('click', (event) => {
    loadPokemonCards();
});


inputBuscarPokemon.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter') return;
    searchPokemons();
});

searchButton.addEventListener('click', (event) => {
    event.preventDefault();
    event.stopPropagation();
    searchPokemons();
});

async function fillModal(pokemon) {
    modalContainer.classList.add('active');
    let currentId = catchId(pokemon.url);
    let data = {};

    try {
        const response = await api.get("pokemon/" + currentId);
        data = response.data;
    } catch (error) {
        console.log(error);
    }

    modalName.textContent = data.name;
    modalPokemonImage.src = data.sprites.other.dream_world.front_default;
    modalPokemonImage.alt = data.name;

    modalCategories.innerHTML = ''
    for (const type of data.types) {
        const btnCategory = document.createElement('button');
        btnCategory.classList.add('btn', 'btn--category');
        btnCategory.textContent = type.type.name;
        modalCategories.appendChild(btnCategory);
    }
    modalValueHeight.textContent = `${data.height / 10}m`;
    modalValueWeight.textContent = `${data.weight / 10}kg`;
}
async function createPokemonCards() {

    if (pokemonDatabase === null) return;

    try {
        for (const pokemon of pokemonDatabase) {
            id = catchId(pokemon.url);
            if (id >= 10000) return;

            try {
                const response = await api.get("pokemon/" + id);
                infoPokemonDatabase = response;
            } catch (error) {
                console.log(error);
            }
            const pokemonDiv = document.createElement('div');
            pokemonDiv.classList.add('pokemon', infoPokemonDatabase.data.types[0].type.name);

            pokemonDiv.addEventListener('click', () => fillModal(pokemon));

            const pokemonCode = document.createElement('h3');
            pokemonCode.classList.add('pokemon__code', infoPokemonDatabase.data.types[0].type.name);
            pokemonCode.textContent = "#" + id;

            const pokemonImage = document.createElement('img');
            pokemonImage.classList.add('pokemon__image');

            if (infoPokemonDatabase.data.sprites.other.dream_world.front_default !== null) {
                pokemonImage.src = infoPokemonDatabase.data.sprites.other.dream_world.front_default;
            }
            pokemonImage.alt = pokemon.name;

            const pokemonName = document.createElement('h1');
            pokemonName.classList.add("pokemon__name", "content__flex", "align__center", "justify__center", infoPokemonDatabase.data.types[0].type.name);
            pokemonName.textContent = pokemon.name.substr(0, 1).toUpperCase() + pokemon.name.substr(1);
            if (pokemon.name.length > 12) {
                pokemonName.style.fontSize = '25px';
            }

            pokemons.appendChild(pokemonDiv);
            pokemonDiv.appendChild(pokemonCode);
            pokemonDiv.appendChild(pokemonImage);
            pokemonDiv.appendChild(pokemonName);
        }
    } catch (error) {
        console.log(error)
    }
}


async function loadFilteredPokemonCards() {
    try {
        pokemonDatabase = [];
        for (let i = 0; i < count; i = i + 20) {
            const response = await api.get(`pokemon?limit20&offset=${i}`);
            const { results } = response.data;

            for (const pokemon of results) {

                const { name } = pokemon;
                if (name.indexOf(inputBuscarPokemon.value.trim()) !== -1) {
                    pokemonDatabase.push(pokemon);
                }
            }
        }
        pokemons.innerHTML = '';
        createPokemonCards();

    } catch (error) {
        console.log(error);
    }
}
async function loadPokemonCards() {
    btnLoad.disabled = true;
    pokemonDatabase.slice(0, pokemonDatabase.length);

    try {
        const response = await api.get(`pokemon?limit20&offset=${id}`);
        const { results } = response.data;
        count = response.data.count;
        pokemonDatabase = results;
        createPokemonCards();
    } catch (error) {
        console.log(error);
    }
    btnLoad.disabled = false;
}

loadPokemonCards();


