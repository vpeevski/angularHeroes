import {AfterContentInit, AfterViewInit, Component, DoCheck, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {heroesMock} from "../mock-heroes";
import {HeroesDataService} from "../services/heroes-data.service";
import {Subscription} from "rxjs/internal/Subscription";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = heroesMock;
  filterQuery: string = "";
  dataServiceSubscribtion: Subscription;

  constructor(private dataService: HeroesDataService) {
  }

  ngOnInit() {
    this.dataServiceSubscribtion = this.dataService.filterHeroByName.subscribe((newFilterValue) => {
        this.filterQuery = newFilterValue;
      }
    );
  }

  ngOnDestroy() {
    this.dataServiceSubscribtion.unsubscribe();
  }

}
