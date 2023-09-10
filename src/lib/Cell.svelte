<script lang="ts">
  let value = 0;
  let clicked = false;

  function flipValue() {
    if (value == 255) {
      value = 0;
      clicked = false;
    } else {
      value = 255;
      clicked = true;
    }
  }
  
  // Single click on cell
  function handleInput() {
    flipValue();
  }

  // Dragging over multiple cells
  function handleInputOver(e: MouseEvent) {
    if (e.buttons == 1) {
      flipValue();
    }
  }

  export function setValue(x: number) {
    value = x;
    clicked = x == 255 ? true : false;
  } 

  export function getValue() {
    return value;
  }
</script>

<button style:background-color={clicked ? 'red' : 'lightgray'} on:mousedown={() => handleInput()} on:mouseenter={(e) => handleInputOver(e)}>

</button>

<style>
  button {
    position: relative;
    border: 1px solid black;
    width: 15px;
    height: 15px;
    padding: 0px;
  }
</style>
