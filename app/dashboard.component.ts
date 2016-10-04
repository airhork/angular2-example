import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';


@Component({
  selector: 'my-dashboard',
  styleUrls: ['app/dashboard.component.css'],
  templateUrl: 'app/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }
  
  ngOnInit() {
    var tem = this.heroService.getHeroes();
    this.heroes = tem.slice(1, 5);
  }

  gotoDetail(hero: Hero) {
    let link = ['/detail', { id: hero.id }];
    this.router.navigate(link);
  }
}

