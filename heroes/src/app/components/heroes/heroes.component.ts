import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../servicios/heroes.service';
import { ModelHeroe } from '../../models/ModelHeroes';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: ModelHeroe[] = [];
  cargando = true;
  constructor(
    public hs: HeroesService
  ) { }

  ngOnInit() {
    
    this.hs.getHeroes().subscribe( data => {
      this.heroes = data;
      this.cargando = false;
    });
  }

  eliminar(id: string, i: number) {
    Swal.fire({
      text: `Desea eliminar el registro`,
      title: 'Eliminar',
      showCancelButton: true,
      showConfirmButton: true,
      icon: 'question'
    }).then( (data) =>{
      if(data.value){
        console.log('lelelele', id);
        this.hs.deleteHeroes( id ).subscribe( data => {
          this.heroes.splice(i);
        });
      }
      else{
        console.log('-s-s-s-s-s')
      }
      
    });
    
  }

}
