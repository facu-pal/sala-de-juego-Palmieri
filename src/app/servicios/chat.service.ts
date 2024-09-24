import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, Firestore, orderBy, query } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private chatSubject = new BehaviorSubject<any[]>([]);  // Crear un BehaviorSubject
  public chatCollection$ = this.chatSubject.asObservable();  // Observable público

  constructor(private firestore: Firestore) { 
    this.obtenerMensajes();
  }

  crearMensajes(usuario: string, mensaje: string) {
    const col = collection(this.firestore, 'chat');
    addDoc(col, { fecha: new Date(), "user": usuario, mensaje: mensaje });
  }

  obtenerMensajes() {
    const col = collection(this.firestore, 'chat');
    const obtenerQuery = query(col, orderBy('fecha', 'asc')); // Ordenar por fecha
    const observable = collectionData(obtenerQuery);

    observable.subscribe((respuesta: any) => {
      this.chatSubject.next(respuesta);  // Emitir nuevos mensajes
    });
  }
}






