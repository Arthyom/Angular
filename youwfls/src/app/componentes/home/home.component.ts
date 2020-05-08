import { Component, OnInit } from '@angular/core';
import { YoutubeService } from '../../serivicios/youtube.service';

declare var $:any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  videos: any [] = [];
  videoSeleccionado: any ;
  constructor( public ys : YoutubeService ) { }

  ngOnInit() {
    this.ys.getVideosFromChanel().subscribe( (data) =>{
      this.videos = data;

      console.log('videos en el componente', this.videos);
    });
  }

  modal(video: any){
    this.videoSeleccionado = video;
    $('#exampleModal').modal();
  }

  modalCerrar(){
    this.videoSeleccionado = null;
    $('#exampleModal').modal('hide');
  }

  cargar(){
    this.ys.getVideosFromChanel().subscribe( (data) =>{
      this.videos.push( ... data );

      console.log('videos en el componente', this.videos);
    }); 
  }

}
