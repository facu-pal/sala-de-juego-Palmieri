import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  readonly baseUrl = 'https://pokeapi.co/api/v2/';
  
  // Método para obtener un Pokémon aleatorio
  async getRandomPokemon(): Promise<any> {
    try {
      const randomId = Math.floor(Math.random() * 898) + 1; // Hay 898 Pokémon hasta la generación 8
      const response = await fetch(`${this.baseUrl}pokemon/${randomId}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener Pokémon:', error);
      throw error;
    }
  }

  // Método para obtener una lista de opciones (otros Pokémon)
  async getPokemonOptions(correctPokemonId: number, amount: number): Promise<any[]> {
    try {
      const options: any[] = [];
      while (options.length < amount) {
        const randomId = Math.floor(Math.random() * 898) + 1;
        if (randomId !== correctPokemonId) {
          const response = await fetch(`${this.baseUrl}pokemon/${randomId}`);
          const data = await response.json();
          options.push(data);
        }
      }
      return options;
    } catch (error) {
      console.error('Error al obtener opciones de Pokémon:', error);
      throw error;
    }
  }

  // Método para obtener detalles de un Pokémon específico
  async getPokemonDetails(id: number): Promise<any> {
    try {
      const response = await fetch(`${this.baseUrl}pokemon/${id}`);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error al obtener detalles del Pokémon:', error);
      throw error;
    }
  }
}