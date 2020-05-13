import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  private chatsCollection: AngularFirestoreCollection<Mensajes>;
  chats: Observable<Mensajes[]>;

  constructor( private af: AngularFirestore ) {}

  getMensajes(){
    this.chatsCollection = this.af.collection<Mensajes>('mensajes');
    return this.chatsCollection.valueChanges()
            .pipe( map( ( data ) => data ) );
  }

  agregarMensaje( nuevoMensaje: Mensajes ){
    return this.chatsCollection.add(nuevoMensaje)
  }
}
