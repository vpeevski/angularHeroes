import { Component, OnInit } from '@angular/core';
import {Hero} from '../Hero';
import {heroesMock} from "../mock-heroes";
import {HeroesDataService} from "../services/heroes-data.service";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes = heroesMock;

  constructor(private dataService: HeroesDataService) {}

  ngOnInit() {

  }

  onSelect(hero: Hero) {
    this.dataService.selectHero(hero);
  }

}
