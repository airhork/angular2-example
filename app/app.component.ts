import { Component }       from '@angular/core';


@Component({
  selector: 'my-app',
template: `
  <h1>{{title}}</h1>
  <img src={{imgpath}}/>
`
})
export class AppComponent {
  title = 'Hello to webpack';
  imgpath = require('./filetype_pdf.png');

}

