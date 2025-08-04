import { Component } from '@angular/core';

@Component({
  selector: 'app-profile-management',
  templateUrl: './profile-management.component.html',
  styleUrls: ['./profile-management.component.css'],
  standalone: true
})
// PUBLIC_INTERFACE
export class ProfileManagementComponent {
  summaryCards = [
    { label: 'Active Profiles', value: 8 },
    { label: 'Pending Requests', value: 2 },
    { label: 'Deactivated', value: 5 }
  ];
  tableRows = [
    {
      profile: 'Device Alpha',
      type: 'Standard',
      status: 'Active',
      date: '2024-06-21',
      created: 'Admin',
      actions: ''
    },
    {
      profile: 'Beta Pro',
      type: 'Premium',
      status: 'Inactive',
      date: '2024-06-18',
      created: 'Jess',
      actions: ''
    }
  ];
}
