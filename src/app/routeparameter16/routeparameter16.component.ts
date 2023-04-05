import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-routeparameter16',
  templateUrl: './routeparameter16.component.html',
  styleUrls: ['./routeparameter16.component.css']
})
export class Routeparameter16Component implements OnInit {
  //this router param 16 component added in department14 component
  departments=[
    {"id":1,"name":"angular"},
    {"id":2,"name":"node"},
    {"id":3,"name":"mongo"},
    {"id":4,"name":"java"},
  ];

  public isSelectedId:any;

  constructor(private route:Router, private router : ActivatedRoute) {
    //Router to navigate
    //ActivatedRoute to read url param
   }

  onSelect(department:any){
    this.route.navigate(['/departments',department.id]);//absolute path
    //this.route.navigate([department.id],{relativeTo:this.router});
  }

  ngOnInit(): void {
    this.router.paramMap.subscribe((param :ParamMap)=>{
      let id = param.get('id');
      this.isSelectedId=id;
    });
  }

  isMatched(department:any){
    return department.id == this.isSelectedId;
  }

}
