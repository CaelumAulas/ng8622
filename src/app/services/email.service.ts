import { Injectable } from '@angular/core';
import { Email } from '../models/email';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from "src/environments/environment";

@Injectable()
export class EmailService {

  private url = environment.apiURL +'emails'
  private auth = { 'Authorization': localStorage.getItem('cmail-token') }
  private cabecalho = {
    headers: new HttpHeaders(this.auth)
  }

  constructor(private http: HttpClient) { }

  enviar(dadosEmail: Email){

    const emailDTO = {
      to: dadosEmail.destinatario,
      subject: dadosEmail.assunto,
      content: dadosEmail.conteudo
    }

    return this.http
              .post(this.url,emailDTO,this.cabecalho)

  }

}
