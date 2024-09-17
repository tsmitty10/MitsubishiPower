import { Routes } from '@angular/router';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { EmployeeTableComponent } from './components/employee-table/employee-table.component';

export const routes: Routes = [
  { path: '', component: EmployeeTableComponent },
  { path: 'detail/:id', component: EmployeeDetailsComponent },
];
