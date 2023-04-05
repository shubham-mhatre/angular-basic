import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { Iemployee } from '../employeeInterface';

@Component({
  selector: 'app-httpfetchobservable13',
  templateUrl: './httpfetchobservable13.component.html',
  styleUrls: ['./httpfetchobservable13.component.css']
})
export class Httpfetchobservable13Component implements OnInit {

  public employee:Iemployee[]=[];
  public errorMsg="";

  constructor(private employeeService:EmployeeService) { }


  ngOnInit(): any {
    this.employeeService.getEmployeeFromGetCallToJSON()
    .subscribe(response => this.employee=response,
      error => this.errorMsg=error
    );

    console.log(this.employee);

  }

}
