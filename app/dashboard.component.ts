import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { ShareService } from './share.service';
import {Subject} from 'rxjs/Rx';


@Component({
  selector: 'my-dashboard',
  styleUrls: ['app/dashboard.component.css'],
  templateUrl: 'app/dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  react:string = '';
  toXeroString:string='';

  constructor(
    private router: Router,
    private heroService: HeroService,
    private shareService: ShareService) {
      shareService.getSubject().subscribe( x => this.react = x);

      window.addEventListener("message", function(event) {
        shareService.getSubject().next(event.data);
      }, false);      
  }
  
  ngOnInit() {
    var tem = this.heroService.getHeroes();
    this.heroes = tem.slice(1, 5);
  }
  
  send() {
    console.log('send out the message');
    document.getElementById("react").contentWindow.postMessage(this.toXeroString, "*");
  }
 
  gotoDetail(hero: Hero) {
    let link = ['/detail', { id: hero.id }];
    this.router.navigate(link);
  }
}


