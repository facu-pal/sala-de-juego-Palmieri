import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { addDoc, collection, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class LoggerJuegoService {
  constructor(private firestore: Firestore, private auth: Auth) { }

  

  logGameResult(score: number, gameName: string) {
    let col = collection(this.firestore, 'puntoJuegos');
    addDoc(col, { "puntos":score,"juego":gameName, "user": this.auth.currentUser?.email,fecha: new Date() });
  }
}