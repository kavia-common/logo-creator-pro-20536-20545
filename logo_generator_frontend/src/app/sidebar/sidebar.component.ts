import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true
})
// PUBLIC_INTERFACE
export class SidebarComponent {
  navItems = [
    { label: 'Dashboard', icon: 'dashboard', active: true },
    { label: 'Profiles', icon: 'account_circle', active: false },
    { label: 'Settings', icon: 'settings', active: false }
  ];
}
