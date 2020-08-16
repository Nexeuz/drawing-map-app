import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eagle-navigation-for-me',
  templateUrl: './navigation-for-me.component.html',
  styleUrls: ['./navigation-for-me.component.scss']
})
export class NavigationForMeComponent implements OnInit {
  term = 'Mi ubicación actual';

  constructor() { }


  ngOnInit(): void {
  }

}
