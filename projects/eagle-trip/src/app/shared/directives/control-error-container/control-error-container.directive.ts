import {Directive, ViewContainerRef} from '@angular/core';

@Directive({
  selector: '[eagleControlErrorContainer]'
})
export class ControlErrorContainerDirective {

  constructor(public vcr: ViewContainerRef) { }

}
