import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'click'})
export class ClickPipe implements PipeTransform {
    transform( inputVal: string, visible = false ): string {
        if ( !visible ) {
           return  '*'.repeat( inputVal.length );
        }
        else {
            return inputVal;
        }
    }
}