import { CommonModule } from '@angular/common';
import { Component,OnInit, OnDestroy } from '@angular/core';

import { LoggerJuegoService } from '../../servicios/logJuego.service';

@Component({
  selector: 'app-puntaje',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './puntaje.component.html',
  styleUrl: './puntaje.component.css'
})
export class PuntajeComponent implements OnInit, OnDestroy {
  juegoSeleccionado: string | null = null;
  cargando: boolean = false; 
  constructor(public LoggerJuegoService : LoggerJuegoService) {}

 
  ngOnInit() {
    this.seleccionarJuego('aim-trainer'); 
  }

  seleccionarJuego(juego: string) {
    this.juegoSeleccionado = juego;
    this.cargando = true; 
    this.LoggerJuegoService.obtenerDatos(juego).then(() => {
      this.cargando = false;  
    });
  }

  ngOnDestroy() {
    this.LoggerJuegoService.coleccionResultados = []; 
  }


}
