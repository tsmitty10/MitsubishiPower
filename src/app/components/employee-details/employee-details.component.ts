import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../employees';
import { EmployeeCardComponent } from '../employee-card/employee-card.component';
import { EmployeeNotFoundComponent } from '../employee-not-found/employee-not-found.component';

@Component({
  selector: 'app-employee-details',
  standalone: true,
  imports: [EmployeeCardComponent, EmployeeNotFoundComponent],
  templateUrl: './employee-details.component.html',
  styleUrl: './employee-details.component.scss',
})
export class EmployeeDetailsComponent implements OnInit {
  employee: Employee | undefined;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    let employeeId = this.route.snapshot.paramMap.get('id');
    let employee = this.employeeService.getEmployeeById(Number(employeeId));
    if (employee) {
      this.employee = employee;
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
