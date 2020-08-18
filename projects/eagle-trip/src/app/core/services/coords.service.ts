import {Injectable} from '@angular/core';
import {UserService} from '../state/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class CoordsService {

  constructor(private userService: UserService) {
  }

  getLocation(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(this.storePosition.bind(this));
    } else {
      alert('La geolocalización no esta permitida en este navegador');
    }
  }

  storePosition = (position) => {
    this.userService.updateCoords(position.coords.latitude, position.coords.longitude);
  }
}
