import {Component, Input, OnInit} from '@angular/core';
import {UserQuery} from '../../../core/state/user/user.query';
import {Observable} from 'rxjs';
import {UserState} from '../../../core/state/user/user.store';
import {MatSidenav} from '@angular/material/sidenav';
import {NavigationEnd, Router} from '@angular/router';
import {filter, tap} from 'rxjs/operators';

@Component({
  selector: 'eagle-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() sideNav: MatSidenav;
  userStatus$: Observable<UserState> = this.userQuery.currentUserStatus$;

  constructor(private userQuery: UserQuery,
              private router: Router) { }

  ngOnInit(): void {
    this.closeOnRouteChange();
  }

  closeOnRouteChange(): void {
    this.router.events
      .pipe(
        filter(it => it instanceof NavigationEnd),
        tap( async it =>  {
          await this.sideNav.close();
        })
      ).subscribe();
  }

 async toggleMenu(): Promise<void> {
    await this.sideNav.toggle();
  }
}
