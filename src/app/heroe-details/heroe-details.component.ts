import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../hero";
import {HeroesDataService} from "../services/heroes-data.service";

@Component({
  selector: 'app-heroe-details',
  templateUrl: './heroe-details.component.html',
  styleUrls: ['./heroe-details.component.css']
})
export class HeroeDetailsComponent implements OnInit {

  @Input() selectedHero: Hero;

  constructor(private dataService: HeroesDataService) {}

  ngOnInit() {
    this.dataService.selectedHero.subscribe((hero) => this.selectedHero = hero);
  }

}
