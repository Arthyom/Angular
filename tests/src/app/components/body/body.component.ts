import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  visible = false;

  personajeO : any = {
    nombre: '',
    frases: [],
    puesto: ''
  }

  personajes = [
    {
      nombre: 'Luffy',
      frases: ['sere el rey de los piratas', 'gomu-gomo no'],
      puesto: 'Capitan'
    },

    {
      nombre: 'Namy',
      frases: ['dibujare el mapa del mundo'],
      puesto: 'Navegante'
    },

    {
      nombre: 'Zoro',
      frases: ['sere el mejor espadachin'],
      puesto: 'Co-Capitan'
    },

    {
      nombre: 'Robbin',
      frases: ['descubrire la historia perdida'], 
      puesto: 'Historiadora'
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
