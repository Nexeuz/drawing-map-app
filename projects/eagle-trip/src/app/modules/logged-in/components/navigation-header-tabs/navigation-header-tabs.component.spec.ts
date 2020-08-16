import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationHeaderTabsComponent } from './navigation-header-tabs.component';

describe('HeaderNavigationComponent', () => {
  let component: NavigationHeaderTabsComponent;
  let fixture: ComponentFixture<NavigationHeaderTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationHeaderTabsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavigationHeaderTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
