import { PokeapiResponse } from '../interfaces/pokeapi-response-interface';
import { httpAdapter } from '../interfaces/httpAdapter';

export class Pokemon {
  name: string = 'No name';
  profileImage: string = 'No image';

  constructor(public readonly id: number, private readonly http: httpAdapter) {}

  async getBasicInformation() {
    const data = await this.http.getRequest<PokeapiResponse>(this.id);

    this.name = data.name;
    const image = data.sprites.other?.['official-artwork'].front_default;
    if (image) this.profileImage = image;
  }
}
