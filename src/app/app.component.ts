import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {HeroesDataService} from "./services/heroes-data.service";
import {NavigationService} from "./services/navigation.service";
import {Subscription} from "rxjs/internal/Subscription";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  @ViewChild('search_input') searchInput: ElementRef;
  heroesFilterQuery: string = '';
  title = 'Tour of heroes';

  private navigationServiceSubscribtion: Subscription;

  constructor(private navigationService: NavigationService, private data: HeroesDataService) {
  }

  ngOnInit(): void {
    this.navigationServiceSubscribtion = this.navigationService.currentRoute.subscribe((newRoute) => {
      const navUrl: string  = newRoute.snapshot.url.join('');
      this.searchInput.nativeElement.disabled = navUrl === "heroes";
      }
    );
  }

  ngOnDestroy(): void {
    this.navigationServiceSubscribtion.unsubscribe();
  }

  changeFilter(newValue: string) {
    this.data.updateFilter(newValue);
  }

  focusFilterInput() {
    this.searchInput.nativeElement.disabled = false;
    this.searchInput.nativeElement.focus();
  }

  enableFilterInput() {
    this.searchInput.nativeElement.disabled = false;
  }

  disableFilterInput() {
    this.searchInput.nativeElement.disabled = true;
  }
}
