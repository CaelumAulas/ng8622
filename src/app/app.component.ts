import { Component } from '@angular/core';
import { Email } from './models/email';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

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

  handleNewEmail(evento: Event) {
    evento.preventDefault();

    let novoEmail:Email = {
      assunto: this.email.assunto,
      destinatario: this.email.destinatario,
      conteudo: this.email.conteudo
    }

    this.listaEmails.push(novoEmail);
  }

}
