import { TestBed } from '@angular/core/testing';

import { AuthLoggedGuard } from './auth-logged.guard';
import {RouterTestingModule} from '@angular/router/testing';

describe('AuthGuardGuard', () => {
  let guard: AuthLoggedGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ]
    });
    guard = TestBed.inject(AuthLoggedGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
