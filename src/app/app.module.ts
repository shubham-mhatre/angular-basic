import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { Interpolation2Component } from './interpolation2/interpolation2.component';
import { Propertybinding3Component } from './propertybinding3/propertybinding3.component';
import { Classbinding4Component } from './classbinding4/classbinding4.component';
import { Stylebinding5Component } from './stylebinding5/stylebinding5.component';
import { Eventbinding6Component } from './eventbinding6/eventbinding6.component';
import { Templaterefvariable7Component } from './templaterefvariable7/templaterefvariable7.component';
import { Twowaydatabind8Component } from './twowaydatabind8/twowaydatabind8.component';
import { Structuraldirective9Component } from './structuraldirective9/structuraldirective9.component';
import { Componentinteraction10Component } from './componentinteraction10/componentinteraction10.component';
import { Pipes11Component } from './pipes11/pipes11.component';
import { Service12Component } from './service12/service12.component';
import { EmployeeService } from './employee.service';
import {HttpClientModule} from '@angular/common/http';
import { Httpfetchobservable13Component } from './httpfetchobservable13/httpfetchobservable13.component';
import { AppRoutingModule, routingcomponents } from './app-routing.module';
import { Routingnavigation14Component } from './routingnavigation14/routingnavigation14.component';
import { Routeparameter16Component } from './routeparameter16/routeparameter16.component';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    Interpolation2Component,
    Propertybinding3Component,
    Classbinding4Component,
    Stylebinding5Component,
    Eventbinding6Component,
    Templaterefvariable7Component,
    Twowaydatabind8Component,
    Structuraldirective9Component,
    Componentinteraction10Component,
    Pipes11Component,
    Service12Component,
    Httpfetchobservable13Component,
    Routingnavigation14Component,
    routingcomponents,
    Routeparameter16Component
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
