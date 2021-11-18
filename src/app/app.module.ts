import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// imports from Angular Material
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';

// imports from components created in this projects
import {GameOfLifeHeaderComponent} from "./game-of-life-header/game-of-life-header.component";
import {GameOfLifeGridComponent} from "./game-of-life-grid/game-of-life-grid.component";
import {GameOfLifeControlsComponent} from "./game-of-life-controls/game-of-life-controls.component";


@NgModule({
  declarations: [
    AppComponent,
    GameOfLifeGridComponent,
    GameOfLifeHeaderComponent,
    GameOfLifeControlsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
