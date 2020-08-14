import {
  AfterViewInit,
  ComponentFactoryResolver,
  ComponentRef,
  Directive, ElementRef,
  Host, HostListener,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Optional,
  ViewContainerRef
} from '@angular/core';
import {EMPTY, merge, Observable} from 'rxjs';
import {UntilDestroy, untilDestroyed} from '@ngneat/until-destroy';
import {ControlErrorContainerDirective} from '../control-error-container/control-error-container.directive';
import {FORM_ERRORS} from '../../../core/util/form-errors';
import {AbstractControl, NgControl} from '@angular/forms';
import {FormSubmitDirective} from '../form-submit/form-submit.directive';
import {ControlErrorComponent} from '../../components/control-error/control-error.component';


@UntilDestroy()
@Directive({
  // tslint:disable-next-line:directive-selector
  selector: '[formControl], [formControlName]'
})
export class ControlErrorsDirective implements  OnInit, OnDestroy, AfterViewInit {
  ref: ComponentRef<ControlErrorComponent>;
  container: ViewContainerRef;
  submit$: Observable<Event>;
  customErrors = {};

  constructor(
    private vcr: ViewContainerRef,
    private resolver: ComponentFactoryResolver,
    @Optional() controlErrorContainer: ControlErrorContainerDirective,
    @Inject(FORM_ERRORS) public errors,
    private el: ElementRef<HTMLInputElement>,
    @Optional() @Host() private form: FormSubmitDirective,
    private controlDir: NgControl) {
    this.container = controlErrorContainer ? controlErrorContainer.vcr : vcr;
    this.submit$ = this.form ? this.form.submit$ : EMPTY;
  }

  ngOnInit(): void {

  }

  get control(): AbstractControl {
    return this.controlDir.control;
  }

  setError(text: string): void {
    if (!this.ref) {
      const factory = this.resolver.resolveComponentFactory(ControlErrorComponent);
      this.ref = this.container.createComponent(factory);
    }
    this.ref.instance.text = text;
  }


  @HostListener('focusin', ['$event']) onFocus(event): void {
    this.setErrors();
  }

  ngAfterViewInit(): void {
    merge(
      this.submit$,
      this.control.valueChanges,
    ).pipe(
      untilDestroyed(this)
    ).subscribe((v) => {
        this.setErrors();
    });
  }

  setErrors(): void {
    const controlErrors = this.control.errors;
    if (controlErrors) {
      const firstKey = Object.keys(controlErrors)[0];
      const getError = this.errors[firstKey];
      const text = this.customErrors[firstKey] || getError(controlErrors[firstKey]);
      this.setError(text);
    } else if (this.ref) {
      this.setError(null);
    }
  }

  ngOnDestroy(): void { }

}
