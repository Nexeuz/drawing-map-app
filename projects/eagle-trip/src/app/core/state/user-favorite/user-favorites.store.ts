import { Injectable } from '@angular/core';
import {UserFavorite} from './user-favorite.model';
import {EntityState, EntityStore, StoreConfig} from '@datorama/akita';


export interface UserFavoritesState extends EntityState<UserFavorite, number> {
  ui: {
    paintDirectionObject: UserFavorite | null
  };
}

const initialState: UserFavoritesState = {
  ui: { paintDirectionObject: null }
};

@Injectable({ providedIn: 'root' })
@StoreConfig({ name: 'user-favorites', idKey: 'id' })
export class UserFavoritesStore extends EntityStore<UserFavoritesState> {
  constructor() {
    super(initialState);
  }

}

