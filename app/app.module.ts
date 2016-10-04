import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { AppComponent }   from './app.component';
import { I18nPipe }         from './i18n.pipe';
import { routing }        from './app.routing';
import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { ChangeDetectionComponent, Cmp, Auto } from './changedetection.component';
import { ShareComponent, CmpShare, AutoShare} from './share.component';
import { PerformanceComponent} from './performance.component';
import { HeroService }          from './hero.service';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    ChangeDetectionComponent,
    PerformanceComponent,
    I18nPipe,
    ShareComponent,
    Cmp,
    Auto,
    CmpShare,
    AutoShare,
    HeroDetailComponent
  ],
  providers: [
    HeroService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}