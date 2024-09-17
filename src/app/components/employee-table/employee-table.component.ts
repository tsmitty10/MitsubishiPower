import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AgGridAngular } from 'ag-grid-angular';
import {
  ColDef,
  INumberFilterParams,
  ITextFilterParams,
  ModelUpdatedEvent,
} from 'ag-grid-community';
import { EmployeesService } from '../../services/employees.service';
import { Employee } from '../../employees';
import { Utils } from '../../utils/Utils';
import { InvalidEmployeeComponent } from '../invalid-employee/invalid-employee.component';

@Component({
  selector: 'app-employee-table',
  standalone: true,
  imports: [AgGridAngular],
  templateUrl: './employee-table.component.html',
  styleUrl: './employee-table.component.scss',
})
export class EmployeeTableComponent {
  message = '';
  employees: Employee[] = [];
  public noRowsOverlayComponent: any = InvalidEmployeeComponent;
  public noRowsOverlayComponentParams: any = {
    noRowsMessageFunc: () => this.message,
  };

  constructor(
    private router: Router,
    private employeeService: EmployeesService,
    private utils: Utils
  ) {
    this.employees = this.employeeService.getAllEmployees();
  }

  colDefs: ColDef[] = [
    {
      field: 'id',
      headerName: 'ID',
      filter: 'agTextColumnFilter',
      flex: 1,
      filterParams: {
        buttons: ['apply', 'reset'],
        closeOnApply: true,
        textMatcher: ({ value, filterText }) => {
          let anyEmployee = this.employees.find((employee) => {
            return String(employee.id) === filterText;
          });

          if (!anyEmployee) {
            this.message = 'Invalid Employee';
            return false;
          }

          let vowelEmployee = this.employees.find((employee) => {
            return (
              String(employee.id) === filterText &&
              ['a', 'e', 'i', 'o', 'u'].includes(
                employee.employee_name.charAt(0).toLowerCase()
              )
            );
          });

          if (anyEmployee && !vowelEmployee) {
            this.message = "Employee's name does not begin with a vowel";
            return false;
          }
          if (value !== filterText) {
            return false;
          }
          return true;
        },
      } as ITextFilterParams,
    },
    {
      field: 'employee_name',
      headerName: 'Name',
      filter: true,
      flex: 2,
      filterParams: {
        buttons: ['apply', 'reset'],
        closeOnApply: true,
      } as ITextFilterParams,
    },
    {
      field: 'employee_salary',
      filter: 'agNumberColumnFilter',
      headerName: 'Salary',
      valueFormatter: (p) => this.currencyFormatter(p.value),
      flex: 3,
      filterParams: {
        buttons: ['apply', 'reset'],
        closeOnApply: true,
      } as INumberFilterParams,
    },
    {
      field: 'employee_age',
      headerName: 'Age',
      filter: 'agNumberColumnFilter',
      flex: 4,
      filterParams: {
        buttons: ['apply', 'reset'],
        closeOnApply: true,
      } as INumberFilterParams,
    },
  ];

  /**
   * Used when filtering. If model contains 0 items, show overlap message
   */
  onModelUpdated(event: ModelUpdatedEvent) {
    if (event.api.getDisplayedRowCount() == 0) {
      event.api.showNoRowsOverlay();
    }
    if (event.api.getDisplayedRowCount() > 0) {
      event.api.hideOverlay();
    }
  }

  /**
   * Format USD currency within table
   */
  currencyFormatter(currency: number) {
    return this.utils.currencyFormatter(currency);
  }

  /**
   * Navigate to employee detail page when clicked. Pass in ID of employee
   */
  selectedRow(event: any) {
    this.router.navigate(['/detail', event.data.id]);
  }
}
