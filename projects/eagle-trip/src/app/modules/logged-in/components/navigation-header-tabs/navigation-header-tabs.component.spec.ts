import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavigationHeaderTabsComponent } from './navigation-header-tabs.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('HeaderNavigationComponent', () => {
  let component: NavigationHeaderTabsComponent;
  let fixture: ComponentFixture<NavigationHeaderTabsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavigationHeaderTabsComponent ],
      imports: [RouterTestingModule]
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
