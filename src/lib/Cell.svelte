<script lang="ts" context="module">
  // The 'opacity' we want it to become, sets the strength of red
  let valueToSet = 255;
  // Used to toggle drawing or erasing, so to not flip the values all the time
  let removing: number;

  export function setOpacity(x: number) {
    if (x > 255) {
      valueToSet = 255;
    } else if (x < 0) {
      valueToSet = 0;
    } else {
      valueToSet = x;
    }
  }
</script>

<script lang="ts">
  let value = 0;
  let clicked = false;

  function flipValue() {
    if ((value == valueToSet || valueToSet == 0) && removing == 0 || removing == 1) {
      value = 0;
      clicked = false;
      removing = 1;
    } else if (removing == 0 || removing == 2) {
      value = valueToSet;
      clicked = true;
      removing = 2;
    }
  }
  
  // Single click on cell
  function handleInput() {
    flipValue();
    removing = 0;
  }

  // Dragging over multiple cells
  function handleInputOver(e: MouseEvent) {
    if (e.buttons == 1) {
      flipValue();
    } else {
      removing = 0;
    }
  }

  export function setValue(x: number = valueToSet) {
    value = x;
    clicked = value == 0 ? false : true;
  } 

  export function getValue() {
    return value;
  }
</script>

<button style:background-color={clicked ? 'rgba(255, 0, 0, ' + value/255 + ')' : 'lightgray'} on:mousedown={() => handleInput()} on:mouseenter={(e) => handleInputOver(e)}>

</button>

<style>
  button {
    position: relative;
    border: 1px solid black;
    width: 30px;
    aspect-ratio: 1 / 1;
    padding: 0px;
  }
</style>
