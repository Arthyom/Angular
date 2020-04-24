import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  releases : any [] = [];
  cargar = true;
  constructor(
    public spotify  :  SpotifyService
  ) { }

  ngOnInit() {
    this.spotify.spotify_Get_Browser().subscribe( (data:any) => {
      console.log('albums', data);
      this.releases = data;
      this.cargar = false;
    });
  }

}
