import { Component }       from '@angular/core';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { ChangeDetectionComponent } from './changedetection.component';
import { ShareComponent} from './share.component';
import { PerformanceComponent} from './performance.component';
import { DashboardComponent } from './dashboard.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HeroDetailComponent } from './hero-detail.component';



@Component({
  selector: 'my-app',
	template: `
		<h1>{{title}} - Angular 2</h1>
		<nav>
			 <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
      <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
      <a routerLink="/changedetection" routerLinkActive="active">Change Detect</a>
      <a routerLink="/share" routerLinkActive="active">Share</a>
      <a routerLink="/performance" routerLinkActive="active">Performance</a>
		</nav>
		<router-outlet></router-outlet>
	`,
  styleUrls:  ['app/app.component.css']
})

export class AppComponent {
  title = 'Tour of Heroes';
}

