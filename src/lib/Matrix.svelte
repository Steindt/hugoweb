<script lang="ts" context="module">
  import { getValue, setValue } from "./Cell.svelte";
      
  let matrix: Array<Cell> = new Array();

  // Convert the list of Cells into list of numbers
  export function returnArray() {
    let data: Array<number> = new Array();

    return data;
  }

  export function clear() {
    matrix.forEach((x) => {
      x.setValue(0)
    })
  }
</script>

<script lang="ts">
	import Cell from "./cell.svelte";

  // Props
  // export let cellSize: number = 30;
  export let rowSize: number = 1;
  export let columnSize: number = 1;
  
  // Create list of Cells
  for (let row = 0; row < rowSize; row++) {
    for (let column = 0; column < columnSize; column++) {
      matrix.push(Cell);
    }
  }

  let visualMatrix: Array<Array<Cell>> = new Array();
  for (let row: number = 1; row <= rowSize; row++) {
    let rowArray: Array<Cell> = new Array();
    for (let i: number = 0; i < columnSize; i++) {
      rowArray.push(matrix[i*row]);
    }
    visualMatrix.push(rowArray);
  }
</script>

<!--Create visual matrix-->
{#each visualMatrix as row}
  <div class="container">
    {#each row as column}
      <svelte:component this={column} />
    {/each}
  </div>
{/each}

<style>
  .container {
    display: flex;
    height: auto;
    width: auto;
  }
</style>