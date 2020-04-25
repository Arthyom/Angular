import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css']
})
export class TemplateComponent implements OnInit {


  datos : Object = {
    name : 'beto',
    lastName: 'beles',
    email: 'b@a.com'
  };

  constructor() { }

  ngOnInit() {
  }

  submit( formulario: NgForm ){
    console.log('formulario enviado', formulario);

    console.log('valor', formulario.value);
  }

}
