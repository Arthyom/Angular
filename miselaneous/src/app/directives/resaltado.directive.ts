import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appResaltado]'
})
export class ResaltadoDirective {

  @Input('appResaltado') color: string = 'yellow';
  constructor( private el : ElementRef) {
  
      console.log('llamando al resaltado');

   }


   @HostListener('mouseenter') 
   ratonEntrar(){
    this.resaltar(this.color);
   }

   @HostListener('mouseleave')
   ratonSalir(){
     this.resaltar(null);
   }


   resaltar( color: string = 'yellow' ){
     this.el.nativeElement.style.backgroundColor = color;
   }

}
