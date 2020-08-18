import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationFavoriteListComponent } from './navigation-favorite-list.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';
import {NG_ENTITY_SERVICE_CONFIG} from '@datorama/akita-ng-entity-service';
import {environment} from '@env/environment';
import {UserFavoritesService} from '../../../../core/state/user-favorite/user-favorites.service';
import {UserFavoritesStore} from '../../../../core/state/user-favorite/user-favorites.store';
import {By} from '@angular/platform-browser';
import {UserFavorite} from '../../../../core/state/user-favorite/user-favorite.model';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {CommonModule} from '@angular/common';
import {UserFavoritesQuery} from '../../../../core/state/user-favorite/user-favorites.query';


export function mockUserFavoritesStore(): UserFavorite {
  return  {
    address: 'test',
    name: 'test',
    id: 1,
    longitude: 2332,
    latitude: 322323
  };
}


export class UserFavoriteStoreSub extends UserFavoritesStore {
  constructor() {
    super();
  }
}


describe('NavigationFavoriteListComponent', () => {
  let component: NavigationFavoriteListComponent;
  let fixture: ComponentFixture<NavigationFavoriteListComponent>;
  let userFavoritesService: UserFavoritesService;
  let store: UserFavoritesStore;

  beforeEach(async(() => {
    return TestBed.configureTestingModule({
      declarations: [NavigationFavoriteListComponent],
      imports: [HttpClientTestingModule, MatListModule, MatIconModule, CommonModule],
      providers: [
        UserFavoritesService,
        {
        UserFavoritesStore,
          useValue: jasmine.createSpy('UserFavoritesStore', () => ['set'])
        },
        UserFavoritesQuery,
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
    userFavoritesService = TestBed.inject(UserFavoritesService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display length 2', () => {
    userFavoritesService.store.set([mockUserFavoritesStore(), mockUserFavoritesStore()]);
    fixture.detectChanges();
    const todos = fixture.debugElement.queryAll(By.css('mat-list-option'));
    expect(todos.length).toEqual(2);
  });

  it('should display there arent favorites', () => {
    fixture.detectChanges();
    userFavoritesService.store.set([]);
    const todos = fixture.debugElement.query(By.css('p'));
    expect(todos.nativeElement.innerText).toEqual('No tienes items favoritos');
  });

});
