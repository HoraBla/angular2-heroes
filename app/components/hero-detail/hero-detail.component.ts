// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';

import { HeroService } from '../../shared/services/hero.service';

import { Hero } from '../../shared/entities/hero';

@Component({
  selector: 'my-hero-detail',
  templateUrl: 'app/components/hero-detail/hero-detail.component.html',
  styleUrls: ['app/components/hero-detail/hero-detail.component.css'],
})
export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero;

  constructor(private heroService: HeroService, private route: ActivatedRoute,
      private location: Location) {}

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      let id = +params['id'];
      this.heroService.getHero(id)
        .then(hero => this.hero = hero);
    });
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.heroService.update(this.hero)
      .then(
        () => this.goBack()
      );
  }

}
