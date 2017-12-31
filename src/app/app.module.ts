import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule }     from '@angular/http';
import { HttpClientModule }    from '@angular/common/http';

// Imports for loading & configuring the in-memory web api
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';


import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';
import { AppComponent }   from './app.component';
import { routing }        from './app.routing';
import { HeroesComponent }      from './heroes.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroDetailComponent }  from './hero-detail.component';
import {ChangeDetectionComponent, Cmp} from './changedetection.component';
import { HeroService }          from './hero.service';
import {MessageService} from './message.service'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    )  
  ],
  declarations: [
    AppComponent,
    HeroesComponent,
    DashboardComponent,
    ChangeDetectionComponent,
    Cmp,
    HeroDetailComponent
  ],
  providers: [
    HeroService, MessageService
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
}
