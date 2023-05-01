import { defineStore } from "pinia";
import { ref } from "vue";

export const useStatus = defineStore('status', () => {
  const isButtonDisabled = ref(false)

  const toggleIsDisabled = () => {
    isButtonDisabled.value = !isButtonDisabled.value
  }

  return {
    isButtonDisabled,
    toggleIsDisabled
  }
})