import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NoLoggedComponent} from './no-logged.component';
import {LoginComponent} from './pages/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: NoLoggedComponent,
    children: [
      {
        path: '',
        component: LoginComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoLoggedRoutingModule { }
