import { Component } from '@angular/core';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean = false;

  enMayusculas_click(){
    return ( this.enMayusculas ) ? this.enMayusculas = false : this.enMayusculas = true;
  } 

}
