import { Component,OnInit } from '@angular/core';
import { LoggerJuegoService } from '../../../servicios/logJuego.service';

@Component({
  selector: 'app-ahorcado',
  templateUrl: './ahorcado.component.html',
  styleUrl: './ahorcado.component.css'
})
export class AhorcadoComponent implements OnInit {
	letters = [
		'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 
		'Ñ', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'
	];

  wordsList: string[] = [
    'Goku', 'Vegeta', 'Piccolo', 'Gohan', 'Trunks', 'Bulma', 'Krillin', 'Freezer', 'Cell', 'Majin',
    'Pikachu', 'Charizard', 'Bulbasaur', 'Squirtle', 'Jigglypuff', 'Eevee', 'Mewtwo', 'Lucario', 'Gengar', 'Snorlax',
    'Messi', 'Maradona', 'Aguero', 'Tevez', 'Mascherano', 'Dybala', 'alvarez', 'Riquelme', 'Higuain', 'Dibu',
    'Fútbol', 'Baloncesto', 'Tenis', 'Voleibol', 'Natación', 'Atletismo', 'Rugby', 'Golf', 'Boxeo', 'Hockey'
];

	playedWords:string[] = [];
	activeWord:string = '';
	splittedWord: string[] = 'casa'.split('');
	secretWord: string[] = [];

	lettersAlreadySelected:string[] = [];
	
	attemps:number = 0;

  gameStatus: 'initial'|'in-progress'|'finished' = 'initial';
	score:number = 0;
	
	constructor(public loggerJuegoService: LoggerJuegoService){}

	ngOnInit(): void {
		this.wordsList = this.shuffleArray(this.wordsList);
		this.newGame();
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

	newGame(){
		this.attemps = 8;
		this.lettersAlreadySelected = [];
		this.activeWord = this.wordsList.splice( 0, 1)[0];
		this.splittedWord = this.activeWord.split('');

		this.splittedWord = this.splittedWord.map(x => { 
			let uppercaseLetter = x.toUpperCase();
			let finalLetter =  this.removeAccents(uppercaseLetter);
			return finalLetter;
		})

		this.secretWord = this.splittedWord.map(x => {
			return '_';
		})
	}

	removeAccents (str:string) {
		return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
	} 

	onLetterSelected(letter:string) {
		this.lettersAlreadySelected.push(letter);
		
		if (this.splittedWord.includes(letter)) {
			if (!this.secretWord.includes(letter)) {
				
				for (let index = 0; index < this.splittedWord.length; index++) {
					const element = this.splittedWord[index].toUpperCase();
					if (element == letter) {
						this.secretWord[index] = letter;
						this.score += 5;
					}
				}

				if (!this.secretWord.includes('_')) {
					this.score += 25;
					this.playedWords.push(this.activeWord);
					setTimeout(() => {
						this.newGame();
					}, 2000);
				}
			}
		} else {
			this.attemps--;
			if (this.attemps == 0) {
				if (this.score > 0) {
					this.score -= 10;
				}
				this.onFailedGame();
			}
		}
	}

	onFailedGame(){
		this.loggerJuegoService.logGameResult(this.score,"ahorcado");
		this.score = 0;
		this.attemps =8;
		for (let index = 0; index < this.splittedWord.length; index++) {
			const element = this.splittedWord[index].toUpperCase();
			this.secretWord[index] = element;
		}
		setTimeout(() => {
			this.newGame();
		}, 2000);
	}
}