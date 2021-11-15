import {Injectable} from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GameOfLifeService {

  static generationCount: number = 1;

  // for simplicity we will make our matrix a square
  matrixSize = 60;

  gameOfLifeGrid: boolean[][] = [][this.matrixSize];


  private gameOfLifeGridUpdated = new Subject<boolean[][]>();


  constructor() {
    // create the initial grid
    this.gameOfLifeGrid = this.createRandomGrid();

    // send the grid to subscribers right-away
    this.gameOfLifeGridUpdated.next(this.gameOfLifeGrid);
  }

  getGameOfLifeGridUpdatedListener() {
    return this.gameOfLifeGridUpdated.asObservable();
  }

  computeNextGeneration(): void {

    let grid = this.gameOfLifeGrid;

    let futureGeneration: boolean[][] = this.createEmptyGrid();

    for (let i = 1; i < grid.length - 1; i++) {

      for (let j = 1; j < grid[i].length - 1; j++) {

        futureGeneration[i][j] = this.applyRulesForCurrentCell(grid[i][j], this.countAliveNeighbours(i, j));

      }
    }


    // next generation fully computed, substitute it as current generation
    this.gameOfLifeGrid = futureGeneration;

    GameOfLifeService.generationCount++;

    this.gameOfLifeGridUpdated.next(this.gameOfLifeGrid);
    //return this.gameOfLifeGrid; no more return, just give the value to subscribers
  }

  /*
  Receives the row and column -> position of the cell and counts how many alive neighbours the cell has
   */
  countAliveNeighbours(row: number, column: number): number {
    let aliveNeighbours: number = 0;
    for (let i = (-1); i <= 1; i++) {

      for (let j = (-1); j <= 1; j++) {

        this.gameOfLifeGrid[row + i][column + j] ? aliveNeighbours += 1 : aliveNeighbours += 0;

      }
    }

    // in case the current cell was alive, we also counted it above
    if (this.gameOfLifeGrid[row][column]) {
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
    if (cellState && aliveNeighbours > 3) {
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
  Helper function used to create a random grid
   */
  createRandomGrid(): boolean[][] {

    let emptyGrid: any = [];
    for (let i = 0; i < this.matrixSize; i++) {
      emptyGrid[i] = [];
      for (let j = 0; j < this.matrixSize; j++) {
        emptyGrid[i][j] = Math.random() < 0.1; // 10% change of getting true
      }
    }
    return emptyGrid;
  }


  /*
  Helper function used to create an empty grid
   */
  createEmptyGrid(): boolean[][] {

    let emptyGrid: any = [];
    for (let i = 0; i < this.matrixSize; i++) {
      emptyGrid[i] = [];
      for (let j = 0; j < this.matrixSize; j++) {
        emptyGrid[i][j] = false;
      }
    }
    return emptyGrid;
  }
}
