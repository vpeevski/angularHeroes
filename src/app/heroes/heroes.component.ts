import {Component, OnDestroy, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {heroesMock} from "../mock-heroes";
import {HeroesDataService} from "../services/heroes-data.service";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {

  selectedHero: Hero;
  heroes = heroesMock;
  filterValue: string;
  filterSubscription: Subscription

  constructor(private dataService: HeroesDataService) {}

  ngOnInit() {
    this.filterSubscription = this.dataService.filterHeroByName.subscribe((newFilterValue) => {
        this.filterValue = newFilterValue;
      }
    );
  }

  ngOnDestroy() {
    this.filterSubscription.unsubscribe();
  }

  onSelect(hero: Hero) {
    this.dataService.selectHero(hero);
    this.selectedHero = hero;
  }

}
