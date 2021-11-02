import {Component, OnInit} from "@angular/core";
import {GameOfLifeService} from "../game-of-life.service";

@Component({
  selector: 'game-of-life-grid',
  templateUrl: './game-of-life-grid.component.html',
  styleUrls: ['./game-of-life-grid.component.css']
})
export class GameOfLifeGridComponent implements OnInit{
  arrayWithCells?: boolean[];

  constructor(private gameOfLifeService: GameOfLifeService) {
  }

  ngOnInit() {
    this.arrayWithCells = ([] as boolean[]).concat(...this.gameOfLifeService.gameOfLifeGrid);
  }
}
