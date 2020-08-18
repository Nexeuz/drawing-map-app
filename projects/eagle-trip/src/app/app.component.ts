import { Component } from '@angular/core';
import {CoordsService} from './core/services/coords.service';

@Component({
  selector: 'eagle-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eagle-trip';

  constructor(private coordsService: CoordsService) {
    this.coordsService.getLocation();
  }
}
