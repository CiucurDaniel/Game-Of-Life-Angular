import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {GameOfLifeService} from "../game-of-life.service";


@Component({
  selector: 'game-of-life-controls',
  templateUrl: './game-of-life-controls.component.html',
  styleUrls: ['./game-of-life-controls.component.css']
})
export class GameOfLifeControlsComponent implements OnInit{

  arrayWithCells?: boolean[];

  @Output() newGameOfLifeGridGenerated = new EventEmitter();

  constructor(private gameOfLifeService: GameOfLifeService) {
  }

  ngOnInit() {
    // I also call the service onInit because I want to have an initial grid with cells when the page is first loaded
    this.arrayWithCells = ([] as boolean[]).concat(...this.gameOfLifeService.gameOfLifeGrid);
  }

  onStartClicked(): void {
    // when I click the start button get the next generation
    this.arrayWithCells = ([] as boolean[]).concat(...this.gameOfLifeService.computeNextGeneration());
    // afterwards emit it's value
    this.newGameOfLifeGridGenerated.emit(this.arrayWithCells);
  }


}
