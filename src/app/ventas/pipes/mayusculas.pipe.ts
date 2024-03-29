import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'mayusculas'
})

export class MayusculasPipe implements PipeTransform {

  transform(palabra: string, enMayusculas: boolean = true): string {
    
    // if ( enMayusculas ) {
    //   return palabra.toUpperCase();
    // }else{
    //   return palabra.toLocaleLowerCase();
    // }
    return ( enMayusculas ) ? palabra.toUpperCase() : palabra.toLocaleLowerCase();
  }

}
