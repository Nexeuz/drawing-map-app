import {ChangeDetectionStrategy, ChangeDetectorRef, Component, Input, OnInit, ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'eagle-control-error-component',
  templateUrl: './control-error.component.html',
  styleUrls: ['./control-error.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlErrorComponent implements OnInit {
  _TEXT;
  _HIDE = true;

  @Input() set text(value) {
    if (value !== this._TEXT) {
      this._TEXT = value;
      this._HIDE = !value;
      this.cdr.markForCheck();
    }
  }

  constructor(private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
  }

}
