import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { Employee } from '../../employees';
import { MatGridListModule } from '@angular/material/grid-list';
import { Utils } from '../../utils/Utils';

@Component({
  selector: 'app-employee-card',
  standalone: true,
  imports: [MatCardModule, MatGridListModule],
  templateUrl: './employee-card.component.html',
  styleUrl: './employee-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class EmployeeCardComponent {
  @Input() employee!: Employee;

  constructor(private utils: Utils) {}

  currencyFormatter(currency: number) {
    return this.utils.currencyFormatter(currency);
  }
}
