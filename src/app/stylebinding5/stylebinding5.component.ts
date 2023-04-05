import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding5',
  templateUrl: './stylebinding5.component.html',
  styleUrls: ['./stylebinding5.component.css']
})
export class Stylebinding5Component implements OnInit {
  public hasError = false;
  public highlightColor = "blue";

  public multipleStyle={
    color:"brown",
    fontStyle:"italic"
  }

  constructor() { }

  ngOnInit(): void {
  }

}
