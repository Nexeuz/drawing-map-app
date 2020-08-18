import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSideNavMenuComponent } from './content-side-nav-menu.component';

describe('ContentSideNavMenuComponent', () => {
  let component: ContentSideNavMenuComponent;
  let fixture: ComponentFixture<ContentSideNavMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSideNavMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSideNavMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
