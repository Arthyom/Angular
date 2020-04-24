import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IntHeroe } from '../interfaces/heroes';

@Injectable({
    providedIn: 'root'
})
export class HeroesServicio {


    constructor ( 
        private http: HttpClient
    ) {}

    heroes_getFromApi( target : string ) {
        const ulrRequested = `${environment.urlHeroes}search/${target}`;
        return this.http.get<IntHeroe[]>( ulrRequested );
    }
}