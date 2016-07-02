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
  nextId = 21;
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

  makeid(){
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for( var i=0; i < 5; i++ )
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }



  shoot() {
    console.log('in the shoot');
    let temData:Hero[] = [];
    for(var i = 0; i< 2000; i++) {
      temData.push({id : this.nextId++, name : this.makeid()});
    }
    this.heroes = this.heroes.concat(temData);
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



