import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  private nomeValidators = Validators.compose([
    Validators.required,
    Validators.minLength(2),
    Validators.maxLength(200),
    Validators.pattern('[a-zA-Z\u00C0-\u00FF ]+')
  ])

  private usuarioValidators = Validators.compose([
    Validators.required,
    Validators.minLength(3),
    Validators.maxLength(40),
    Validators.pattern('[a-z0-9]+')
  ])

  private senhaValidators = Validators.compose([
    Validators.required,
    Validators.minLength(6)
  ])

  private telefoneValidators = Validators.compose([
    Validators.required,
    Validators.minLength(8),
    Validators.maxLength(9),
    Validators.pattern(/^\d{8,9}$/)
  ])

  formCadastro = new FormGroup({
    nome: new FormControl('', this.nomeValidators),
    usuario: new FormControl('', this.usuarioValidators),
    senha: new FormControl('', this.senhaValidators),
    avatar: new FormControl('', Validators.required),
    telefone: new FormControl('', this.telefoneValidators)
  })

  constructor() { }

  ngOnInit() {
    //console.log(this.formCadastro.get('nome'));
  }

  handleCadastro(){

    if(this.formCadastro.invalid) {
      this.formCadastro.markAllAsTouched();
      return
    }
    console.log(this.formCadastro.value);
    this.formCadastro.reset();
  }

}
