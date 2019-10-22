import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/models/email';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: []
})
export class CaixaDeEntradaComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  listaEmails = []

  email: Email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }

  private _isEmailOpen = false;

  get isEmailOpen() {
    return this._isEmailOpen;
  }

  toggleEmail() {
    this._isEmailOpen = !this.isEmailOpen;
  }

  handleNewEmail(formEmail: NgForm) {

    if (formEmail.invalid) {
      formEmail.control.markAllAsTouched();
      return
    }

    this.listaEmails.push(this.email);

    this.email = {
      destinatario: '',
      assunto: '',
      conteudo: ''
    }

    formEmail.reset();

  }

}
