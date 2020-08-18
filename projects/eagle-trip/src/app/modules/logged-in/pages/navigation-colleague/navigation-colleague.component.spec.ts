import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationColleagueComponent } from './navigation-colleague.component';

describe('NavigationColleagueComponent', () => {
  let component: NavigationColleagueComponent;
  let fixture: ComponentFixture<NavigationColleagueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationColleagueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationColleagueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
