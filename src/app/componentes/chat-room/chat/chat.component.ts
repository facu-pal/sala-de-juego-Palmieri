import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { SesionService } from '../../../servicios/sesion.service';
import { ChatService } from '../../../servicios/chat.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-chat',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('contenidoChat') contenidoChat!: ElementRef;
  mensaje!: string;
  mensajes: any[] = [];
  chatSubscription!: Subscription;

  constructor(public sesion: SesionService, private chat: ChatService) {}

  ngOnInit() {
    this.chatSubscription = this.chat.chatCollection$.subscribe(mensajes => {
      this.mensajes = mensajes;  // Actualiza el array local de mensajes
      this.scrollToBottom(); // Desplazarse a la parte inferior cuando se reciben mensajes
    });
  }

  ngAfterViewInit() {
    this.scrollToBottom(); // Desplazarse a la parte inferior después de que el componente se inicialice
  }

  ngOnDestroy() {
    if (this.chatSubscription) {
      this.chatSubscription.unsubscribe();  // Cancela la suscripción al destruir el componente
    }
  }

  enviarMensaje() {
    if (this.mensaje.trim()) {
      this.chat.crearMensajes(this.sesion.getUsuario(), this.mensaje);
      this.limpiarCampos();
    }
  }

  limpiarCampos() {
    this.mensaje = '';
  }

  private scrollToBottom() {
    if (this.contenidoChat) {
      requestAnimationFrame(() => {
        this.contenidoChat.nativeElement.scrollTop = this.contenidoChat.nativeElement.scrollHeight;
      });
    }
  }
}
