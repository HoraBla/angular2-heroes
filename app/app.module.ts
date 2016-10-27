import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { RouterModule }   from '@angular/router';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard.component';
import { HeroService } from './hero.service';
import { HeroesComponent }   from './heroes.component';
import { HeroDetailComponent } from './hero-detail.component'

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
  ],
  declarations: [ AppComponent, HeroesComponent, HeroDetailComponent, DashboardComponent ],
  providers:    [ HeroService ],
  bootstrap:    [ AppComponent ],
})
export class AppModule { }
