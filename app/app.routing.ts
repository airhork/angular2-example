import { Routes, RouterModule } from '@angular/router';

import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { ChangeDetectionComponent } from './changedetection.component';
import { ShareComponent } from './share.component';
import { PerformanceComponent}  from './performance.component';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
    path: 'heroes',
    component: HeroesComponent
  }, 
  {
    path: 'share',
    component : ShareComponent
  },
  {
    path: 'performance',
    component : PerformanceComponent
  },
  {
    path: 'changedetection',
    component :  ChangeDetectionComponent 
  }
];

export const routing = RouterModule.forRoot(appRoutes);