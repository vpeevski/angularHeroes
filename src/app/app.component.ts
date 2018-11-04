import {Component, ElementRef, ViewChild} from '@angular/core';
import {HeroesDataService} from "./services/heroes-data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('search_input') searchInput: ElementRef;
  heroesFilterQuery: string = '';
  title = 'Tour of heroes';

  constructor(private data: HeroesDataService) {}

  changeFilter(newValue: string) {
    this.data.updateFilter(newValue);
  }

  setFocus(searchInput: string) {
    this.searchInput.nativeElement.focus();
  }
}
