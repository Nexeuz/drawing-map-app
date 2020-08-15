import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {UserState, UserStore} from './user.store';
import {catchError, delay, tap} from 'rxjs/operators';
import {Observable, throwError} from 'rxjs';
import {applyTransaction} from '@datorama/akita';
import {environment} from '@env/environment';

@Injectable({providedIn: 'root'})
export class UserService {

  constructor(private userStore: UserStore,
              private http: HttpClient) {
  }

  get(): Observable<UserState> {
    this.userStore.setLoading(true);
    return this.http.get<UserState>(environment.host).pipe(
      delay(3000),
      tap(user => {
        this.update(user[0]);
      }),
      catchError(it => {
        this.userStore.setLoading(false);
        return throwError(it);
      })
    );
  }


  update(user: UserState): void {
    applyTransaction(() => {
      this.userStore.setLoading(false);
      this.userStore.update(state => ({
        ...user
      }));
    });
  }

  updateCoords(latitude, longitude): void {
    this.userStore.update(state => ({
        longitude,
        latitude
      })
    );
  }

}
