import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({name: 'domseguro'})
export class DomSeguro implements PipeTransform {

    constructor( private domSan: DomSanitizer ){}

    transform( urlBase: string, urlTarget : string  ): any{
        return this.domSan.bypassSecurityTrustResourceUrl( urlBase+'/'+urlTarget );
    }
}