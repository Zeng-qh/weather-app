<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script setup>
import  axios  from "axios";
import { getCurrentInstance, onMounted, onUpdated } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

const { proxy, ctx } = getCurrentInstance() 

console.dir(proxy);  

onMounted(() => {
  console.dir(this);
  
  proxy.$axios.get("/api")
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.error(err);
  })
}),
  onUpdated(() => {
    console.dir(this.axios);
  });

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
