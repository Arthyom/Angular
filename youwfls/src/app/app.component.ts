import { Component, ViewChild, OnInit } from '@angular/core';
import {MatMenuModule, MatMenuTrigger} from '@angular/material/menu';
import { YoutubeService } from './serivicios/youtube.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'youwfls';
  
  videos: any [] = [];
  constructor( public ys : YoutubeService ) { }

  ngOnInit() {
    this.ys.getVideosFromChanel().subscribe( (data) =>{
      this.videos = data;

      console.log('videos en el componente', this.videos);
    });
  }
}


