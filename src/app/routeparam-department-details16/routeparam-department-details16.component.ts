import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';

@Component({
  selector: 'app-routeparam-department-details16',
  templateUrl: './routeparam-department-details16.component.html',
  styleUrls: ['./routeparam-department-details16.component.css']
})
export class RouteparamDepartmentDetails16Component implements OnInit {
  public selectedDepartmentId:any='';
  constructor(private route:ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
    //let id = this.route.snapshot.paramMap.get('id');
    //this.selectedDepartmentId=id;

    /* here angular has to determin whether to intialize new component
    or use same component when we navigate back to same component
    angular simply reuses same component
    no initialize implies on ngOnInit method & it does not get call
    so the id value not updated. */

    this.route.paramMap.subscribe((param :ParamMap)=>{
      let id = param.get('id');
      this.selectedDepartmentId=id
    });

    //here when value of id changes, event when we are going back to same component.
    //paramMap observarble will detect the changes and read it
    
  }

  goPrevious(){
    let prevId =  parseInt(this.selectedDepartmentId) - 1;
    this.router.navigate(['/departments',prevId]);
    //this.router.navigate(['../',prevId],{relativeTo:this.route});
  }

  goNext(){
    let nextId =  parseInt(this.selectedDepartmentId) + 1;
    this.router.navigate(['/departments',nextId]);
    //this.router.navigate(['../', nextId],{relativeTo:this.route});
  }

  //optional route paramter.
  //optional route parameter does not need place holder in routes.
  backButtonClick(){
    let selectedid = this.selectedDepartmentId;
    this.router.navigate(['/departments',{'id':selectedid}]);
    //this.router.navigate(['../',{id:selectedid}],{relativeTo:this.route});//relative path
  }

  //child route related:
  overviewClick(){
    this.router.navigate(['/departments/overview']);
  }

  contactClick(){
    this.router.navigate(['/departments/contact']);
  }

}
