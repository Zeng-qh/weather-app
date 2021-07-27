<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script > 
import { getCurrentInstance, onMounted, onUpdated } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld,
  },
  setup() {
    const { proxy, ctx } = getCurrentInstance()
    var x = () => {
     //  axios.defaults.baseURL="http://t.weather.itboy.net/weather/city/101030100"
      console.dir(this);
      // proxy.$axios
      //   .get('/apijs/todos/1')
      //   .then((res) => {
      //     console.log(res)
      //   })
      //   .catch((err) => {
      //     console.error(err)
      //   })
    }
     
    x()
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
