import { Component, OnInit }       from '@angular/core';
var {ReactAppView} = require('./ReactApp.jsx');



@Component({
  selector: 'my-app',
template: `
  <h1>{{title}}</h1>
  <img src={{imgpath}}/>
  <div id="react-view"></div>
`
})
export class AppComponent implements OnInit {

  ngOnInit() {
	 ReactAppView.init('this is an inside react app');
  }

  title = 'Hello to webpack';
  imgpath = require('./filetype_pdf.png');

}

