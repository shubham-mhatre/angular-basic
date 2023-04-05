import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-templaterefvariable7',
  templateUrl: './templaterefvariable7.component.html',
  styleUrls: ['./templaterefvariable7.component.css']
})
export class Templaterefvariable7Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logTextValue(value:any){
    alert("input value : "+ value);
  }

}
