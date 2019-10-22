import { Routes, RouterModule } from "@angular/router";
import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';


const rotasApp: Routes = [
  { path: 'inbox', component: CaixaDeEntradaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: CadastroComponent },
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


export const ModuloRoteamento = RouterModule.forRoot(rotasApp);
