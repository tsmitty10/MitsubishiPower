import { Component } from '@angular/core';
import { INoRowsOverlayAngularComp } from 'ag-grid-angular';
import { INoRowsOverlayParams } from 'ag-grid-community';

type CustomNoRowsOverlayParams = INoRowsOverlayParams & {
  noRowsMessageFunc: () => string;
};

@Component({
  selector: 'app-invalid-employee',
  standalone: true,
  imports: [],
  templateUrl: './invalid-employee.component.html',
  styleUrl: './invalid-employee.component.scss',
})
export class InvalidEmployeeComponent implements INoRowsOverlayAngularComp {
  public params!: CustomNoRowsOverlayParams;

  agInit(params: CustomNoRowsOverlayParams): void {
    this.refresh(params);
  }

  refresh(params: CustomNoRowsOverlayParams): void {
    this.params = params;
  }
}
