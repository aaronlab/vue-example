import { defineStore } from "pinia";
import { ref } from "vue";

export const useAttributes = defineStore('attributes', () => {
  const url = ref('https://knowhow.ceo')
  const doSomething = () => {
    console.log('Do something...')
  }

  return {
    url,
    doSomething
  }
})