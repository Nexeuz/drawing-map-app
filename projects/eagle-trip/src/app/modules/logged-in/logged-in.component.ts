import { Component, OnInit } from '@angular/core';
import {UserFavoritesService} from '../../core/state/user-favorite/user-favorites.service';

@Component({
  selector: 'eagle-logged-in',
  templateUrl: './logged-in.component.html',
  styleUrls: ['./logged-in.component.scss']
})
export class LoggedInComponent implements OnInit {

  constructor(private userFavorites: UserFavoritesService) { }

  ngOnInit(): void {
    this.userFavorites.get()
      .subscribe();
  }

}
