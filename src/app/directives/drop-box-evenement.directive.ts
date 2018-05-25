import { Directive, HostListener, HostBinding } from '@angular/core';


@Directive({
  selector: '[appDropBoxEvenement]'
})
export class DropBoxEvenementDirective {

  @HostListener('mouseover') ouvrir(){
this.isOpen=true;
}
@HostListener('mouseleave') fermer(){
this.isOpen=false;
}
@HostBinding('class.open') get etatdedropdownfonction(){
return this.isOpen;

}
private isOpen=false;

}
