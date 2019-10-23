import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  private url = environment.apiURL+'login';

  constructor(private http: HttpClient){}

  autenticar({email, senha}) {

    const loginDTO = {
      email: email,
      password: senha
    }

    return this.http
                .post(this.url, loginDTO)
                .pipe(
                  map(
                    (resposta:any) => {
                      localStorage.setItem('cmail-token', resposta.token)
                      return 'Logado com sucesso ;D'
                    }
                  )
                )

  }

}
