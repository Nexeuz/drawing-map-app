import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NoLoggedComponent} from './no-logged.component';

const routes: Routes = [
  {
    path: '',
    component: NoLoggedComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NoLoggedRoutingModule { }
