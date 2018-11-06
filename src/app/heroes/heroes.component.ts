import {Component, OnDestroy, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {heroesMock, LAST_HERO_ID} from "../mock-heroes";
import {HeroesDataService} from "../services/heroes-data.service";
import {Subscription} from "rxjs/internal/Subscription";
import { _ } from "underscore";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {

  selectedHero: Hero;
  heroes = heroesMock;
  filterValue: string;
  filterSubscription: Subscription;
  lastHeroId: number = LAST_HERO_ID;


  constructor(private dataService: HeroesDataService) {}

  ngOnInit() {
    this.filterSubscription = this.dataService.filterHeroByName.subscribe((newFilterValue) => {
        this.filterValue = newFilterValue;
        if (this.selectedHero && !this.selectedHero.name.includes(newFilterValue)) {
          this.selectedHero = null;
        }
      }
    );
  }

  ngOnDestroy() {
    this.filterSubscription.unsubscribe();
  }

  onSelect(hero: Hero) {
    this.selectHero(hero);
  }

  onDelete() {
    this.selectedHero.isDeleting = true;
    const indexToDelete = _.findIndex(this.heroes, hero => hero.id === this.selectedHero.id);
    this.selectHero(this.heroes[indexToDelete === 0 ? 0 : indexToDelete - 1]);
    this.sleep(1000).then( () => {
      this.heroes = [...this.heroes.slice(0, indexToDelete), ...this.heroes.slice(indexToDelete + 1)];
      this.selectedHero.isDeleting = false;
    });
  }

  onAdd() {
    this.lastHeroId++;
    const newHero = {
      id: this.lastHeroId,
      name: "<Add name ...>",
      isNew: true
    };
    this.heroes = [...this.heroes, newHero];
    this.selectHero(newHero);
    this.sleep(1000).then (() => newHero.isNew = false);
  }

  private selectHero (hero: Hero): void {
    this.dataService.selectHero(hero);
    this.selectedHero = hero;
  }

  sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
}
