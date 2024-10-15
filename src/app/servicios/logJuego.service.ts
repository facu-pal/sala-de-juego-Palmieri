import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
// import { addDoc, collection, Firestore } from '@angular/fire/firestore';
import { addDoc, collection, collectionData, Firestore, limit, orderBy, query, where } from '@angular/fire/firestore';
import { firstValueFrom } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class LoggerJuegoService {

  public coleccionResultados: any[] = [];

  constructor(private firestore: Firestore, private auth: Auth) { }


  logGameResult(score: number, gameName: string) {
    let col = collection(this.firestore, 'puntoJuegos');
    addDoc(col, { "puntos":score,"juego":gameName, "user": this.auth.currentUser?.email,fecha: new Date() });
  }

  async obtenerDatos(juegoSeleccionado: string): Promise<void> {
    let col = collection(this.firestore, 'puntoJuegos');
    const obtenerQuery = query(
      col,
      where('juego', '==', juegoSeleccionado),
      orderBy('puntos', 'desc')
    );

    const observable = collectionData(obtenerQuery);
    this.coleccionResultados = await firstValueFrom(observable);  // Esperamos a que el observable se resuelva
  }
}