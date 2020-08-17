import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationFavoriteGoButtonComponent } from './navigation-favorite-go-button.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NG_ENTITY_SERVICE_CONFIG} from '@datorama/akita-ng-entity-service';
import {environment} from '@env/environment';
import {RouterTestingModule} from '@angular/router/testing';

describe('NavigationFavoriteGoButtonComponent', () => {
  let component: NavigationFavoriteGoButtonComponent;
  let fixture: ComponentFixture<NavigationFavoriteGoButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationFavoriteGoButtonComponent ],
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [
        {
          provide: NG_ENTITY_SERVICE_CONFIG,
          useValue: {
            baseUrl: environment.host
          }
        }
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationFavoriteGoButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
