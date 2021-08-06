<template>
  {{ data.state.cityInfo }}
  <div v-for="(item, i) in data.state.forecast" :key="i">
    {{ item }}
    <h1></h1>
  </div>
  <button type="button" @click="state.count++">count is: {{ state.count }}</button>
</template>

<script>
import { reactive, defineProps, getCurrentInstance, onMounted } from 'vue'

export default {
  props: ['msg'],
  setup() {
    const { proxy, ctx } = getCurrentInstance()
    const state = reactive({ count: 0 })
    const data = {
      state: reactive({
        forecast: {},
        cityInfo: {},
        list: [],
      }),
      SetcityInfo(info) {
        this.state.cityInfo = info
      },
      Setforecast(list) {
        this.state.forecast = list
      },
      SetListdata(list) {
        this.state.list = list
      },
      getdate(url) {
        return proxy.$axios.get(url)
      },
    }

    onMounted(() => {
      data
        .getdate('/hayes/api/weather/city/101280601')
        .then((res) => {
          data.Setforecast(res.data.data.forecast)
          data.SetcityInfo(res.data.cityInfo)
        })
        .catch((err) => {
          console.error(err)
        })
    })
    return { data, state }
  },
}
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
