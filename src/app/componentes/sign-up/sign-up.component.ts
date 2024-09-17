import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';  
import { Auth, createUserWithEmailAndPassword } from '@angular/fire/auth';
import { LoggerService } from '../../servicios/logger.service';

import { Router, RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [RouterLink,RouterLinkActive,FormsModule,CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})

export class SignUpComponent {
  mail: string = "";
  contra: string = "";
  contraConfir: string = "";
  flagError: boolean = false;
  flagSuccess: boolean = false;
  msjError: string = "";

  constructor(public auth: Auth,public router: Router,private loggerService: LoggerService) {}

  limpiarCampos(){
    this.mail = "";
    this.contra = "";
    this.contraConfir = "";
  }

  validacionPassword(): boolean {
    if (this.contra !== this.contraConfir) {
      this.flagError = true;
      this.msjError = "Las contraseñas no coinciden";
      return false;
    }
    if (this.contra.length < 6) {
      this.flagError = true;
      this.msjError = "La contraseña debe tener al menos 6 caracteres";
      return false;
    }
    this.flagError = false;
    return true;
  }

  validateEmail(): boolean {
    this.mail = this.mail.trim();

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(this.mail)) {
      this.flagError = true;
      this.msjError = "Formato de correo no válido";
      return false;
    }
    
    this.flagError = false;
    return true;
  }

  Register() {
    if (!this.validateEmail()) {
      return;
    }

    if (!this.validacionPassword()) {
      return;
    }

    createUserWithEmailAndPassword(this.auth, this.mail, this.contra)
      .then((res) => {
        this.flagError = false;
        this.flagSuccess = true; 
        console.log('Registro exitoso:', res);
      })
      .catch((e) => {
        this.flagError = true;
        console.log('Error en Firebase:', e.code);

        switch (e.code) {
          case "auth/invalid-email":
            this.msjError = "Email inválido";
            break;
          case "auth/email-already-in-use":
            this.msjError = "Email ya en uso";
            break;
            case " auth/weak-password":
              this.msjError = "La contraseña es demasiada corta";
              break;
          default:
            console.log(e.code);
            this.msjError = e.code;
            break;
        }
      });
  }

  closeErrorAlert() {
    this.flagError = false; 
  }
  closeSuccessAlert() {
    this.flagSuccess = false;
    this.limpiarCampos();
    this.router.navigate(['/home']);
    this.loggerService.logger();
  }
}
