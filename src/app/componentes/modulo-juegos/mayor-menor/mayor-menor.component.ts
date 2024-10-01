import { Component, OnInit } from '@angular/core';

import { CartasService } from '../../../servicios/cartas.service';
import { Card } from './models/card';
import { CardsDeck } from './models/cards-deck';
import { LoggerJuegoService } from '../../../servicios/logJuego.service';

@Component({
  selector: 'app-mayor-menor',
  templateUrl: './mayor-menor.component.html',
  styleUrl: './mayor-menor.component.css'
})
export class MayorMenorComponent   {
 
  gameStatus: 'initial'|'in-progress'|'finished' = 'initial';
	score:number = 0;
	activeCardValue:string = '1';
	flagGame: boolean = false;

	cardsDeck: CardsDeck = new CardsDeck;
	cards: Card[] = [];
	showedCards: Card[] = [];
	activeCard: Card = new Card();
	previousCard: Card = new Card();

	 constructor(private _cardsService:CartasService,public loggerJuegoService: LoggerJuegoService) { }

 // Cambiamos ngOnInit para ser asíncrono y usar los nuevos métodos del servicio
 async ngOnInit(): Promise<void> {
  try {
    // Llamamos al método asíncrono que baraja el mazo y obtiene el deckId
    await this._cardsService.shuffleDeck();
    
    // Obtenemos 52 cartas utilizando el deckId
    const cardData = await this._cardsService.getCards(52);
    this.cards = cardData['cards'];

    console.log('Baraja:', this.cards);

    // Iniciamos el juego mostrando la primera carta
    this.nextCard();
    this.gameStatus = 'in-progress';
    
  } catch (error) {
    console.error('Error durante la inicialización del juego:', error);
  }
}

	 nextCard(){
	 	this.activeCard = this.cards.splice(0, 1)[0];
	 	this.showedCards.push(this.activeCard);
	 }

   onNextCardSelected(guest: string) {
    this.previousCard = this.activeCard;
    this.nextCard();
    let result = this.compareCards(this.previousCard, this.activeCard);

    if (result === guest) {
        this.score += 1; // Incrementar el score
    } else if (result !== 'equal') {
        this.flagGame = true; 
    }
}

	 compareCards(previousCard:Card, activeCard:Card){
	 	let previousCardValue = 0;
	 	let activeCardValue = 0;
	 	let stringValues = [
	 		{ name: 'ACE', value: 1	},
	 		{ name: 'JACK',	value: 11 },
	 		{ name: 'QUEEN', value: 12 },
	 		{ name: 'KING',	value: 13}
	 	];

	 	stringValues.forEach(x => {
	 		if (x.name == previousCard.value) {
	 			previousCardValue = x.value;
	 		}
	 		if (x.name == activeCard.value) {
	 			activeCardValue = x.value;
	 		}
	 	})

	 	if (previousCardValue == 0) {
	 		previousCardValue = parseInt(previousCard.value);
	 	}

	 	if (activeCardValue == 0) {
	 		activeCardValue = parseInt(activeCard.value);
	 	}

	 	if (activeCardValue == previousCardValue) {
	 		return 'equal';
	 	}

	 	if (activeCardValue > previousCardValue) {
	 		return 'bigger';
	 	}
	 	return 'lower';
	 }

	 resetGame(){
	 	this.cards.push(...this.showedCards.splice(0));

	 	if (!this.cards.includes(this.activeCard)) {
	 		this.cards.push(this.activeCard);
	 	}

	 	this.cards = this.shuffleArray(this.cards);
	 	this.score = 0;
		
	 }

	 shuffleArray(array:any) {
	 	for (var i = array.length - 1; i > 0; i--) {
	 		var j = Math.floor(Math.random() * (i + 1));
	 		var temp = array[i];
	 		array[i] = array[j];
	 		array[j] = temp;
	 	}
	 	return array;
	 }

   
   closeSuccessAlert() {
	this.loggerJuegoService.logGameResult(this.score,"mayor-menor");
	this.flagGame = false;
    this.resetGame();

	  }

}
