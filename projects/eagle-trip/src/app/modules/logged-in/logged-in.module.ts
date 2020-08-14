import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedInRoutingModule } from './logged-in-routing.module';
import { LoggedInComponent } from './logged-in.component';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [LoggedInComponent],
  imports: [
    CommonModule,
    LoggedInRoutingModule,
    MatCardModule
  ]
})
export class LoggedInModule { }
