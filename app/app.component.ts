import { Component }       from '@angular/core';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { ChangeDetectionComponent } from './changedetection.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';


@Component({
  selector: 'my-app',
template: `
  <h1>{{title}}</h1>
  <nav>
      <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/changedetection" routerLinkActive="active">Change Detect</a>
    </nav>
  <router-outlet></router-outlet>
`,
  styleUrls:  ['app/app.component.css']
 
})
export class AppComponent {
  title = 'Tour of Heroes';
}

