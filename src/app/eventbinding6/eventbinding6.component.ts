import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding6',
  templateUrl: './eventbinding6.component.html',
  styleUrls: ['./eventbinding6.component.css']
})
export class Eventbinding6Component implements OnInit {
  public greetmsg="";
  clickFunction(){
    //alert("button clicked");
    if(this.greetmsg==""){
      this.greetmsg="welcome user";
    }else{
      this.greetmsg="";
    }
  }

  clickWithEvent(event:any){
    console.log(event);
    this.greetmsg=event.type;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
