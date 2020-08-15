import { Component, OnInit } from '@angular/core';
import {UserQuery} from '../../../../core/state/user/user.query';

@Component({
  selector: 'eagle-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  coords$ = this.userQuery.currentUserCords$;
  show = false;

  constructor(private userQuery: UserQuery) { }

  ngOnInit(): void {
    setTimeout(() => {
      this.show = true;
    }, 20000);
  }


  showMap(): void  {
  }

}
