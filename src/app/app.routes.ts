import { Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { AboutMeComponent } from './componentes/about-me/about-me.component';
import { LoginComponent } from './componentes/login/login.component';
 import { SignUpComponent } from './componentes/sign-up/sign-up.component';
 import { ChatComponent } from './componentes/chat-room/chat/chat.component';
 import { EncuestaComponent } from './componentes/encuesta/encuesta.component';

import { PageNotFoundComponent } from './componentes/page-not-found/page-not-found.component';


import	{loggedGuard} from './guards/logged.guard';
import	{notLoggedGuard} from './guards/notLogged.guard';

export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: "full" },

    { path: 'home', component: HomeComponent },

    { path: 'sobreMi', component: AboutMeComponent },

    { path: 'iniciarSesion',canActivate: [notLoggedGuard], component: LoginComponent },

    { path: 'registrarse', canActivate: [notLoggedGuard], component: SignUpComponent },

    { path: 'chat',canActivate: [loggedGuard], component: ChatComponent },
    
    { path: 'encuesta',canActivate: [loggedGuard], component: EncuestaComponent },

    { path: 'juego',canActivateChild: [loggedGuard], loadChildren: () => import('./componentes/modulo-juegos/juegos.module').then(m => m.JuegosModule)},

    // La ruta comodin debe ir siempre al final
    { path: '**', component: PageNotFoundComponent },
];
