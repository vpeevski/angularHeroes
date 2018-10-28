import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { ClarityModule } from "@clr/angular";
import { HeroesComponent } from './heroes/heroes.component';
import { HeroeDetailsComponent } from './heroe-details/heroe-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './/app-routing.module';
import { HerosFilterPipe } from './heros-filter.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeDetailsComponent,
    DashboardComponent,
    HerosFilterPipe
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
