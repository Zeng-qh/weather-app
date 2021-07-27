<template>
  <h1>{{ msg }}</h1>
  <button type="button" @click="state.count++">count is: {{ state.count }}</button>
</template>

<script >
import { reactive, defineProps } from 'vue'

export default {
  setup() {
    defineProps({
      msg: String,
    })
    const state = reactive({ count: 0 })
    return { state }
  },
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
