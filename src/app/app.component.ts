import {Component, OnInit} from '@angular/core';
import {GameOfLifeService} from "./game-of-life.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'angular-game-of-life';

  storedArrayWithCells?: boolean[];

  constructor(private gameOfLifeService: GameOfLifeService) {
  }

  ngOnInit() {
    this.storedArrayWithCells = ([] as boolean[]).concat(...this.gameOfLifeService.gameOfLifeGrid);
  }

  onNewGameOfLifeGridGenerated(newGrid: any): void {
    this.storedArrayWithCells = newGrid;
  }
}
