import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() collection : any [ ] = [];
  constructor(
    private router : Router
  ) { }

  ngOnInit() {}

  verArtista(item: any){
    if ( item. type === 'album') {
      this.router.navigate(['artista', item.artists[0].id ]);
    } 
    else {
      this.router.navigate(['artista', item.id ]);
    }
    console.log('artista seleccionado', item);
  }

}
