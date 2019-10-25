import { Component, OnInit } from '@angular/core';
import { Email, EmailForm } from 'src/app/models/email';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: [`
    ul,li {
      list-style: none;
      margin: 0;
      padding: 0;
    }
  `]
})
export class CaixaDeEntradaComponent implements OnInit {

  constructor(private servico: EmailService
              ,private pageDataService: PageDataService) {


              }

  ngOnInit() {
    this.listarEmails();
    this.pageDataService.defineTitulo("Caixa de Entrada")
  }

  listaEmails: Email[] = [];

  email: EmailForm= {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }

  private _isEmailOpen = false;

  termoFiltro = "";

  get isEmailOpen() {
    return this._isEmailOpen;
  }

  toggleEmail() {
    this._isEmailOpen = !this.isEmailOpen;
  }

  listarEmails(){
    this.servico.listar().subscribe(
      listaEmailsApi => this.listaEmails = listaEmailsApi
      , erro => console.log(erro)
    )
  }

  handleNewEmail(formEmail: NgForm) {

    if (formEmail.invalid) {
      formEmail.control.markAllAsTouched();
      return
    }

    this.servico
        .enviar(this.email)
        .subscribe(
          () => {

            this.listarEmails();

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

  apagarEmail(emailId: string){

    if(confirm('quer apagar mesmo?')){

      this.servico
          .deletar(emailId)
          .subscribe(
            () => this.listarEmails()
            ,erro => console.log(erro)
          )

    }

  }

  filtrarEmails(){

    const filtro = this.termoFiltro.toLowerCase()

    return this.listaEmails
                .filter(
                  (email) => {
                    if(email.destinatario
                            .toLowerCase()
                            .includes(filtro)
                        ||

                      email.assunto
                        .toLowerCase()
                        .includes(filtro)
                      ||

                      email.conteudo
                        .toLowerCase()
                        .includes(filtro)
                      ){
                      return email
                    }
                  }
                )
  }



}
