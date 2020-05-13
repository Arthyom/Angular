import { Injectable } from '@angular/core';
import { ModelHeroe } from '../models/ModelHeroes';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map, delay } from "rxjs/operators";
import Swal from 'sweetalert2';


@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(
    private http : HttpClient
  ) { }

  crearHeroe( nuevoHeroe : ModelHeroe ){
    const url = environment.fireUrl + '/heroes.json';
    return this.http.post( url, nuevoHeroe )
    .pipe( map( (data:any)=>{
      return data.name;
    }));

    
  }


  getHeroes() {
    const url = environment.fireUrl + '/heroes.json';
    return this.http.get(url)
    .pipe(
     
      map( data => this.toArray(data)  )
    );
  }

  updateHeroe( heroeEditado: ModelHeroe ) {
    const url = environment.fireUrl+`/heroes/${heroeEditado.id}.json`;

    return this.http.put(url, heroeEditado);
  }

  toArray( data : object ){

    if( data === null ) { return []; }

    let heroes : ModelHeroe [] = [];

    Object.keys(data).forEach( (key: any) => {
      const heroe: ModelHeroe = data[key];
      heroe.id = key;
      heroes.push(heroe);
    });

    return heroes;

  }

  getHeroe( id: string ){
    const url = environment.fireUrl+`/heroes/${id}.json`;
    return this.http.get(url)
    .pipe( 
      map( (data: any) => {
        let heroe : ModelHeroe = new ModelHeroe();
        heroe.id = id;
        heroe.nombre = data.nombre;
        heroe.poder = data.poder;
        heroe.vivo = data.vivo;
        return heroe;
      })
    );
  }

  deleteHeroes (id: string){
    const url = environment.fireUrl+`/heroes/${id}.json`;
    return this.http.delete( url );
  }

}
