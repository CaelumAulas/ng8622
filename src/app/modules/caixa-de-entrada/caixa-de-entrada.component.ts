import { Component, OnInit } from '@angular/core';
import { Email } from 'src/app/models/email';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: []
})
export class CaixaDeEntradaComponent implements OnInit {

  constructor(private servico: EmailService) { }

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


    this.servico
        .enviar(this.email)
        .subscribe(
          (resposta) => {
            console.log(resposta);

            this.listaEmails.push(this.email);

            this.email = {
              destinatario: '',
              assunto: '',
              conteudo: ''
            }

            formEmail.reset();

          }
          ,erro => console.log(erro)
        )



  }

}
