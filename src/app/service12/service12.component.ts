import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-service12',
  templateUrl: './service12.component.html',
  styleUrls: ['./service12.component.css']
})
export class Service12Component implements OnInit {


  public employee:any=[];

  constructor(private employeeService:EmployeeService) { }

  ngOnInit() {
    this.employee=this.employeeService.getEmployee();
  }

}
