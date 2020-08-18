import { Injectable } from '@angular/core';
import { UserFavoritesStore, UserFavoritesState } from './user-favorites.store';
import { NgEntityService } from '@datorama/akita-ng-entity-service';
import {UserFavoritesQuery} from './user-favorites.query';
import {Observable} from 'rxjs';
import {UserFavorite} from './user-favorite.model';
import {shareReplay} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserFavoritesService extends NgEntityService<UserFavoritesState> {
  getAll$ = this.query.selectAll()
    .pipe(
      shareReplay(1)
    );
  active$: Observable<UserFavorite | UserFavorite[]> = this.query.selectActive<UserFavorite>();
  preSelected$: Observable<UserFavorite> = this.query.select(it => it.ui.paintDirectionObject);
  constructor(public store: UserFavoritesStore,
              public query: UserFavoritesQuery) {
    super(store);
  }

  /**
   * Update current UI selected user
   */
 setSelected(user: UserFavorite): void {
    this.store.update({
      ui: {
        paintDirectionObject: user
      }
    });
  }




}
