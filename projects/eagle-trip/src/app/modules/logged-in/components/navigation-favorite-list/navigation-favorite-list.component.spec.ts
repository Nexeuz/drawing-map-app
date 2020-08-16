import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationFavoriteListComponent } from './navigation-favorite-list.component';

describe('NavigationFavoriteListComponent', () => {
  let component: NavigationFavoriteListComponent;
  let fixture: ComponentFixture<NavigationFavoriteListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationFavoriteListComponent ]
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
