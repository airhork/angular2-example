import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';


//git test

@Component({
  selector: 'my-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls:  ['heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  addingHero = false;
  selectedHero: Hero;
  error:any ;
  constructor(
    private router: Router,
    private heroService: HeroService) { }
  getHeroes() {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }
  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) { this.selectedHero = hero; }
  gotoDetail() {
        this.router.navigate(['/detail', this.selectedHero.id]);

  }

addHero() {
  this.addingHero = true;
  this.selectedHero = null;
}

close(savedHero: Hero) {
  this.addingHero = false;
  if (savedHero) { this.getHeroes(); }
}

delete(hero: Hero, event: any) {
  event.stopPropagation();
  this.heroService
      .delete(hero)
      .subscribe(res => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      })
}

  
}



