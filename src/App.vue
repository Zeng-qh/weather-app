<template>
 <div>
    <Main msg="Hello Vue 3 + Vite" />
 </div>
</template>

<script>
import { getCurrentInstance, onMounted, reactive, ref, toRef } from 'vue'
import Main from './view/Main.vue'

export default {
  components: {
    Main,
  },
  setup() {},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
