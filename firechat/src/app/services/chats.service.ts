import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ChatsService {
  private chatsCollection: AngularFirestoreCollection<any>;
  chats: Observable<any[]>;

  constructor( private af: AngularFirestore ) {
    this.chatsCollection = af.collection<any>('mensajes');
    this.chats = this.chatsCollection.valueChanges();
  }
}
