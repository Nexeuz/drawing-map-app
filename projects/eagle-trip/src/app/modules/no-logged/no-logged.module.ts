import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoLoggedComponent } from './no-logged.component';
import {NoLoggedRoutingModule} from './no-logged-routing.module';
import {LoginComponent} from './pages/login/login.component';
import {MatCardModule} from '@angular/material/card';
import {ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {SharedModule} from '../../shared/shared.module';
import {MatProgressBarModule} from '@angular/material/progress-bar';



@NgModule({
  declarations: [NoLoggedComponent, LoginComponent],
    imports: [
        CommonModule,
        NoLoggedRoutingModule,
        MatCardModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        SharedModule,
        MatProgressBarModule
    ]
})
export class NoLoggedModule { }
