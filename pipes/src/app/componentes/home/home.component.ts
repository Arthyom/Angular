import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  arreglo = [1,2,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
  PI = Math.PI;
  salario = 1034.11300;
  fecha = new Date();
  json = {
    "a": "aaaaaaa",
    "b": "bbbbbb",
    "c": 12.34,
    "d": [1,1,1,1,1,1,1],
    "k": 90
  };

  promesa = new Promise<any>( (resolve, reject) =>{
    setTimeout( () =>{
      resolve(['promesa', 1,1,1,1,1, 2,2,2,2])
    }, 9000);
  });

  urlBas = 'https://www.youtube.com/embed';
  urlDin = '18-Ye2L3ej8';

  visible = false;
  texto = ""

  constructor() { }


  ngOnInit() {
  }

}
