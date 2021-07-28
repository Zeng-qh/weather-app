<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <HelloWorld msg="Hello Vue 3 + Vite" />
</template>

<script >
import { getCurrentInstance, onMounted } from 'vue'
import HelloWorld from './components/HelloWorld.vue'

export default {
  components: {
    HelloWorld,
  },
  setup() {
    const { proxy, ctx } = getCurrentInstance()

    //  axios.defaults.baseURL="http://t.weather.itboy.net/weather/city/101030100"
 
    onMounted(() => {
      proxy.$axios
        .get('/jsapi/todos/1')
        .then((res) => {
          console.log(res)
        })
        .catch((err) => {
          console.error(err)
        })

      console.log('Component is mounted!')
    })
    return {}
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
