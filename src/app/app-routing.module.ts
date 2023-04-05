import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule , Routes} from '@angular/router';
import { Departmentroute14Component } from './departmentroute14/departmentroute14.component';
import { Employeeroute14Component } from './employeeroute14/employeeroute14.component';
import { Wildcarredirectroute15Component } from './wildcarredirectroute15/wildcarredirectroute15.component';
import { RouteparamDepartmentDetails16Component } from './routeparam-department-details16/routeparam-department-details16.component';
import { DeptoverviewChildroute17Component } from './deptoverview-childroute17/deptoverview-childroute17.component';
import { DeptcontactChildroute17Component } from './deptcontact-childroute17/deptcontact-childroute17.component';


const routes : Routes = [
  {path:'',redirectTo:'/departments',pathMatch:"full"},//redirecting route : 15
  {path:'departments',component:Departmentroute14Component},
  {
    path:'departments/:id',component:RouteparamDepartmentDetails16Component,
    children:[
      {path:'overview',component:DeptoverviewChildroute17Component},
      {path:'contact',component:DeptcontactChildroute17Component}
    ]
  },
  //{path:'departments/'}
  {path:'employees',component:Employeeroute14Component},
  //wildcard route 15 : this should be very last, as url matched from top to bottom
  //this is for invalid url. but base url '' also become invalid, 
  //so we need to handle base url using redirectTo & pathMatch
  {path:'**',component:Wildcarredirectroute15Component}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//related to routing, to stop duplication of import statement here & in app.module
export const routingcomponents=[Departmentroute14Component,
  Employeeroute14Component,
  Wildcarredirectroute15Component,
  RouteparamDepartmentDetails16Component,
  DeptoverviewChildroute17Component,
  DeptcontactChildroute17Component]