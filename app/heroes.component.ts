import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { Hero } from './hero';
import { HeroDetailComponent } from './hero-detail.component';
import { HeroService } from './hero.service';




@Component({
  selector: 'my-heroes',
  templateUrl: 'app/heroes.component.html',
  styleUrls:  ['app/heroes.component.css'],
  directives: [HeroDetailComponent]
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
    this.heroes = this.heroService.getHeroes();
  }

  ngOnInit() {
    this.getHeroes();
  }
  onSelect(hero: Hero) { 
    this.selectedHero = hero; 
    this.addingHero = false;
  }
  gotoDetail() {
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
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
  this.heroes = this.heroes.filter(h => h !== hero)
      
}

  
}



