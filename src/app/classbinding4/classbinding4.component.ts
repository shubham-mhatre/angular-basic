import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding4',
  templateUrl: './classbinding4.component.html',
  styleUrls: ['./classbinding4.component.css']
})
export class Classbinding4Component implements OnInit {
  public successClass = "text-success";
  public hasError=true;
  public isSpecial=true;

  public messageClass={
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-italic": this.isSpecial
  }

  constructor() { }

  ngOnInit(): void {
  }

}
