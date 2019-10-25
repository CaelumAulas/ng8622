import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'marcador'
})
export class MarcadorPipe implements PipeTransform {

    transform(destinatario: string){

      if(destinatario.includes('@caelum')){
        destinatario = `[work] ${destinatario}`
      }

      return destinatario;
    }

}
