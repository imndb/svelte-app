import {writable} from "svelte/store";

 const people1 = ['iman'];

 const people2 = ['benjamin']

export const peopleStore = writable({people1, people2})

export const capacity_full = ''