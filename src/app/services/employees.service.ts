import { Injectable } from '@angular/core';
import { Employee, employees } from '../employees';

@Injectable({
  providedIn: 'root',
})
export class EmployeesService {
  employees: Employee[] = [];

  constructor() {
    this.employees = employees;
  }

  getAllEmployees(): Employee[] {
    return this.employees;
  }

  getEmployeeById(id: number): Employee | undefined {
    return this.employees.find((emply) => emply.id === id);
  }
}
