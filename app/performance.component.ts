import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  selector: 'big-table',
  styleUrls : ['app/performance.component.css'],
  templateUrl: 'app/performance.component.html'
})
export class PerformanceComponent implements OnInit {

  form = {filter:''};
  grid : Array<any> = null;
  visibleCount = 0;
  

  constructor(
    private heroService: HeroService) {
  }

  ngOnInit() {
    this.grid = this.heroService.generateGrid(1000,10);
  }

  remove() {
    this.grid = [];
    this.form.filter = '';
  }



  add() {
    this.grid = this.heroService.generateGrid(1000,10);
    this.form.filter = '';
  }

  handleFilterChange(newValue:string) {
    // Reset the visible count. As we iterate of the items checking
    // for visibility, we can increment this count as necessary.
    this.visibleCount = 0;
    // We are pre-calculating the column count here because we are
    // assuming a uniform column distribution in the grid.
    var rowCount = this.grid.length;
    var columnCount = ( this.grid.length && this.grid[ 0 ].items.length );
    for ( var r = 0 ; r < rowCount ; r++ ) {
	var row = this.grid[ r ];
	for ( var c = 0 ; c < columnCount ; c++ ) {
	    var item = row.items[ c ];
	    // The item is hidden if the given filter text cannot be
	    // found in the value of the item.
	    item.isHiddenByFilter = ( newValue && ( item.value.indexOf( newValue ) === -1 ) );
	    // If the item isn't hidden, track it as part of the visible
	    // set of data.
	    if ( ! item.isHiddenByFilter ) {
		this.visibleCount++;
	    }
	}
    }

  }

}

