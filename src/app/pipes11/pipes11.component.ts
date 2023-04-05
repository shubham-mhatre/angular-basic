import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes11',
  templateUrl: './pipes11.component.html',
  styleUrls: ['./pipes11.component.css']
})
export class Pipes11Component implements OnInit {
  public name="User";
  public message="welcome to angular demo";

  public person={
    "firstname":"perFn",
    "lastname":"perLn"
  }

  public date = new Date();
  
  constructor() { }

  ngOnInit(): void {
  }

}
