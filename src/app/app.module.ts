import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here

import { AppComponent } from './app.component';
import { ClarityModule } from "@clr/angular";
import { HeroesComponent } from './heroes/heroes.component';
import { HeroeDetailsComponent } from './heroe-details/heroe-details.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroeDetailsComponent
  ],
  imports: [
    BrowserModule,
    ClarityModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
