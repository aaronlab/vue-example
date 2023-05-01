import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  const isOdd = computed(() => count.value & 1 ? '홀' : '짝')
  
  const increment = () => {
    count.value++
  }

  return { count, isOdd, doubleCount, increment }
})
