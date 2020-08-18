import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlErrorsDirective } from './directives/control-erros/control-errors.directive';
import { ControlErrorContainerDirective } from './directives/control-error-container/control-error-container.directive';
import { FormSubmitDirective } from './directives/form-submit/form-submit.directive';
import { ControlErrorComponent } from './components/control-error/control-error.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { HeaderComponent } from './components/header/header.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';



@NgModule({
  declarations: [ ControlErrorsDirective, ControlErrorContainerDirective, FormSubmitDirective, ControlErrorComponent, HeaderComponent],
  exports: [ControlErrorsDirective, ControlErrorContainerDirective, FormSubmitDirective, ControlErrorComponent, HeaderComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class SharedModule { }
