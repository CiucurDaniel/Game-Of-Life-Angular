import {Component, Input, OnInit} from "@angular/core";
import {GameOfLifeService} from "../game-of-life.service";

@Component({
  selector: 'game-of-life-grid',
  templateUrl: './game-of-life-grid.component.html',
  styleUrls: ['./game-of-life-grid.component.css']
})
export class GameOfLifeGridComponent{

  @Input() arrayWithCells?: boolean[];

}
