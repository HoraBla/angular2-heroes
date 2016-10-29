import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';
import { HttpModule }    from '@angular/http';

import '../rxjs-extensions';

import { AppRoutingModule }     from './app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../shared/services/in-memory-data.service';
import { HeroService } from '../shared/services/hero.service';

import { AppComponent } from '../components/app/app.component';
import { DashboardComponent }   from '../components/dashboard/dashboard.component';
import { HeroesComponent }      from '../components/heroes/heroes.component';
import { HeroDetailComponent }  from '../components/hero-detail/hero-detail.component';
import { HeroSearchComponent }  from '../components/hero-search/hero-search.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    AppRoutingModule,
  ],
  declarations: [ AppComponent, HeroesComponent, HeroDetailComponent, DashboardComponent, HeroSearchComponent ],
  providers:    [ HeroService ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
