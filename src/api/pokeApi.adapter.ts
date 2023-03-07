import { httpAdapter } from '../interfaces/httpAdapter';
import axios from 'axios';

const baseURL = 'https://pokeapi.co/api/v2/pokemon/';

export class PokeApiFetchAdapter implements httpAdapter {
  async getRequest<T>(id: number) {
    const resp = await fetch(`${baseURL}${id}`);
    const data: T = await resp.json();
    console.log('Request made with fetch');
    return data;
  }
}

export class PokeApiAxiosAdapter implements httpAdapter {
  async getRequest<T>(id: number) {
    const { data } = await axios.get<T>(`${baseURL}${id}`);
    console.log('Request made with axios');
    return data;
  }
}
