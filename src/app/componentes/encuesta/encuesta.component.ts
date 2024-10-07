import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {encuesta} from '../../classes/encuesta';
import {DatabaseService} from '../../servicios/database.service';
import { ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-encuesta',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './encuesta.component.html',
  styleUrl: './encuesta.component.css'
})
export class EncuestaComponent {
	encuestaForm: FormGroup;
  flag:boolean = false;
	constructor(private dbService: DatabaseService, private fb: FormBuilder, private router: Router,private cdr: ChangeDetectorRef) {
		this.encuestaForm = fb.group({
			nombre: [
				'',
				[
					Validators.required,
					Validators.pattern(/^[a-z/A-Z]/),
				]
			],
			apellido: [
				'',
				[
					Validators.required,
					Validators.pattern(/^[a-z/A-Z]+$/),
				]
			],
			email: [
				'',
				[
					Validators.required,
					Validators.email,
				]
			],
			edad: [
				18,
				[
					Validators.required,
					Validators.min(18),
					Validators.max(99),
				]
			],
			celNo: [
				'',
				[
					Validators.required,
					Validators.pattern(/^\d{10}$/),
				]
			],
			favGame: [
				'',
				[
					Validators.required,
					this.favGameValidator,
				]
			],
			sugerencia: [
				'',
				[
					Validators.required,
					Validators.maxLength(255),
				]
			],
			puntuacion: [
				0,
				[
					Validators.required,
					Validators.min(0),
					Validators.max(5),
				]
			]
		});
	}

	private favGameValidator(control: AbstractControl): null | object {
		const game = <string>control.value;
		const validGames = ['ahorcado', 'mayor-menor', 'preguntados', 'aim-traini', 'none'];

		if (!validGames.includes(game)) {
			return { invalidGame: true };
		}

		return null;
	}

	async submit() {
		const nombre = this.encuestaForm.get('nombre')?.value;
		const apellido = this.encuestaForm.get('apellido')?.value;
		const email = this.encuestaForm.get('email')?.value;
		const edad = this.encuestaForm.get('edad')?.value;
		const celNo = this.encuestaForm.get('celNo')?.value;

		const favGame = this.encuestaForm.get('favGame')?.value;
		const sugerencia = this.encuestaForm.get('sugerencia')?.value;
		const puntuacion = this.encuestaForm.get('puntuacion')?.value;

		const encuestaObj = new encuesta(nombre, apellido, email, edad, celNo, favGame, sugerencia, puntuacion);
		this.dbService.agregarDatos('encuesta', encuestaObj);
    this.flag = true;
	}

	clearInputs() {
		this.encuestaForm.setValue({
			nombre: '',
			apellido: '',
			email: '',
			edad: 18,
			celNo: '',
			favGame: '',
			sugerencia: '',
			puntuacion: 0
		});
	}

  otraEncuesta() {
    
    this.flag = false; 
    this.clearInputs();
    this.cdr.detectChanges();
    console.log( this.flag);
  }

  irHome() {
    this.router.navigateByUrl(`home`);
  }


  validateNumber(event: KeyboardEvent): void {
    const allowedKeys = ['Backspace', 'Tab', 'Enter', 'ArrowLeft', 'ArrowRight'];
    if (!allowedKeys.includes(event.key) && (event.key < '0' || event.key > '9')) {
      event.preventDefault();
    }
  }

  currentValue: number = 0; // Valor inicial

  updateValue(event: Event) {
    const target = event.target as HTMLInputElement; // Tipo assertion
    this.currentValue = Number(target.value); // Actualiza el valor actual
  }


}
