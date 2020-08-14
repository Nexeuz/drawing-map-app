import { Injectable } from '@angular/core';
import { Query } from '@datorama/akita';
import { UserStore, UserState } from './user.store';
import {Observable} from 'rxjs';
import {map, tap} from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class UserQuery extends Query<UserState> {
  currentUser$: Observable<UserState> = this.select(it => it)
    .pipe(
      map(it => it.id === '' ? null : it)
    );
  constructor(protected store: UserStore) {
    super(store);
  }

}
