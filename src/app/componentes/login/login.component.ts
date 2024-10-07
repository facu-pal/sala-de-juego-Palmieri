import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';

import { Router, RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { LoggerService } from '../../servicios/logger.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  mail: string = "";
  contra: string = "";
  flagError: boolean = false;
  flagSuccess: boolean = false;
  msjError: string = "";

  constructor(public auth: Auth,public router: Router,public loggerService: LoggerService) {}
  

  login() {
    if (!this.validarCampo()) {
      return;
    }
    //poner que siempre las credenciales
    signInWithEmailAndPassword(this.auth, this.mail, this.contra).then((res) => {
      this.flagError = false;
      this.flagSuccess = true; 
       }).catch((e) => {
          this.flagError = true;
           switch (e.code) {
            case "auth/invalid-credential":
            this.msjError = "usuario no encontrado";
            break;
            case "auth/user-not-found":
              this.msjError = "No existe una cuenta con este correo electrónico.";
              break;
              case "auth/wrong-password":
                this.msjError = "La contraseña es incorrecta.";
                break;
                case "auth/too-many-requests":
                  this.msjError = "Demasiados intentos fallidos. Por favor, intenta más tarde o restablece tu contraseña.";
                  break;
                 
            default: 
              this.msjError = "Usuario o contraseña incorrectos."
               break;
        }
     })
  }

  validarCampo(){
    if (!this.mail || this.mail.trim() === "") {
      this.flagError = true;
      this.msjError = "El campo de correo no puede estar vacío";
      return false;
    }
  
    if (!this.contra || this.contra.trim() === "") {
      this.flagError = true;
      this.msjError = "El campo de contraseña no puede estar vacío";
      return false;
    }
    if (this.contra.length < 6) {
      this.flagError = true;
      this.msjError = "La contraseña debe tener al menos 6 caracteres";
      return false;
    }
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(this.mail)) {
      this.flagError = true;
      this.msjError = "Formato de correo no válido";
      return false;
    }

    this.flagError = false;
    return true;
  }

    limpiarCampos() {  
      this.mail = "";
      this.contra = "";
    }

    closeErrorAlert() {
      this.flagError = false; 
    }
    closeSuccessAlert() {
      this.flagSuccess = false;
      this.limpiarCampos();
      this.loggerService.logger();
      this.router.navigate(['/home']);
    }

    registroAutomatico() {
      
        this.mail = "fac@gmail.com";
        this.contra = "123123";
    }
     
}
