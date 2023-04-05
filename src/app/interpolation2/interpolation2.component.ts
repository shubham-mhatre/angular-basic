import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-interpolation2',
  templateUrl: './interpolation2.component.html',
  styleUrls: ['./interpolation2.component.css']
})
export class Interpolation2Component implements OnInit {
  public name="shubham";
  public siteUrl=window.location.href;
  constructor() { }

  ngOnInit(): void {
  }

  greetUser(){
    return "hello " + this.name;
  }

}
