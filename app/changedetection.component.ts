import {  Component, Input, Directive, ChangeDetectionStrategy, ChangeDetectorRef }    from '@angular/core';
import {ShareService} from './share.service';



@Component({selector: 'cmp',template: `Number of ticks: {{numberOfTicks}}`, changeDetection: ChangeDetectionStrategy.OnPush})
export class Cmp {
  numberOfTicks = 0;
  
  constructor(private ref: ChangeDetectorRef) {
    setInterval(() => {
      this.numberOfTicks ++
      this.ref.markForCheck();
    }, 1000);
  }
}


@Component({selector : 'auto', template:  'changed by button {{text}}'})
export class Auto {
  @Input() text:string;
}

@Component({
  selector: 'cd',
   template: `
   <H1>Change detection test</H1>
   <Input type="button" (click)="changeValue()" value="change"/>
   <auto [text]="text"></auto>
   <br/>
   <cmp></cmp>
   <div>
   {{'hello' | i18n}}
   </div>
  `,
  providers : [ShareService]
})
export class ChangeDetectionComponent{
  text = 'Auto Text';
  

  constructor(private shareService : ShareService) {
  }

  changeValue () {
    this.shareService.updateTitle('new i18n value');
    this.text = 'new text value';
  }
}

