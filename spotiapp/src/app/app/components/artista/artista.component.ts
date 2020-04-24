import { Component, OnInit } from '@angular/core';
import { ActivatedRoute  } from "@angular/router";

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artist : any = {};
  constructor( private ruta : ActivatedRoute) { }

  ngOnInit() {
    console.log('entrando en el artista')
   // this.ruta.params.subscribe( data => { console.log('data en el arthisa', data ); } )
  }

}
