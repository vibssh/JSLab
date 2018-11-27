import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Employee } from './employee.model';


@Injectable()
export class EmployeeService {
  selectedEmployee: Employee;
  employeeList: Employee[];
  apiUrl = 'http://localhost:3004/Employee';


  constructor(private http: HttpClient) { }

  // Get Method
  getService() {
    return this.http.get(this.apiUrl);
  }
  // Post Method
  postService(fName, lName, empCode, position, office) {
    const emp = {
      FirstName: fName,
      LastName: lName,
      EmpCode: empCode,
      Position: position,
      Office: office
    };
    let body = JSON.stringify(emp);
    return this.http.post(this.apiUrl, body);
  }
  // Put Method
  updateService(employee) {
    let body = JSON.stringify(employee);
    return this.http.put(this.apiUrl + employee.id, body);
  }
  // Delete Method
  deleteService(employee) {
    return this.http.delete(this.apiUrl + employee.id);
  }
}
