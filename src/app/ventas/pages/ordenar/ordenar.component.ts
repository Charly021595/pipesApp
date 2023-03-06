import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent {

  enMayusculas: boolean = false;
  heroes: Heroe[] = [
    {
      nombre: 'Spiderman',
      vuela: false,
      color: Color.azul
    },
    {
      nombre: 'Daredevil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Superman',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'moon knight',
      vuela: false,
      color: Color.Blanco
    },
    {
      nombre: 'Iron Man',
      vuela: true,
      color: Color.rojo
    }
  ]

  enMayusculas_click(){
    return ( this.enMayusculas ) ? this.enMayusculas = false : this.enMayusculas = true;
  }

}
