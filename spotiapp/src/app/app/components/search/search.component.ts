import { Component, OnInit } from '@angular/core';
import { SpotifyService } from 'src/app/services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists : any [] = [];
  cargar = false;
  constructor(
    public spotify  :  SpotifyService
  ) { }

  ngOnInit() {
   
  }

  buscar( termino: string ){
    this.cargar = true;
    console.log('artists ---', termino);

    this.spotify.spotify_Search_Artist(termino).subscribe( (data:any) => {
      console.log('artists', data);
      this.artists = data;
      this.cargar = false;
    });
  }

}
