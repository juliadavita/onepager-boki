import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroComponent } from './components/hero/hero.component';
import { TeamComponent } from './components/team/team.component';
import { LokiComponent } from './components/loki/loki.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    TeamComponent,
    LokiComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
