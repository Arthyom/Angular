import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estilos',
  templateUrl: './estilos.component.html',
  styleUrls: ['./estilos.component.css']
})
export class EstilosComponent implements OnInit {
  
  cargando = true;
  
  constructor() { }

  ngOnInit() {
    setTimeout(() => {
      this.cargando = false
    }, 4000);
  }

}
