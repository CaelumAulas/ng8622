import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[cmailFormField]'
})
export class FormFieldDirective implements OnInit {

  constructor(private referenciaElemento: ElementRef) {
  }

  ngOnInit(){

    const elemento = this.referenciaElemento.nativeElement as HTMLInputElement;

    if(elemento.name){
      elemento.id = elemento.name;
    }
    else {
      console.error('O atributo name é obrigatório')
    }

    elemento.placeholder = " ";
    elemento.classList.add('mdl-textfield__input');

  }

}
