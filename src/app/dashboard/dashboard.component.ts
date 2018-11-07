import {AfterContentInit, AfterViewInit, Component, DoCheck, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {heroesMock} from "../mock-heroes";
import {HeroesDataService} from "../services/heroes-data.service";
import {Subscription} from "rxjs/internal/Subscription";
import {ActivatedRoute} from "@angular/router";
import {NavigationService} from "../services/navigation.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes: Hero[] = heroesMock;
  filterQuery: string = "";
  private dataServiceSubscribtion: Subscription;

  constructor(private route: ActivatedRoute, private navigationService: NavigationService, private dataService: HeroesDataService) {
    this.navigationService.updateRoute(route);
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
