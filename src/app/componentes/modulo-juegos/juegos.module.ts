import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JuegosRoutingModule } from './juegos-routing.module';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import {TriviaComponent} from './trivia/trivia.component';
import {AimComponent} from './aim/aim.component';


@NgModule({
  declarations: [
    AhorcadoComponent,
    MayorMenorComponent,
    TriviaComponent,
    AimComponent
  ],  
  exports : [
    AhorcadoComponent,
    MayorMenorComponent,
    TriviaComponent,
    AimComponent
  ],
  imports: [
    CommonModule,
    JuegosRoutingModule
  ]
})
export class JuegosModule { }
