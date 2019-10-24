import { Injectable } from '@angular/core';
import { UserInputDTO } from '../models/dto/user-input';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { UserOutputDTO } from '../models/dto/user-output';

@Injectable()
export class UserService {

  url = environment.apiURL+'users';

  constructor(private http: HttpClient) { }

  cadastrar(dadosCadastro): Observable<UserOutputDTO> {
    const userDTO = new UserInputDTO(dadosCadastro);
    return this.http.post<UserOutputDTO>(this.url,userDTO);
  }

}
