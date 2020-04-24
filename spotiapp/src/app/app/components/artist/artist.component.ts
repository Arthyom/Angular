import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist : any ;
  topTracks : any[] = [];
  cargar = true;
  constructor( private spoti: SpotifyService, private ruta : ActivatedRoute) { 
  }

  ngOnInit() {
    this.ruta.params.subscribe( (artist) => {
      const id = artist.id;
      this.spoti.spotify_Get_Artist(id).subscribe( (data) =>{
        this.spoti.spotify_Get_Artist_TopTracks( id ).subscribe( (top) =>{ this.topTracks = top} );
        this.artist = data;
        console.log('entrando en el artista', data)
        this.cargar = false;
      });
    });

    
  }
}
