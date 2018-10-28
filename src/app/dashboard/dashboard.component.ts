import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import {heroesMock} from "../mock-heroes";
import {HeroesDataService} from "../services/heroes-data.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = heroesMock;
  filterQuery: string = "";

  constructor(private dataService: HeroesDataService) { }

  ngOnInit() {
    this.dataService.filterHeroByName.subscribe((newFilterValue) => this.filterQuery = newFilterValue);
  }

}
