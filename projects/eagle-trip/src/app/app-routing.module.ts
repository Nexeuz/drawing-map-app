import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthLoggedGuard} from './core/guards/auth/auth-logged/auth-logged.guard';
import {AuthNoLoggedGuard} from './core/guards/auth/auth-no-logged/auth-no-logged.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./modules/logged-in/logged-in.module').then(m => m.LoggedInModule),
    canActivate: [AuthLoggedGuard]
  },
  {
    path: 'login',
    loadChildren: () => import('./modules/no-logged/no-logged.module').then(m => m.NoLoggedModule),
    canActivate: [AuthNoLoggedGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
