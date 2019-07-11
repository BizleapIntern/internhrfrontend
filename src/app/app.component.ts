import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  items = [
    {
      title: 'Location',
      icon: 'home-outline',
      link: ['/location'],
    },
    {
      title: 'Employee',
      icon: 'person-outline',
      link: ['/employee'],
    }
  ];

  constructor(private sidebarService: NbSidebarService) {

  }

  toggleSidebar() {
    this.sidebarService.toggle(true, 'menu-sidebar')
  }
}
