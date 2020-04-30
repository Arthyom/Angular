import { Component, OnInit } from '@angular/core';
import { ChatsService } from '../../services/chats.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  constructor( private fs: ChatsService ) { }

  ngOnInit() {
    this.fs.chats.subscribe( data =>{
      console.log('dadada', data);
    });
  }

  enviarMensaje(){
    console.log('popopop')
  }

}
