import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding3',
  templateUrl: './propertybinding3.component.html',
  styleUrls: ['./propertybinding3.component.css']
})
export class Propertybinding3Component implements OnInit {
  public textbox1= "textbox1";
  public isDisabled = true;
  constructor() { }

  ngOnInit(): void {
  }

}
