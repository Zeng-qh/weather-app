<template>
  <img alt="Vue logo" src="./assets/logo.png" />
</template>

<script > 
import { getCurrentInstance, onMounted } from 'vue'


export default {
  setup() {
    const { proxy, ctx } = getCurrentInstance()
    var x = () => {
     //  axios.defaults.baseURL="http://t.weather.itboy.net/weather/city/101030100"
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
    onMounted(() => {
      console.log('Component is mounted!')
    })
  },
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
