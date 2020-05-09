import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../../services/chats.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensajes: Mensajes [] = [];
  nuevoMensaje: Mensajes = {  mensaje : '', nombre : 'wfls'};
  constructor( private fs: ChatsService ) { }

  ngOnInit() {
   this.fs.getMensajes( ).subscribe( data => this.mensajes = data );
  }

  enviarMensaje(){
    this.fs.agregarMensaje(this.nuevoMensaje)
          .then( data => {
            this.nuevoMensaje.mensaje = ''
          });
  }

}
