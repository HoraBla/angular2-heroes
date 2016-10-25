import { Component } from '@angular/core';

export class Hero {

  constructor(public id: number, public name: string){}
}

@Component({
  selector: 'my-app',
  templateUrl: 'app/component.html'
})
export class AppComponent {
  title = 'Tour of Heroes';
  hero = new Hero(1, 'Windstorm');
}
