import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class CartasService {
	readonly baseUrl = 'https://www.deckofcardsapi.com/api/deck/';
	private deckId: string = '';
  
	// Método para barajar el mazo y obtener el deckId
	async shuffleDeck(): Promise<void> {
	  try {
		const response = await fetch(`${this.baseUrl}new/shuffle/?deck_count=1`);
		const data = await response.json();
		this.deckId = data.deck_id;
	  } catch (error) {
		console.error('Error al barajar el mazo:', error);
	  }
	}
  
	// Método para obtener una cantidad de cartas
	async getCards(amount: number): Promise<any> {
	  try {
		const response = await fetch(`${this.baseUrl}${this.deckId}/draw/?count=${amount}`);
		const data = await response.json();
		return data;
	  } catch (error) {
		console.error('Error al obtener cartas:', error);
		throw error;
	  }
	}
  
	// Método auxiliar para obtener el valor de la carta
	getCardValue(card: any): number {
	  switch (card) {
		case 'ACE':
		  return 1;
		case 'JACK':
		  return 11;
		case 'QUEEN':
		  return 12;
		case 'KING':
		  return 13;
		default:
		  return Number.parseInt(card);
	  }
	}
  }