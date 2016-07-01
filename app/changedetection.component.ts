import {  Component,  Directive, ChangeDetectionStrategy, ChangeDetectorRef }       from '@angular/core';



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

@Component({
  selector: 'app',
   template: `
    <cmp><cmp>
  `,
  directives: [Cmp],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChangeDetectionComponent{
}

