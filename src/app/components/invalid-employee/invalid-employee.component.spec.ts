import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvalidEmployeeComponent } from './invalid-employee.component';

describe('InvalidEmployeeComponent', () => {
  let component: InvalidEmployeeComponent;
  let fixture: ComponentFixture<InvalidEmployeeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InvalidEmployeeComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InvalidEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
