import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GameOfLifeService {

  static generationCount: number = 1;

  columns = 10;
  rows = 10;

  gameOfLifeGrid: boolean[][] = [][this.columns];


  constructor() {
    this.gameOfLifeGrid = [
      [false,false,false,false,false,false,false,false,false,false],
      [false,false,false,false,false,false,false,false,false,false],
      [false,false,false,false,false,false,false,false,false,false],
      [false,false,false,false,true,false,false,false,false,false],
      [false,false,false,false,true,false,false,false,false,false],
      [false,false,false,false,true,false,false,false,false,false],
      [false,false,false,false,false,false,false,false,false,false],
      [false,false,false,false,false,false,false,false,false,false],
      [false,false,false,false,false,false,false,false,false,false],
      [false,false,false,false,false,false,false,false,false,false],
    ];
  }

  computeNextGeneration(receivedGrid: boolean[][] = this.gameOfLifeGrid): boolean[][] {

    let futureGeneration: boolean[][] = this.createEmptyGrid();

    for(let i = 1; i < receivedGrid.length -1; i++) {

      for(let j = 1; j < receivedGrid[i].length - 1; j++) {

        futureGeneration[i][j] = this.applyRulesForCurrentCell( receivedGrid[i][j], this.countAliveNeighbours(i,j) );

        if(futureGeneration[i][j]){
          console.log(`Successfully assigned ${futureGeneration[i][j]} on ${i} and ${j}`);
        }

      }
    }


    // next generation fully computed, substitute it as current generation
    this.gameOfLifeGrid = futureGeneration;

    GameOfLifeService.generationCount++;

    console.log(GameOfLifeService.generationCount);
    console.log(this.gameOfLifeGrid);

    return this.gameOfLifeGrid;
  }

  /*
  Receives the row and column -> position of the cell and counts how many alive neighbours the cell has
   */
  countAliveNeighbours(row: number, column: number): number {
    let aliveNeighbours: number = 0;
    for (let i = (-1); i <= 1; i++) {

      for (let j = (-1); j <= 1; j++){

        this.gameOfLifeGrid[row + i][column + j] ? aliveNeighbours += 1 : aliveNeighbours += 0;

      }
    }

    // in case the current cell was alive, we also counted it above
    if(this.gameOfLifeGrid[row][column]) {
      aliveNeighbours -= 1;
    }

    return aliveNeighbours;

  }

  /*
  Receives a cell which is DEAD or ALIVE and it's number of alive neighbours
  based on that it returns that state of the cell in the next generation

    1. Any live cell with two or three live neighbours survives.
    2. Any dead cell with three live neighbours becomes a live cell.
    3. All other live cells die in the next generation. Similarly, all other dead cells stay dead.
   */
  applyRulesForCurrentCell(cellState: boolean, aliveNeighbours: number): boolean {

    // Any live cell with fewer than two live neighbours dies, as if by underpopulation
    if (cellState && aliveNeighbours < 2) {
      return false;
    }

    // Any live cell with more than three live neighbours dies, as if by overpopulation.
    if (cellState && aliveNeighbours > 3){
      return false;
    }

    // A new cell is born
    if (!cellState && aliveNeighbours == 3) {
      return true;
    }

    // Remain the same
      return cellState;
  }

  /*
  Helper function used to create an empty grid
   */
  createEmptyGrid(): boolean[][]{

    return [
      [false,false,false,false,false,false,false,false,false,false],
      [false,false,false,false,false,false,false,false,false,false],
      [false,false,false,false,false,false,false,false,false,false],
      [false,false,false,false,false,false,false,false,false,false],
      [false,false,false,false,false,false,false,false,false,false],
      [false,false,false,false,false,false,false,false,false,false],
      [false,false,false,false,false,false,false,false,false,false],
      [false,false,false,false,false,false,false,false,false,false],
      [false,false,false,false,false,false,false,false,false,false],
      [false,false,false,false,false,false,false,false,false,false],
    ];
  }
}
