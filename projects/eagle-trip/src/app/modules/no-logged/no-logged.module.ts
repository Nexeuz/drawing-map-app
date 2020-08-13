import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoLoggedComponent } from './no-logged.component';
import {NoLoggedRoutingModule} from './no-logged-routing.module';



@NgModule({
  declarations: [NoLoggedComponent],
  imports: [
    CommonModule,
    NoLoggedRoutingModule
  ]
})
export class NoLoggedModule { }
