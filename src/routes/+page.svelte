<script lang="ts">
	import Matrix from '$lib/Matrix.svelte';
  import sendMatrix, {sendText} from '$lib/api';

  // Configuration
  let ip: string = "192.168.21.215";
  let port: number = 8090;
  // Display dependent, don't change unless screen resolution has changed
  let rowSize: number = 7;
  let columnSize: number = 95;

  let strength: number = 255;
  let matrix: Matrix;
  let text: string = "";
</script>

<h1>Welcome</h1>
<p>Here you can control what HUGO displays by drawing on the matrix and then clicking on "Send"!</p>
<Matrix bind:this={matrix} rowSize={rowSize} columnSize={columnSize}/>
<div>
  <button on:click={async () => sendMatrix(ip, port, matrix.getValues())}>Send Matrix</button>
  <button on:click={() => matrix.clear()}>Clear</button>
  <button on:click={() => matrix.fill()}>Fill</button>
</div>
<div style='margin-top: 20px;'>
  Strength: {strength}
  <input type="range" min="0" max="255" bind:value={strength} on:change={() => matrix.opacity(strength)}/>
</div>
<div>
  <input bind:value={text}/>
  <button on:click={() => sendText(ip, port, text)}>Send Text</button>
</div>
<p>rootm@dsek.se</p>
<a href="https://github.com/Steindt/hugoweb">Github</a>

<style>
  :global(body) {
    display: flex;
    flex-direction: column;
    font-family: "Comic Sans MS", cursive;
    align-items: center;
    margin: 0px;
  }

  button {
    margin-top: 20px;
    background-color: pink;
    font-family: 'Comic Sans MS', cursive;
    font-weight: bold;
    font-size: 1.1em;
    width: 150px;
    height: 50px;
  }

  button:hover {
    background-color: lightgreen;
  }
</style>
