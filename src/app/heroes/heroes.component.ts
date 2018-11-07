import {Component, OnDestroy, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {heroesMock, LAST_HERO_ID} from "../mock-heroes";
import {HeroesDataService} from "../services/heroes-data.service";
import {_} from "underscore";
import {ActivatedRoute} from "@angular/router";
import {NavigationService} from "../services/navigation.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {

  heroes = heroesMock;
  selectedHero: Hero;
  lastHeroId: number = LAST_HERO_ID;


  constructor(private route: ActivatedRoute, private navigationService: NavigationService, private dataService: HeroesDataService) {
    this.navigationService.updateRoute(route);
  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  onSelect(hero: Hero) {
    this.selectHero(hero);
  }

  onDelete() {
    const heroToDelete = this.selectedHero;
    heroToDelete.isDeleting = true;
    const indexToDelete = _.findIndex(this.heroes, hero => hero.id === heroToDelete.id);
    //console.log("indexToDelete = " + indexToDelete);
    if (indexToDelete === 0 && this.heroes.length > 1) {
      this.selectHero(this.heroes[1]);
    } else {
      this.selectHero(this.heroes[indexToDelete - 1]);
    }

    this.sleep(1000).then(() => {
      //this.heroes = [...this.heroes.slice(0, indexToDelete), ...this.heroes.slice(indexToDelete + 1)]; // works OK
      this.heroes = this.heroes.filter(function (element) {
        return element.id !== heroToDelete.id;
      });
      heroToDelete.isDeleting = false;
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
    this.sleep(1000).then(() => newHero.isNew = false);
  }

  private selectHero(hero: Hero): boolean {
    if (hero && !hero.isDeleting) {
      console.log("Selection changed to " + hero.name);
      this.dataService.selectHero(hero);
      this.selectedHero = hero;
      return true;
    }
    return false;
  }

  sleep(time) {
    return new Promise((resolve) => setTimeout(resolve, time));
  }
}
