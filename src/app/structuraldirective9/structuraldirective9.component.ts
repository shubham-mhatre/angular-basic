import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuraldirective9',
  templateUrl: './structuraldirective9.component.html',
  styleUrls: ['./structuraldirective9.component.css']
})
export class Structuraldirective9Component implements OnInit {
  public displayName=true;
  public displayNameIfElse=false;
  public displayNameIfElseAlternative=false;

  public switchColor="red";

  public forColors = ["red","blue","green","yello"];

  constructor() { }

  ngOnInit(): void {
  }

}
