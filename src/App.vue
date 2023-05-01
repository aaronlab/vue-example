<template>
  <main>
    <div class="wrapper">
      <button @click="countStore.increment">{{ count }}</button>
      <button @click="countStore.increment">{{ doubleCount }}</button>

      <p class="color-box">
        Using text interpolation: {{ rawHtml }}
      </p>
      <p class="color-box">Using v-html directive: <span v-html="rawHtml"></span></p>

      <button
        class="top-margin"
        :disabled="isButtonDisabled"
        @click="statusStore.toggleIsDisabled"
      >
        Click me to disable
      </button>

      <a
        class="color-box"
        :href="url"
        target="blank"
      >KNOWHOW.CEO</a>

      <a
        class="color-box"
        @click.prevent="attrStore.doSomething"
        :href="url"
      >
        Do Something with prevent
      </a>

      <a @mouseover="attrStore.doSomething">
        Do Something with moseover
      </a>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useCounterStore } from './stores/counter'
import { storeToRefs } from 'pinia'
import { useHtmlStore } from './stores/html'
import { useStatus } from './stores/status'
import { useAttributes } from './stores/attributes'

const countStore = useCounterStore()
const { count, doubleCount } = storeToRefs(countStore)

const htmlStore = useHtmlStore()
const { rawHtml } = storeToRefs(htmlStore)

const statusStore = useStatus()
const { isButtonDisabled } = storeToRefs(statusStore)

const attrStore = useAttributes()
const { url } = storeToRefs(attrStore)
</script>

<style scoped>
.top-margin {
  margin-top: 12px;
}

.wrapper {
  display: flex;
  flex-direction: column;
}

.color-box {
  background-color: burlywood;
  margin-top: 12px;
  color: black;
}
</style>
