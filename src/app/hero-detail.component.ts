import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-hero-detail',
  styleUrls: ['hero-detail.component.css'],
  templateUrl: 'hero-detail.component.html'
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  @Output() close = new EventEmitter();
  error: any;
  navigated = false; // true if navigated here
  

  constructor(
    private heroService: HeroService,
    private routeParams: ActivatedRoute) {
  }

  ngOnInit() {
    this.routeParams.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
      let id = +params['id'];
      this.navigated = true;
      this.heroService.getHero(id)
	  .subscribe(hero => this.hero = hero);
    } else {
      this.navigated = false;
      this.hero = new Hero();
    }
    });

    
  }

  save() {
    this.heroService
	.save(this.hero)
	.subscribe(hero => {
	  this.hero = hero; // saved hero, w/ id if new
	  this.goBack(hero);
	})
  }
  
  

  goBack(savedHero: Hero = null) {
    this.close.emit(savedHero);
    if (this.navigated) { window.history.back(); }
  }
 
}

