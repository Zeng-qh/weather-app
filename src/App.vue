<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script >
import axios from "axios";
import { getCurrentInstance, onMounted, onUpdated } from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default {
  components: {
    HelloWorld,
  },
  setup() {
    const { proxy, ctx } = getCurrentInstance();
    var x = () => {
      console.dir(this);
      proxy.$axios
        .get("/jsapi/todos/1")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    var as = () => {
      axios
        .get("/jsapi/todos/1")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.error(err);
        });
    };
    x();
    as()
  },
};
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
