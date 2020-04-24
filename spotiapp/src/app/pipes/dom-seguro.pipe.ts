import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'domSeguro'
})
export class DomSeguroPipe implements PipeTransform {
  constructor( private dom: DomSanitizer ){}

  transform(urlBase: string, albumId: string): any {
    return this.dom.bypassSecurityTrustResourceUrl( urlBase+albumId );
  }

}
