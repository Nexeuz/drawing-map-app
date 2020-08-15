import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoggedInComponent} from './logged-in.component';
import {NavigationComponent} from './pages/navigation/navigation.component';


const routes: Routes = [
  {
    path: '',
    component: LoggedInComponent,
    children: [
      {
        path: 'navigator',
        component: NavigationComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedInRoutingModule { }
