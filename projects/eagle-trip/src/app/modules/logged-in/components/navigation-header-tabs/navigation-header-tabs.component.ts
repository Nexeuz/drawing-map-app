import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'eagle-navigation-tabs-navigation',
  templateUrl: './navigation-header-tabs.component.html',
  styleUrls: ['./navigation-header-tabs.component.scss']
})
export class NavigationHeaderTabsComponent implements OnInit {

  arrayTabs = [
    {
      path: 'para-mi',
      icon: 'person',
      text: 'Para mi'
    },
    {
      path: 'colega',
      icon: 'people',
      text: 'Colega'
    },
    {
      path: 'invitado',
      icon: 'person_add',
      text: 'Invitado'
    },

  ];

  constructor() { }

  ngOnInit(): void {
  }

}
