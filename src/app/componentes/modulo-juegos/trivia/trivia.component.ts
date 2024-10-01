import { AfterViewInit, Component, OnInit  } from '@angular/core';
import { PokemonService } from '../../../servicios/preguntas.service';
import { LoggerJuegoService } from '../../../servicios/logJuego.service';

@Component({
  selector: 'app-trivia',
  templateUrl: './trivia.component.html',
  styleUrl: './trivia.component.css'
})
export class TriviaComponent implements OnInit, AfterViewInit {

	gameQuestion: any;
	showCorrectAnswer: boolean = false;
	score: number = 0;
	flagGame: boolean = false;
	nombrePokemon="";

  
	constructor(private _pokemonService: PokemonService,public loggerJuegoService: LoggerJuegoService) {}
  
	ngOnInit(): void {}
  
	ngAfterViewInit(): void {
	  this.newQuestion();
	}
	
	async newQuestion() {
	  try {
		// Obtener un Pokémon aleatorio
		const randomPokemon = await this._pokemonService.getRandomPokemon();
		const correctPokemonId = randomPokemon.id; // ID del Pokémon correcto
  
		// Obtener opciones (3 Pokémon más el correcto)
		const options = await this._pokemonService.getPokemonOptions(correctPokemonId, 3);
		options.push(randomPokemon); // Asegúrate de incluir el Pokémon correcto
  
		// Mezclar las opciones
		this.shuffleArray(options);
  
		this.gameQuestion = {
		  image: randomPokemon.sprites.front_default, // Ajusta según la propiedad de la imagen
		  name: randomPokemon.name, // Nombre del Pokémon correcto
		  options: options.map(option => option.name) // Mapea a solo los nombres de las opciones
		};
		this.nombrePokemon=randomPokemon.name;
		console.log(`Pokémon correcto: ${randomPokemon.name}`);

	  } catch (error) {
		console.error('Error al cargar la nueva pregunta:', error);
	  }
	}
	
	evaluateAnswer(answer: string) {
	  return answer === this.gameQuestion.name;
	}
	
	showCorrect() {
	  this.showCorrectAnswer = true;
	  setTimeout(() => {
		this.showCorrectAnswer = false;
		this.newQuestion();
	  }, 500);
	}
	
	onAnswer(answer: string) {
	  if (!this.showCorrectAnswer) {
		if (this.evaluateAnswer(answer)) {
		  this.score++;
		  this.showCorrect();
		} else {
		  this.flagGame = true;
		}
		
	  }
	}
  
	// Método para mezclar un array
	shuffleArray(array: any[]) {
	  for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]]; // Intercambiar elementos
	  }
	}

	closeSuccessAlert() {
		this.loggerJuegoService.logGameResult(this.score,"preguntados");

		this.flagGame = false;
		this.score =0;
		this.showCorrect();
	  }

  }
