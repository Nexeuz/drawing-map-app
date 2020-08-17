import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentSideNavProfileComponent } from './content-side-nav-profile.component';

describe('ContentSideNavProfileComponent', () => {
  let component: ContentSideNavProfileComponent;
  let fixture: ComponentFixture<ContentSideNavProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentSideNavProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentSideNavProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
