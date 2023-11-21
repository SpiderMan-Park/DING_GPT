<script setup>
import { RouterView } from 'vue-router'
import { ref, onMounted, nextTick } from 'vue'

let render = ref(true)

onMounted(() => {
  window.addEventListener('resize', reload)
})
const reload = () => {
  render.value = false;
  nextTick(() => {
    render.value = true;
  })
}
</script>

<template>
  <RouterView v-if="render" />
  <!-- <RouterView /> -->
</template>