import { Component, OnInit } from '@angular/core';
import {UserQuery} from '../../../../core/state/user/user.query';

@Component({
  selector: 'eagle-content-side-nav-profile',
  templateUrl: './content-side-nav-profile.component.html',
  styleUrls: ['./content-side-nav-profile.component.scss']
})
export class ContentSideNavProfileComponent implements OnInit {

  constructor(public userQuery: UserQuery) { }

  ngOnInit(): void {
  }

}
