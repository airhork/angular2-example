import {  Component, Input, OnInit, Directive, ViewChild}       from '@angular/core';
import {ShareService} from './share.service';



@Component({selector: 'cmp',template: `value of next Id, increase two : {{nextValue}}`,providers : [ShareService] })
class Cmp implements OnInit {

  nextValue = 0;
  
  constructor(private shareService: ShareService) {
  }

  getNextValue() {
    this.shareService.getNextId();
    this.nextValue = this.shareService.getNextId();
  }

  ngOnInit() {
    this.nextValue = 0;
  }

}


@Component({selector : 'auto', template:  'value of next Id {{nextValue}}', providers : [ShareService]})
class Auto implements OnInit {
  nextValue = 0;
  
  constructor(private shareService: ShareService) {
  }

  getNextValue() {
    this.nextValue = this.shareService.getNextId();
  }

  ngOnInit() {
    this.nextValue = 0;
  }
}

@Component({
  selector: 'app',
   template: `
   <H1>Service Test</H1>
   <Input type="button" (click)="changeValue()" value="change"/>
   <auto></auto>
   <br/>
   <cmp></cmp>
  `,
  //providers : [ShareService],
  directives: [Cmp,Auto]
})
export class ShareComponent{
  text = 'Auto Text';

  @ViewChild(Cmp)
  private cmp: Cmp;

  @ViewChild(Auto)
  private auto: Auto;

  changeValue () {
    this.cmp.getNextValue();
    this.auto.getNextValue();
  }
}

