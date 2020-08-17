import {FormSubmitDirective} from './form-submit.directive';
import {ElementRef, NO_ERRORS_SCHEMA} from '@angular/core';
import {TestBed} from '@angular/core/testing';


class MockElementRef extends ElementRef {
  constructor() { super(undefined); }
  // nativeElement = {};
}


describe('FormSubmitDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      // provide the component-under-test and dependent service
      declarations: [FormSubmitDirective],
      providers: [
        { provide: ElementRef, useClass: MockElementRef },
      ],
      schemas: [
        NO_ERRORS_SCHEMA
      ]
    });
    // inject both the component and the dependent service.

  });
  it('should create an instance', () => {
    const el = TestBed.inject(ElementRef);
    const directive = new FormSubmitDirective(el);
    expect(directive).toBeTruthy();
  });
});
