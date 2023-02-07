import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {

  //i18nSelect
  nombre: string = 'Carlos';
  genero: string = 'masculino';
  bandera: boolean = false;
  bandera_if: boolean = true;

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino' : 'invitarla'
  }

  // i18nPlural
  clientes: string[] = ['Maria', 'Mario', 'Rebeca'];
  clientesMapa = {
    '=0': 'No tenemos clientes esperando.',
    '=1': 'tenemos # Cliente esperando.',
    'other': 'tenemos # Clientes esperando.',
  }

  cambiarCliente(){
    if (this.bandera) {
      this.nombre = 'Carlos';
      this.genero = 'masculino';
      this.bandera = false;
    }else{
      this.nombre = 'Allyson';
      this.genero = 'femenino';
      this.bandera = true;
    }
  }

  borrarCliente(){
    if (this.clientes.length != 0) {
      for (let i = 0; i < this.clientes.length; i++) {
        this.clientes.splice(i, 1);
        break;
      }
    }else{
      this.bandera_if = false;
    }
    console.log(this.clientes);
  }

// KeyValue Pipe
persona = {
  nombre: 'Mariano',
  edada: 40,
  direccion: 'Ottawa, Canadá'
}

//Json Pipe
heroes = [
  {
    nombre: 'Superman',
    habilidades: 'Super fuerza, vuelo, visión de calor, aliento de hielo'
  },
  {
    nombre: 'Batman',
    habilidades: 'Artes Mariciales, Artilugios, Inteligencia'
  },
  {
    nombre: 'Spiderman',
    habilidades: 'Super fuerza, Dispara telaraña, Trepar por las paredes, Inteligencia'
  },
  {
    nombre: 'Wolverine',
    habilidades: 'Super fuerza, Regeneracion, Saca Garras, Cuerpo de Metal'
  }
]

// Async Pipe
miObservable = interval(5000);

valorPromesa = new Promise( (resolve, reject) => {

  setTimeout(() => {
    resolve('Tenemos data de promesa');
  }, 3500);
});

}
