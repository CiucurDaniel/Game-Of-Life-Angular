import {Component, OnInit} from '@angular/core';
import {GameOfLifeService} from "./game-of-life.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-game-of-life';
}
