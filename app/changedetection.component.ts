import {  Component, Input, Directive, ChangeDetectionStrategy, ChangeDetectorRef }       from '@angular/core';
import {I18nPipe} from './i18n.pipe';
import {ShareService} from './share.service';



@Component({selector: 'cmp',template: `Number of ticks: {{numberOfTicks}}`, changeDetection: ChangeDetectionStrategy.OnPush})
class Cmp {
  numberOfTicks = 0;
  
  constructor(private ref: ChangeDetectorRef) {
    setInterval(() => {
      this.numberOfTicks ++
      this.ref.markForCheck();
    }, 1000);
  }
}


@Component({selector : 'auto', template:  'changed by button {{text}}'})
class Auto {
  @Input() text:string;
}

@Component({
  selector: 'app',
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
  pipes : [I18nPipe],
  providers: [ShareService],
  directives: [Cmp,Auto]
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

