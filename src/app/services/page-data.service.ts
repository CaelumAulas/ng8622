import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PageDataService {

  titulo = new Subject<string>();

  defineTitulo(novoTitulo: string){
    document.title = `${novoTitulo} - CMail`;
    this.titulo.next(novoTitulo);
  }

}
