import { Component } from '@angular/core';
import {BotonChatComponent} from '../chat-room/boton-chat/boton-chat.component'
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Auth } from '@angular/fire/auth';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ BotonChatComponent,RouterOutlet,RouterLink, RouterLinkActive,CommonModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  constructor(private router: Router,public auth: Auth) {

  } 
  flagError: boolean = false;
  msjError: string = "";



  selecGame(game: string) {
		// if (!this.auth.currentUser) {
		// 	this.msjError = "para jugar inicie sesion";
    //   this.flagError = true;
		// } else this.router.navigateByUrl(`juego/${game}`);
    this.msjError =game;
    console.log(this.msjError);
    this.router.navigateByUrl(`juego/${game}`);
	}
  
  closeErrorAlert() {
    this.flagError = false; 
  }



}
