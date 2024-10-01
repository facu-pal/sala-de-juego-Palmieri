import { Component,OnInit  } from '@angular/core';
import { LoggerJuegoService } from '../../../servicios/logJuego.service';

@Component({
  selector: 'app-aim',
  templateUrl: './aim.component.html',
  styleUrl: './aim.component.css'
})
export class AimComponent implements OnInit  {
  score = 0;
  gameStarted = false;
  remainingTime = 30;
  targets: any[] = [];
  flagGame:boolean= false;

  private maxTargets = 2;
  private gameInterval: any;
  private targetInterval: any;
  
	constructor(public loggerJuegoService: LoggerJuegoService){}

  ngOnInit() {}

  startGame() {
    this.score = 0;
    this.gameStarted = true;
    this.remainingTime = 30;

    // Inicia el temporizador del juego
    this.gameInterval = setInterval(() => {
      this.remainingTime--;

      if (this.remainingTime === 0) {
        this.endGame();
      }
    }, 1000);

    // Genera objetivos aleatorios
    this.generateTargets();
  }

  generateTargets() {
    this.targetInterval = setInterval(() => {
      if (this.targets.length < this.maxTargets) {
        const newTarget = this.createTarget();
        this.targets.push(newTarget);
      }
    }, 1000); // Aparece un objetivo nuevo cada segundo
  }

  createTarget() {
    const minSize = 30;  // Tamaño mínimo del objetivo
    const maxSize = 80;  // Tamaño máximo del objetivo
  
    // Genera un tamaño aleatorio entre minSize y maxSize
    const targetSize = Math.random() * (maxSize - minSize) + minSize;
  
    const x = Math.random() * 85; // Genera coordenadas aleatorias
    const y = Math.random() * 85;
  
    // Crea el objetivo con un tamaño aleatorio
    return {
      style: {
        top: `${y}%`,
        left: `${x}%`,
        width: `${targetSize}px`,
        height: `${targetSize}px`,
      }
    };
  }

  missTarget() {
    this.score--;  // Resta un punto al fallar un objetivo
    if (this.score < 0) {
      this.score = 0;  // Asegúrate de que la puntuación no sea negativa
    }
  }

  hitTarget(target: any) {
    this.score++;
    this.targets = this.targets.filter(t => t !== target);

    // Aparece un nuevo objetivo
    if (this.targets.length < this.maxTargets) {
      this.targets.push(this.createTarget());
    }
  }

  endGame() {
    this.gameStarted = false;
    
    clearInterval(this.gameInterval);
    clearInterval(this.targetInterval);
    this.targets = [];
    this.flagGame = true;

  }

  closeSuccessAlert() {
    this.loggerJuegoService.logGameResult(this.score,"aim-trainer");
		this.flagGame = false;
		this.score =0;
	  }
}
