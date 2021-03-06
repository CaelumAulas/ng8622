import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { EmailService } from './services/email.service';
import { HttpClientModule } from '@angular/common/http';

const appRoutes: Routes = [
  {
    path: 'inbox',
    loadChildren: () => import('./modules/caixa-de-entrada/caixa-de-entrada.module').then( m => m.CaixaDeEntradaModule)
    ,canActivate: [AuthGuard]
  },
  {
    path: 'cadastro',
    loadChildren: () => import('./modules/cadastro/cadastro.module').then(m => m.CadastroModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'inbox'
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'login'
  }
]

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard,
    EmailService
  ]
})
export class AppRoutingModule {

}
