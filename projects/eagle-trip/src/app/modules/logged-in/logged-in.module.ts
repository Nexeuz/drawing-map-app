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
import { NavigationFavoriteListComponent } from './components/navigation-favorite-list/navigation-favorite-list.component';
import {MatListModule} from '@angular/material/list';
import { NavigationFavoriteGoButtonComponent } from './components/navigation-favorite-go-button/navigation-favorite-go-button.component';
import {AgmDirectionModule} from 'agm-direction';
import {MatRippleModule} from '@angular/material/core';
import { MapFabBtnComponent } from './components/map-fab-btn/map-fab-btn.component';
import { ContentSideNavComponent } from './components/content-side-nav/content-side-nav.component';
import { ContentSideNavProfileComponent } from './components/content-side-nav-profile/content-side-nav-profile.component';
import { ContentSideNavMenuComponent } from './components/content-side-nav-menu/content-side-nav-menu.component';


@NgModule({
  declarations: [LoggedInComponent, MapComponent, NavigationComponent, NavigationHeaderTabsComponent, NavigationForMeComponent, NavigationColleagueComponent, NavigationGuestComponent, NavigationFavoriteListComponent, NavigationFavoriteGoButtonComponent, MapFabBtnComponent, ContentSideNavComponent, ContentSideNavProfileComponent, ContentSideNavMenuComponent],
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
    FormsModule,
    MatListModule,
    AgmDirectionModule,
    MatRippleModule
  ]
})
export class LoggedInModule { }
