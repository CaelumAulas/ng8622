import { CanActivate, Router } from "@angular/router";
import { Injectable } from '@angular/core';
import { EmailService } from '../services/email.service';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private roteador: Router, private emailService: EmailService){}

  canActivate(): Observable<boolean>{
    return this.emailService
              .validaToken()
              .pipe(
                map(() => {
                  return true
                })
                ,catchError(
                  () => this.roteador.navigate(['login'])
                )
              )

  }

}
