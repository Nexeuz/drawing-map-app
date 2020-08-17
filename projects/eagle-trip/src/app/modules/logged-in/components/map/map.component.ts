import { Component, OnInit } from '@angular/core';
import {UserQuery} from '../../../../core/state/user/user.query';
import {UserFavoritesService} from '../../../../core/state/user-favorite/user-favorites.service';
import {shareReplay} from 'rxjs/operators';

@Component({
  selector: 'eagle-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  coords$ = this.userQuery.currentUserCords$
    .pipe(
      shareReplay(1)
    );

  constructor(private userQuery: UserQuery,
              public userFavorites: UserFavoritesService) { }

  ngOnInit(): void {
  }



}
