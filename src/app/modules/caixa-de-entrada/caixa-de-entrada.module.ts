import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { SharedComponentsModule } from 'src/app/components/shared-components.module';
import { FormsModule } from '@angular/forms';
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';
import { EmailService } from 'src/app/services/email.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CaixaDeEntradaComponent,
  ],
  imports: [
    CommonModule,
    SharedComponentsModule,
    FormsModule,
    CaixaDeEntradaRoutingModule,
    HttpClientModule
  ],
  exports: [CaixaDeEntradaComponent],
  providers: [
    EmailService
  ]
})
export class CaixaDeEntradaModule { }
