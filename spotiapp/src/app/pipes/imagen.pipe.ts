import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(value: any[] ): any {

    if ( value  ) {
      if ( value.length > 0 ) {
        return value[0].url;
      }
    }
    return 'assets/no.png';
  }

}
