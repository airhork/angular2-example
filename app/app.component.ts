import { Component }       from '@angular/core';
import { HeroService }     from './hero.service';
import { HeroesComponent } from './heroes.component';
import { ChangeDetectionComponent } from './changedetection.component';
import { ShareComponent} from './share.component';
import { DashboardComponent } from './dashboard.component';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import { HeroDetailComponent } from './hero-detail.component';



@Component({
  selector: 'my-app',
template: `
  <h1>{{title}} - Angular 2</h1>
  <nav>
    <a [routerLink]="['Dashboard']">Dashboard</a>
    <a [routerLink]="['Heroes']">Heroes</a>
    <a [routerLink]="['ChangeDetection']">Change Detect</a>
    <a [routerLink]="['Share']">Service</a>
  </nav>
  <router-outlet></router-outlet>
`,
  directives: [ROUTER_DIRECTIVES],
  styleUrls:  ['app/app.component.css'],
  providers: [
    ROUTER_PROVIDERS,
    HeroService
  ]
 
})
@RouteConfig([
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  },
{
  path: '/detail/:id',
  name: 'HeroDetail',
  component: HeroDetailComponent
},
{
  path: '/changedetect',
  name: 'ChangeDetection',
  component: ChangeDetectionComponent
},
{
  path: '/share',
  name: 'Share',
  component: ShareComponent
},
{
  path: '/dashboard',
  name: 'Dashboard',
  component: DashboardComponent,
  useAsDefault: true
}
  
])
export class AppComponent {
  title = 'Tour of Heroes';
}

