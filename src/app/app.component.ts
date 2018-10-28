import { Component } from '@angular/core';
import {HeroesDataService} from "./services/heroes-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heroesFilterQuery: string = '';
  title = 'Tour of heroes';

  constructor(private data: HeroesDataService) {}

  changeFilter(newValue: string) {
    this.data.updateFilter(newValue);
  }

}
