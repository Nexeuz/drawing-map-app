import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoggedInComponent} from './logged-in.component';
import {NavigationComponent} from './pages/navigation/navigation.component';
import {NavigationForMeComponent} from './pages/navigation-for-me/navigation-for-me.component';
import {NavigationColleagueComponent} from './pages/navigation-colleague/navigation-colleague.component';
import {NavigationGuestComponent} from './pages/navigation-guest/navigation-guest.component';


const routes: Routes = [
  {
    path: '',
    component: LoggedInComponent,
    children: [
      {
        path: 'navigator',
        component: NavigationComponent,
        children: [
          {
            path: 'para-mi',
            component: NavigationForMeComponent
          },
          {
            path: 'colega',
            component: NavigationColleagueComponent
          },
          {
            path: 'invitado',
            component: NavigationGuestComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoggedInRoutingModule { }
