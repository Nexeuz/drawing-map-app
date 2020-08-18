import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationForMeComponent } from './navigation-for-me.component';

describe('NavigationForMeComponent', () => {
  let component: NavigationForMeComponent;
  let fixture: ComponentFixture<NavigationForMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationForMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationForMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
