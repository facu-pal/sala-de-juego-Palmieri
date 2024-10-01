import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AhorcadoComponent } from './ahorcado/ahorcado.component';
import { MayorMenorComponent } from './mayor-menor/mayor-menor.component';
import {TriviaComponent} from './trivia/trivia.component';
import {AimComponent} from './aim/aim.component';
const routes: Routes = [
  {
    path: 'ahorcado',
    component: AhorcadoComponent
  },
  {
    path: 'mayor',
    component: MayorMenorComponent
  },
  {
    path: 'preguntados',
    component: TriviaComponent
  },  
  {
    path: 'aim-game',
    component: AimComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})


export class JuegosRoutingModule { }
