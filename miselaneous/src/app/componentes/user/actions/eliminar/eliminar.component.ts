import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-eliminar',
  templateUrl: './eliminar.component.html',
  styleUrls: ['./eliminar.component.css']
})
export class EliminarComponent implements OnInit {
  id: string;

  constructor(
    private act : ActivatedRoute
  ) { }

  ngOnInit() {
    this.act.parent.params.subscribe( parametrosPadre =>{
      this.id =  parametrosPadre.id;
    });    
  }


}
