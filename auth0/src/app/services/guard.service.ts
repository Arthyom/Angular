import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class GuardService implements CanActivate {

  constructor( private auth : AuthService) { }

  canActivate( next: ActivatedRouteSnapshot, state: RouterStateSnapshot ){

    console.log('estado actual', state);
    console.log('pagina siguiente',next);

    const estado =  this.auth.loggedIn ?   true :  false;

    console.log('estado del guardian', estado);


    return estado;

  }

}
