import {Component, EventEmitter, OnInit, Output} from "@angular/core";
import {GameOfLifeService} from "../game-of-life.service";


@Component({
  selector: 'game-of-life-controls',
  templateUrl: './game-of-life-controls.component.html',
  styleUrls: ['./game-of-life-controls.component.css']
})
export class GameOfLifeControlsComponent {

  timeoutHandle: any;

  constructor(private gameOfLifeService: GameOfLifeService) {
  }


  onStartClicked(): void {
    this.timeoutHandle = setInterval(() => {
        this.gameOfLifeService.computeNextGeneration();
        console.log('I should be called every 1 sec');
      },
      1000
    );
    console.log('clicked compute next generation');
  }


  onStopClicked() {
    clearInterval(this.timeoutHandle);
  }

}
