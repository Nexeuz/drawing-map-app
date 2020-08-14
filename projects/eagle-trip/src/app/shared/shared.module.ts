import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ControlErrorsDirective } from './directives/control-erros/control-errors.directive';
import { ControlErrorContainerDirective } from './directives/control-error-container/control-error-container.directive';
import { FormSubmitDirective } from './directives/form-submit/form-submit.directive';
import { ControlErrorComponent } from './components/control-error/control-error.component';
import {MatFormFieldModule} from '@angular/material/form-field';



@NgModule({
  declarations: [ ControlErrorsDirective, ControlErrorContainerDirective, FormSubmitDirective, ControlErrorComponent],
  exports: [ControlErrorsDirective, ControlErrorContainerDirective, FormSubmitDirective, ControlErrorComponent],
  imports: [
    CommonModule,
    MatFormFieldModule
  ]
})
export class SharedModule { }
