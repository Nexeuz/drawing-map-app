import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationFavoriteListComponent } from './navigation-favorite-list.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NG_ENTITY_SERVICE_CONFIG} from '@datorama/akita-ng-entity-service';
import {environment} from '@env/environment';

describe('NavigationFavoriteListComponent', () => {
  let component: NavigationFavoriteListComponent;
  let fixture: ComponentFixture<NavigationFavoriteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationFavoriteListComponent ],
      imports: [HttpClientTestingModule],
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
    fixture = TestBed.createComponent(NavigationFavoriteListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
