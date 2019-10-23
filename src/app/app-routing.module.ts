import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  {
    path: 'inbox',
    loadChildren: () => import('./modules/caixa-de-entrada/caixa-de-entrada.module').then( m => m.CaixaDeEntradaModule)
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
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {

}
