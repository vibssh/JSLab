import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../shared/employee.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss'],
  providers: [EmployeeService]
})
export class EmployeesComponent implements OnInit {

  constructor( private employeeService: EmployeeService) { }

  ngOnInit() {
    this.employeeService.getService().subscribe((data) => {
      console.info('Employees ', data);
    });
  }



}
