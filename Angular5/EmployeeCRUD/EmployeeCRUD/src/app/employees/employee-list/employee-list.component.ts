import { Component, OnInit } from '@angular/core';
import { Employee } from '../../shared/employee.model';
import { EmployeeService } from '../../shared/employee.service';


@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss']
})
export class EmployeeListComponent implements OnInit {
  employeeList: Employee[];
  constructor( private employeeService: EmployeeService) { }

  ngOnInit() {
    this.getEmployee();
  }
  getEmployee() {
   this.employeeService.getService().subscribe((data) => {
    console.info(data);
   });
  }
}
