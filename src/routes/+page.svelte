<script lang="ts">
	import Matrix from '$lib/Matrix.svelte';
  import { returnArray, clear } from '$lib/Matrix.svelte';
  import sendHugo from '$lib/api';

  // Configuration
  let ip: string = "192.168.21.215";
  let port: number = 8090;
  let cellSize: number = 50;
  // Display dependent, don't change unless screen resolution has changed
  let rowSize: number = 7;
  let columnSize: number = 95;

</script>

<h1>Welcome</h1>
<p>Here you can control what HUGO displays by drawing on the matrix and then clicking on "Send"!</p>
<Matrix rowSize={rowSize} columnSize={columnSize}/>
<button on:click={async () => sendHugo(ip, port, returnArray())}>Send</button>
<button on:click={() => clear()}>Clear</button>

<style>
  :global(body) {
    display: flex;
    flex-direction: column;
    font-family: "Comic Sans MS";
    align-items: center;
  }

  button {
    margin-top: 20px;
    background-color: pink;
    width: 150px;
    height: 50px;
  }

  button:hover {
    background-color: lightgreen;
  }
</style>
