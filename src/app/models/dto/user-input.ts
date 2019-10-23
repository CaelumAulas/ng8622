export class UserInputDTO {

  name = '';
  username = '';
  phone = '';
  password = '';
  avatar = '';

  //object destructuring
  constructor({nome, usuario, telefone, avatar, senha}) {
    this.name = nome;
    this.username = usuario;
    this.phone = telefone;
    this.password = senha;
    this.avatar = avatar;
  }

}
