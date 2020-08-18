import { TestBed } from '@angular/core/testing';

import { CoordsService } from './coords.service';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('CoordsService', () => {
  let service: CoordsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CoordsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
