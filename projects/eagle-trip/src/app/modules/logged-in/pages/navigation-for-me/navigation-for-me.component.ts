import { Component, OnInit } from '@angular/core';
import {UserService} from '../../../../core/state/user/user.service';
import {UserQuery} from '../../../../core/state/user/user.query';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'eagle-navigation-for-me',
  templateUrl: './navigation-for-me.component.html',
  styleUrls: ['./navigation-for-me.component.scss']
})
export class NavigationForMeComponent implements OnInit {
  term = '';

  constructor(private userService: UserQuery) { }


  ngOnInit(): void {
    this.userService.currentUserCords$
      .pipe(
        tap(it => it.longitude ? this.term = 'Mi ubicación actual' : this.term = 'Activa los servicios de localización')
      ).subscribe();
  }

}
