import { Component, OnInit } from '@angular/core';
import {UserFavoritesService} from '../../../../core/state/user-favorite/user-favorites.service';
import {MatSelectionListChange} from '@angular/material/list/selection-list';

@Component({
  selector: 'eagle-navigation-favorite-list',
  templateUrl: './navigation-favorite-list.component.html',
  styleUrls: ['./navigation-favorite-list.component.scss']
})
export class NavigationFavoriteListComponent implements OnInit {

  constructor(public userFavorites: UserFavoritesService) { }

  ngOnInit(): void {
  }

  setFavorite(selection: MatSelectionListChange): void {
    this.userFavorites.setSelected(selection.option.value);
  }

}
