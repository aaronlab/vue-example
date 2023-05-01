import { defineStore } from "pinia";
import { ref } from "vue";

export const useHtmlStore = defineStore('html', () => {
  const rawHtml = ref('<span v-html="rawHtml">Some<br>thing</span>')

  return {
    rawHtml
  }
})