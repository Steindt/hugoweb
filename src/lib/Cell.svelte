<script lang="ts" context="module">
  let value = 0;
  var clicked = false;

  export function getValue() {
    return value;
  }

  export function setValue(x: number) {
    if (x == 255) {
      clicked = true;
    } else {
      clicked = false;
    }

    value = x;
  }
</script>

<script lang="ts">

  function changeValue() {
    if (value == 255) {
      value = 0;
      clicked = false;
    } else {
      value = 255;
      clicked = true;
    }

    console.log("clicked");
  }
  
  // Single click on cell
  function handleInput() {
    changeValue();
  }

  // Dragging over multiple cells
  function handleInputOver(e: MouseEvent) {
    // if (e.buttons == 1) {
    //   changeValue();
    // }
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
  }
</style>