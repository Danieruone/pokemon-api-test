import './style.css';
import { Pokemon } from './clases/Pokemon';
import {
  PokeApiAxiosAdapter,
  PokeApiFetchAdapter,
} from './api/pokeApi.adapter';

const pokeApiAxios = new PokeApiAxiosAdapter();
const pokeApiFetch = new PokeApiFetchAdapter();

const pokemon = new Pokemon(1, pokeApiAxios);

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1 id="pokemonName">${pokemon.name}</h1>
    <div id="profileImage"></div>
  </div>
`;

pokemon.getBasicInformation().then(() => {
  const nameTitle = document.getElementById('pokemonName');
  const imageContainer = document.getElementById('profileImage');

  if (nameTitle) nameTitle.innerHTML = pokemon.name.toUpperCase();
  if (imageContainer)
    imageContainer.innerHTML = `<img src="${pokemon.profileImage}" />`;
});
