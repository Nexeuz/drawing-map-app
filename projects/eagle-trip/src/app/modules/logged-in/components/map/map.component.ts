import { Component, OnInit } from '@angular/core';
import {UserQuery} from '../../../../core/state/user/user.query';

@Component({
  selector: 'eagle-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  coords$ = this.userQuery.currentUserCords$;

  constructor(private userQuery: UserQuery) { }

  ngOnInit(): void {
  }

}
