import { Injectable } from '@angular/core';
import { UserFavoritesStore, UserFavoritesState } from './user-favorites.store';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import {UserFavoritesQuery} from './user-favorites.query';
import {Observable} from 'rxjs';
import {UserFavorite} from './user-favorite.model';

@Injectable({ providedIn: 'root' })
export class UserFavoritesService extends NgEntityService<UserFavoritesState> {
  getAll$ = this.query.selectAll();
  active$: Observable<UserFavorite | UserFavorite[]> = this.query.selectActive<UserFavorite>();
  constructor(public store: UserFavoritesStore,
              public query: UserFavoritesQuery) {
    super(store);
  }

 paintDirection(value: boolean): void {
    this.store.update({
      ui: {
        paintDirection: value
      }
    });
  }




}
