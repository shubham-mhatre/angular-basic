import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-componentinteraction10',
  templateUrl: './componentinteraction10.component.html',
  styleUrls: ['./componentinteraction10.component.css']
})
export class Componentinteraction10Component implements OnInit {

  @Input() public parentData:any;// @Input when data coming from parent to child

  @Output() public childEvent=new EventEmitter();

  fireEvent(){
    this.childEvent.emit('hello parent module');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
