import {Component, Input, OnDestroy, OnInit} from "@angular/core";
import {GameOfLifeService} from "../game-of-life.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'game-of-life-grid',
  templateUrl: './game-of-life-grid.component.html',
  styleUrls: ['./game-of-life-grid.component.css']
})
export class GameOfLifeGridComponent implements OnInit, OnDestroy {


  // here is the array that i'm displaying on the page
  arrayWithCells?: boolean[];

  // Here I have the subscription to the grid from the service
  private gameOfLifeGridSubscription!: Subscription;

  constructor(public gameOfLifeService: GameOfLifeService) {}

  ngOnInit() {
    this.gameOfLifeGridSubscription = this.gameOfLifeService.getGameOfLifeGridUpdatedListener()
      .subscribe( (grid: boolean[][]) => {
        this.arrayWithCells = ([] as boolean[]).concat(...grid);
        console.log(this.arrayWithCells);
      });

    // Need this to convert matrix to array
    //this.storedArrayWithCells = ([] as boolean[]).concat(...this.gameOfLifeService.gameOfLifeGrid);
  }

  ngOnDestroy(): void {
    this.gameOfLifeGridSubscription.unsubscribe();
  }
}
