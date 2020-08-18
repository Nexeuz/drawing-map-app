import { TestBed } from '@angular/core/testing';

import { AuthNoLoggedGuard } from './auth-no-logged.guard';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('AuthNoLoggedGuard', () => {
  let guard: AuthNoLoggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(AuthNoLoggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
