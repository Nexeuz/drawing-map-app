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
import { NavigationHeaderTabsComponent } from './components/navigation-header-tabs/navigation-header-tabs.component';
import { NavigationForMeComponent } from './pages/navigation-for-me/navigation-for-me.component';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import { NavigationColleagueComponent } from './pages/navigation-colleague/navigation-colleague.component';
import { NavigationGuestComponent } from './pages/navigation-guest/navigation-guest.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [LoggedInComponent, MapComponent, NavigationComponent, NavigationHeaderTabsComponent, NavigationForMeComponent, NavigationColleagueComponent, NavigationGuestComponent],
  imports: [
    CommonModule,
    LoggedInRoutingModule,
    MatCardModule,
    MatSidenavModule,
    AgmCoreModule,
    MatToolbarModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ]
})
export class LoggedInModule { }
