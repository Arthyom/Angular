import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators, FormArray } from "@angular/forms";
import { Observable } from 'rxjs/internal/Observable';


@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  formulario : FormGroup;
  usuario:Object = {
    nombre: 'alfredo', apellidos: 'gonzalez', correo: 'a@g.mx'
  };

  cambioDeNombre: string;
  cambioEnForm : any;
  cambioEstadoForm : any;



  constructor() {
    this.formulario = new FormGroup({
      'nombre' : new FormControl( '', Validators.required),
      'apellidos' : new FormControl ( '', [Validators.required, this.noGatishi]),
      'correo' : new FormControl( '', Validators.required),
      'p1' : new FormControl( 'password', Validators.required),
      'p2' : new FormControl( 'comprobar', [Validators.required]),

      'pasatiempos' : new FormArray([
        new FormControl( '', Validators.required)
      ]),

      'usuario' : new FormControl( '', Validators.required, this.existeUsuario )

    });

    this.formulario.get('p2').setValidators( this.contraIgual.bind(this.formulario) );

    this.formulario.controls['nombre'].valueChanges.subscribe( data => this.cambioDeNombre = data);
    this.formulario.valueChanges.subscribe( data => this.cambioEnForm = data );
    this.formulario.statusChanges.subscribe( data => this.cambioEstadoForm = data)

    //this.formulario.setValue( this.usuario );
   }

  ngOnInit() {
  }

  existeUsuario( control: FormControl ): Promise<any> | Observable<any> {

    return new Promise(
      (resolve, reject) =>{
        setTimeout( ()=>{
          if ( control.value === 'wfls') {
            resolve( {existe : true});
          }
          else {
              resolve(null);
          }
        }, 4000);
      }
    );

  }

  noGatishi( control: FormControl ): { [s: string]: boolean } {
    if ( control.value === 'gatishi' ) {
      return {noApellido: true};
    }
    else {
      return null;
    }
  }

  contraIgual( control: FormControl ): {[s: string]: boolean} {
    let foma : any = this;
    
    if ( control.value  != foma.get('p1').value ){
      return { errDist : true }
    }
    else{
      return null
    }
  }

  agregarElementos (){
   ( <FormArray> this.formulario.get('pasatiempos') ).push(
     new FormControl('', Validators.required)
   )
  }

  submit(){
    console.log('valor del formulario data', this.formulario);
    console.log('valores del form ', this.formulario.value);

   this.formulario.reset();
  }

}
