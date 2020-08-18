import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UserStore, UserState } from './user.store';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserQuery extends Query<UserState> {
  currentUserStatus$: Observable<UserState> = this.select(it => it)
    .pipe(
      map(it => it.id === '' ? null : it)
    );

  currentUserCords$ = this.select(it =>  ({latitude: it.latitude, longitude: it.longitude}));
  constructor(protected store: UserStore) {
    super(store);
  }

}
