import { Injectable } from '@angular/core';
import {Hero} from "../hero";
import {Subject} from "rxjs/internal/Subject";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class HeroesDataService {

  private dataSubject: Subject<Hero> = new Subject();
  public selectedHero: Observable<Hero> = this.dataSubject.asObservable();

  constructor() { }

  public selectHero (hero: Hero) {
    this.dataSubject.next(hero);
  }
}
