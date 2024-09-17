import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-employee-not-found',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './employee-not-found.component.html',
  styleUrl: './employee-not-found.component.scss',
})
export class EmployeeNotFoundComponent {}
