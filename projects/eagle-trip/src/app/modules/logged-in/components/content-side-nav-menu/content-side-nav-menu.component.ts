import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eagle-content-side-nav-menu',
  templateUrl: './content-side-nav-menu.component.html',
  styleUrls: ['./content-side-nav-menu.component.scss']
})
export class ContentSideNavMenuComponent implements OnInit {

  menuItems = [
    {
      path: 'navigator',
      icon: 'drive_eta',
      text: 'Pedir mi aguila'
    },
    {
      path: '#',
      icon: 'local_airport',
      text: 'Vuelos'
    },
    {
      path: '#',
      icon: 'rv_hookup',
      text: 'Rutas'
    },
    {
      path: '#',
      icon: 'settings',
      text: 'Administrar'
    },
    {
      path: '#',
      icon: 'insert_chart_outlined',
      text: 'Estadisticas'
    },
    {
      path: '#',
      icon: 'payment',
      text: 'Medios de pago'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
