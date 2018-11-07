import {Injectable} from '@angular/core';
import {Subject} from "rxjs/internal/Subject";
import {ActivatedRoute} from "@angular/router";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  private routeSubject: Subject<ActivatedRoute> = new Subject();
  public currentRoute: Observable<ActivatedRoute> = this.routeSubject.asObservable();

  constructor() {}

  public updateRoute (route: ActivatedRoute) {
    this.routeSubject.next(route);
  }
}
