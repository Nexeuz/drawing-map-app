import {Injectable, NgZone} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {UserQuery} from '../../../state/user/user.query';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthNoLoggedGuard implements CanActivate {

  constructor(private ngZone: NgZone,
              private userQuery: UserQuery,
              private router: Router) {
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return  this.userQuery.currentUser$
      .pipe(
        map(it => {
          if (it) {
            this.ngZone.run(async ()  => {
              await this.router.navigateByUrl('');
            });
            return false;
          } else {
            return true;
          }
        })
      );
  }

}
