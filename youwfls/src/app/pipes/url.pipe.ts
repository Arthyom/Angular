import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'urlPipe'
})
export class UrlPipe implements PipeTransform {

  constructor( private dom : DomSanitizer ){}
  transform( videoId: string ): any {
    console.log('--------',videoId)
    return this.dom.bypassSecurityTrustResourceUrl
              ( "https://www.youtube.com/embed/" + videoId );
  }

}
