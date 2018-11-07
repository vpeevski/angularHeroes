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
        const navUrl: string = newRoute.snapshot.url.join('');
        this.enableFilterInput(navUrl === "dashboard");
        if (navUrl === "dashboard") {
          this.focusFilterInput();
        }
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

  enableFilterInput(isEnabled: boolean) {
    this.searchInput.nativeElement.disabled = !isEnabled;
  }
}
