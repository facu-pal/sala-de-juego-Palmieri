import { Component } from '@angular/core';
// import { RouterOutlet,Router } from '@angular/router';
import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';

import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink, RouterLinkActive,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Sala-de-juego';


  constructor(private router: Router) {

  }

  goTo(path: string) {
    this.router.navigate([path]);
  }
}
