import { Component, OnInit } from '@angular/core';

@Component({
  //selector: 'app-test',//selector can use as html tag in app.component.html
  //selector: '.app-test',//selector can use as class to html tag in app.component.html
  selector: '[app-test]',//selector as attribute in html tag
  //templateUrl: './test.component.html',//points to the html code. we can write html as inline-template also
  //template: '<div>inline template</div>',//inline html
  template: `<div>
                  inline template
            </div>`, //backsticks to use html in multiple lines
  //styleUrls: ['./test.component.css']//point to the css file. we can write css as inline also
  styles: [
    `div{
      color:red;
    }`
      ]

})
export class TestComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
