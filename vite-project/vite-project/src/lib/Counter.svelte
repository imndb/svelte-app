<script>
  import {peopleStore} from "../stores.js";

  let people1
  peopleStore.subscribe(people => people1 = people.people1)
  let people2
  peopleStore.subscribe(people => people2 = people.people2)
  let capacity_full = false

  let newperson =''
  let newgroup = ''
  let capacity = 5

  const add = () => {
    if (newgroup === 'people1') {
      if(people1.length < capacity) {
        peopleStore.update(people => ({...people, people1: [...people.people1, newperson]}))
     capacity_full = false
      }
      else {
        capacity_full = true
      }
  }else {
      if(people2.length < capacity) {
        peopleStore.update(people => ({...people, people2: [...people.people2, newperson]}))
        capacity_full = false
      }
    else
        capacity_full = true
    }
  }
</script>
<input bind:value={newperson} type="text"/>
<select bind:value={newgroup} id="spaces" name="spaces">
  <option value="people1" selected>people1</option>
  <option value="people2">people2</option>
</select>
<button on:click={add}>
 add
</button>
{#if capacity_full  }
  <p>capacity full</p>
  {/if}
