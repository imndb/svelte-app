<script>
  import svelteLogo from './assets/iss.png'
  import background_foto from './assets/background.jpg'
  import viteLogo from './assets/tiangong.png'
  import Counter from './lib/Counter.svelte'
  import {peopleStore} from "./stores.js";
  let people1
  peopleStore.subscribe(people => people1 = people.people1)
  let people2
  peopleStore.subscribe(people => people2 = people.people2)

</script>

<main>
  <div class="space-stations">

  <div>
    <img src={viteLogo} class="logo" alt="Vite Logo"/>
    <div>
      {#each people1 as person}
        <p>{person}</p>
      {/each}
    </div>
  </div>
  <div>
    <img src={svelteLogo} class="logo svelte" alt="Svelte Logo"/>
    <div>
      {#each people2 as person}
        <p>{person}</p>
      {/each}
    </div>
  </div>

  </div>

  <div class="card">
    <Counter />
  </div>





  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  .space-stations {
    display: flex;
  }

  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
   :global(body){
     background-image: url("assets/background.jpg");
   }
</style>
