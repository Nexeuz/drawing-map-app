import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationFavoriteGoButtonComponent } from './navigation-favorite-go-button.component';

describe('NavigationFavoriteGoButtonComponent', () => {
  let component: NavigationFavoriteGoButtonComponent;
  let fixture: ComponentFixture<NavigationFavoriteGoButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationFavoriteGoButtonComponent ]
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
