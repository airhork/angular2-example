import { Injectable }    from '@angular/core';


import { Hero } from './hero';


var heroes = [
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narco'},
      {id: 13, name: 'Bombasto'},
      {id: 14, name: 'Celeritas'},
      {id: 15, name: 'Magneta'},
      {id: 16, name: 'RubberMan'},
      {id: 17, name: 'Dynama'},
      {id: 18, name: 'Dr IQ'},
      {id: 19, name: 'Magma'},
      {id: 20, name: 'Tornado'}
    ];

var nextid = 21;

@Injectable()
export class HeroService {


  getHeroes() {
    return heroes;
  }

  getHero(id: number) {
    var hero =  heroes.filter(h => h.id === id)[0];
    return hero;
  }

  save(hero: Hero) {
    if (hero.id) {
      heroes.forEach( h => {
        if(h.id == hero.id) {
         h.name = hero.name;
        }
      });
    } else {
      hero.id = nextid++;
      heroes.push(hero);
    }
  }

  delete(hero: Hero) {
     heroes = heroes.filter(h => h !== hero)
  }
  
}

