import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  formLogin = new FormGroup({
    email: new FormControl('van@cmail.com.br',
    [
      Validators.required,
      Validators.email
    ]
    ),
    senha: new FormControl('123', Validators.required)
  })

  mensagemErro = ""

  constructor(private http: HttpClient,
              private roteador: Router,
              private service: LoginService) { }

  ngOnInit() {}

  handleLogin(){

    if(this.formLogin.invalid){
      this.formLogin.markAllAsTouched();
      return;
    }

    this.service
        .autenticar(this.formLogin.value)
        .subscribe(
          (response: any) => {
            this.roteador.navigate(['inbox']);
          },
          erro => {
            console.log(erro)
            this.mensagemErro = "Deu ruim, digite de novo"
          }
        )

  }

}
