import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  
  id: string;
  constructor(
    private act : ActivatedRoute
  ) { }

  ngOnInit() {
    this.act.parent.params.subscribe( parametrosPadre =>{
      console.log('parametros padre desde hijo', parametrosPadre);
      this.id =  parametrosPadre.id;
    });
  }


}
