import {Component} from "@angular/core";
import {GameOfLifeService} from "../game-of-life.service";


@Component({
  selector: 'game-of-life-controls',
  templateUrl: './game-of-life-controls.component.html',
  styleUrls: ['./game-of-life-controls.component.css']
})
export class GameOfLifeControlsComponent {

  //private intervalId?: number;
  //private _isRunning?: boolean;

  constructor(private gameOfLifeService: GameOfLifeService) {
  }

  // method called when Start button is pressed in order to start the game
  start() {
    this.gameOfLifeService.computeNextGeneration();
    //this.intervalId = window.setInterval(() => {
   //   this.gameOfLifeService.computeNextGeneration(this.gameOfLifeService.gameOfLifeGrid);
   // }, 400);
   // this._isRunning = true;
  }

  // Stop the game
  stop(): void{

  }


  // Reset the game
  reset(): void{

  }

  getGenerationCount(): void{

  }
}
