import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegularExpressions} from '../../../../core/util/regular-expressions/regular-expressions';
import {UserService} from '../../../../core/state/user/user.service';
import {tap} from 'rxjs/operators';
import {Router} from '@angular/router';
import {UserQuery} from '../../../../core/state/user/user.query';
import {Observable} from 'rxjs';

@Component({
  selector: 'eagle-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading$: Observable<boolean> = this.userQuery.selectLoading();
  constructor(private fb: FormBuilder,
              private userService: UserService,
              private userQuery: UserQuery,
              private router: Router) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.pattern(RegularExpressions.PASSWORD_REGEX_PATTERN)]]
    });
  }

  submit(): void {
    if (this.form.valid) {
      this.userService.get()
        .pipe(
          tap(it => {
            this.router.navigateByUrl('');
          })
        ).subscribe();
    }

  }
}
