import { Component, OnInit } from '@angular/core';
import { ModelHeroe } from '../../models/ModelHeroes';
import { NgForm } from '@angular/forms';
import { HeroesService } from '../../servicios/heroes.service';
import { ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  nuevoHeroe = new ModelHeroe();
  id : string = '';
  constructor( private ac: ActivatedRoute, public hs: HeroesService ) { }

  ngOnInit() { 
    this.ac.params.subscribe( data => this.id = data.id );

    if ( this.id !== 'nuevo' ) {

      this.hs.getHeroe(this.id).
          subscribe( data => this.nuevoHeroe = data);

    }

   }



  guardar(formulario: NgForm) {

    if ( this.id !== 'nuevo'){
      this.hs.updateHeroe(this.nuevoHeroe).subscribe( data =>{
       
        Swal.fire({
          title: 'Correcto',
          text:'El registro ha sido actualizado correctamente',
          confirmButtonText: 'Correcto'
        })
      });
    }
    else {
      this.crearHeroe();

      Swal.fire({
        title: 'Correcto',
        text:'El registro ha sido ceado correctamente',
        confirmButtonText: 'Correcto'
      });
   
      
    }

    this.nuevoHeroe = new ModelHeroe();


  }

  crearHeroe(){
    this.hs.crearHeroe( this.nuevoHeroe )
    .subscribe( data => {
      this.nuevoHeroe.id = data;
    });
  }

}
