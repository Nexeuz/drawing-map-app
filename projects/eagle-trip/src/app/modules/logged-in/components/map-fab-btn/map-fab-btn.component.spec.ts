import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MapFabBtnComponent } from './map-fab-btn.component';

describe('MapFabBtnComponent', () => {
  let component: MapFabBtnComponent;
  let fixture: ComponentFixture<MapFabBtnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MapFabBtnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MapFabBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
