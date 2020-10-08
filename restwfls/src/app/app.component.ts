import { Component } from '@angular/core';
import { HttpClient, HttpRequest  } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {



  constructor( private clienteHttp: HttpClient ) {}

  title = 'rest';
  data: any;
  urlbase = 'https://inicialunes.com/public';
  action = '';
  credenciales = {user: null, pass: null, method: null, action: null, url: `${this.urlbase}/${this.action}`  };

  addicional: any;

  sendPost() {
    try {

      this.clienteHttp.request( this.credenciales.method,
        this.credenciales.url, {body: this.credenciales}  )
        .subscribe( (data) => this.data = data );


    } catch (error) {

      console.log(error);
      alert( '[ERROR]...Debe indicar el METODO ' );

    }
  }

  cambiarAccion() {
    this.credenciales.action = this.action;
    this.credenciales.url = `${this.urlbase}/${this.action}`;
    console.log('haciando algo');
  }

  unir() {

    try {
      const ad = JSON.parse( this.addicional );

      for( let key in ad ) 
        this.credenciales[key] = ad[key];

      console.log(this.credenciales);

    } catch (error) {
      console.log(error);;
    }

  }

 

}
