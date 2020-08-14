import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UserState, UserStore} from './user.store';
import { tap } from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({ providedIn: 'root' })
export class UserService {

  constructor(private userStore: UserStore,
              private http: HttpClient) {
  }

  get(): Observable<UserState> {
    return this.http.get<UserState>('https://localhost:3000/users').pipe(
      tap(user => {
        this.update(user);
    }));
  }



  update(user: UserState): void {
    this.userStore._setState(user);
  }

}
