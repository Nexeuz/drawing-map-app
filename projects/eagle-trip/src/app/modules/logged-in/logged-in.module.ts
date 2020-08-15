import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoggedInRoutingModule } from './logged-in-routing.module';
import { LoggedInComponent } from './logged-in.component';
import {MatCardModule} from '@angular/material/card';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MapComponent } from './components/map/map.component';
import {AgmCoreModule} from '@agm/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {SharedModule} from '../../shared/shared.module';
import { NavigationComponent } from './pages/navigation/navigation.component';


@NgModule({
  declarations: [LoggedInComponent, MapComponent, NavigationComponent],
  imports: [
    CommonModule,
    LoggedInRoutingModule,
    MatCardModule,
    MatSidenavModule,
    AgmCoreModule,
    MatToolbarModule,
    SharedModule
  ]
})
export class LoggedInModule { }
