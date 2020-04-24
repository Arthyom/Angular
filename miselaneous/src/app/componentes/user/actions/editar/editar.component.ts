import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {

  id: string ;
  constructor(
    private act : ActivatedRoute
  ) { }

  ngOnInit() {
    this.act.parent.params.subscribe( parametrosPadre =>{
      console.log('parametros padre desde hijo', parametrosPadre)
      this.id =  parametrosPadre.id;
    });
  }


}
