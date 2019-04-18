import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Level1Component } from './components/level1/level1.component';
import { Level2Component } from './components/level2/level2.component';
import { Level3Component } from './components/level3/level3.component';

@NgModule({
  declarations: [
    AppComponent,
    Level1Component,
    Level2Component,
    Level3Component
  ],
  imports: [
    BrowserModule
  ],
  exports: [AppComponent, Level1Component],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
