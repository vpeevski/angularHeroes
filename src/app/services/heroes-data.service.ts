import { Injectable } from '@angular/core';
import {Hero} from "../hero";
import {Subject} from "rxjs/internal/Subject";
import {Observable} from "rxjs/internal/Observable";
import {BehaviorSubject} from "rxjs/internal/BehaviorSubject";

@Injectable({
  providedIn: 'root'
})
export class HeroesDataService {

  private filterSubject: Subject<string> = new BehaviorSubject("");
  public filterHeroByName: Observable<string> = this.filterSubject.asObservable();

  private dataSubject: Subject<Hero> = new Subject();
  public selectedHero: Observable<Hero> = this.dataSubject.asObservable();

  constructor() { }

  public selectHero (hero: Hero) {
    this.dataSubject.next(hero);
  }

  public updateFilter (filter: string) {
    this.filterSubject.next(filter);
  }
}
