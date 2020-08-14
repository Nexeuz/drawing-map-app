import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RegularExpressions} from '../../../../core/util/regular-expressions/regular-expressions';

@Component({
  selector: 'eagle-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.createForm();
  }

  createForm(): void {
    this.form = this.fb.group({
      email: ['', [Validators.email, Validators.required]],
      password: ['', [Validators.required, Validators.pattern(RegularExpressions.PASSWORD_REGEX_PATTERN)]]
    });
  }

}
