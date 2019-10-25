import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { FormGroupComponent } from './form-group/form-group.component';
import { FormFieldDirective } from './form-group/form-field.directive';
import { ListItemComponent } from './list-item/list-item.component';
import { MarcadorPipe } from './list-item/marcador.pipe';



@NgModule({
  declarations: [
    HeaderComponent,
    FormGroupComponent,
    FormFieldDirective,
    ListItemComponent,
    MarcadorPipe
  ],
  exports: [
    HeaderComponent,
    FormGroupComponent,
    FormFieldDirective,
    ListItemComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class SharedComponentsModule { }
