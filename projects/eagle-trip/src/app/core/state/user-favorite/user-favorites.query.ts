import { Injectable } from '@angular/core';
import {EntityUIQuery, QueryEntity} from '@datorama/akita';
import { UserFavoritesStore, UserFavoritesState } from './user-favorites.store';

@Injectable({ providedIn: 'root' })
export class UserFavoritesQuery extends QueryEntity<UserFavoritesState> {
  constructor(protected store: UserFavoritesStore) {
    super(store);
  }

}
