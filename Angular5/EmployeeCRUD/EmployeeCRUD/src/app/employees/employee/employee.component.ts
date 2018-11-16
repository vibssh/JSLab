import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../../shared/employee.service';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
  providers: [EmployeeService]
})
export class EmployeeComponent implements OnInit {

  constructor(private employeeService: EmployeeService) { }

  ngOnInit() {
  }

  // posting data
  // tslint:disable-next-line:one-line
  addEmployee( fName, lName, eCode, pos, off ){
    this.employeeService.postService(fName, lName, eCode, pos, off).subscribe((data) => {
      console.info('data successfully posted ', data);
    });
   }
}
