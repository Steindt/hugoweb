<script lang="ts">
	import Cell from "./Cell.svelte";

  // Props
  // export let cellSize: number = 30;
  export let rowSize: number = 1;
  export let columnSize: number = 1;

  let matrix: Array<Cell> = new Array();

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

  export function getValues() {
    let data: Array<number> = new Array();
    refs.forEach((x) => {
      data.push(x.getValue());
    })
    return data;
  }

  export function clear() {
    refs.forEach((x) => {
      x.setValue(0);
    })
  }

  let refs: Array<Cell> = new Array();
</script>

<!--Create visual matrix-->
{#each visualMatrix as row}
  <div class="container">
    {#each row as column}
      <svelte:component bind:this={refs[refs.length]} this={column} />
    {/each}
  </div>
{/each}

<style>
  .container {
    display: flex;
    height: auto;
    width: auto;
    max-width: 100%;
    box-sizing: border-box;
  }
</style>
