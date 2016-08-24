import {  Component, Input, OnInit, Directive, ViewChild}       from '@angular/core';
import {ShareService} from './share.service';



@Component({selector: 'cmps',template: `value of next Id, increase two : {{nextValue}}`,providers : [ShareService] })
class CmpShare implements OnInit {

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


@Component({selector : 'autos', template:  'value of next Id {{nextValue}}', providers : [ShareService]})
class AutoShare implements OnInit {
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
  selector: 'sc',
   template: `
   <H1>Service Test</H1>
   <Input type="button" (click)="changeValue()" value="change"/>
   <autos></autos>
   <br/>
   <cmps></cmps>
  `,
  //providers : [ShareService],
  directives: [CmpShare,AutoShare]
})
export class ShareComponent{
  text = 'Auto Text';

  @ViewChild(CmpShare)
  private cmp: CmpShare;

  @ViewChild(AutoShare)
  private auto: AutoShare;

  changeValue () {
    this.cmp.getNextValue();
    this.auto.getNextValue();
  }
}

