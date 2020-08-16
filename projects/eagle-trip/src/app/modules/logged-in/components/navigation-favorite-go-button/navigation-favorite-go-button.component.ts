import { Component, OnInit } from '@angular/core';
import {UserFavoritesService} from '../../../../core/state/user-favorite/user-favorites.service';
import {Observable} from 'rxjs';
import {UserFavorite} from '../../../../core/state/user-favorite/user-favorite.model';
import {animate, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'eagle-navigation-favorite-go-button',
  templateUrl: './navigation-favorite-go-button.component.html',
  styleUrls: ['./navigation-favorite-go-button.component.scss'],
  animations: [
    trigger(
      'enterAnimation', [
        transition(':enter', [
          style({height: '0'}),
          animate('120ms', style({height: '*'}))
        ]),
        transition(':leave', [
          style({height: '*'}),
          animate('120ms', style({height: '0'}))
        ])
      ]
    )
  ]
})
export class NavigationFavoriteGoButtonComponent implements OnInit {

  constructor(private userFavorites: UserFavoritesService) { }

  ngOnInit(): void {
  }

  hideDialogOrAndPaintDirection(): void {
    this.userFavorites.paintDirection(true);
  }
}
