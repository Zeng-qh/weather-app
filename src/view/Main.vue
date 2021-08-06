<template>
  <!-- {{ data.state.jsondata }} -->
 {{data.state.list[7]}}
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
        jsondata: {},
        list: [],
      }),
      setjsondata(list) {
        this.state.jsondata = list
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
        //   /hayes/api/weather/city/101030100
        .getdate('/jsapi/users')
        .then((res) => {
          data.setjsondata(res.data)
          data.SetListdata(res.data)
          
          // JSON.stringify()
          // console.dir(JSON.parse(data.state.jsondata))
          console.dir(data.state.jsondata)
          console.dir(data.state.list[7].id)
          // data.SetListdata(JSON.parse(data.state.jsondata).forecast)
          // console.dir( data.state.list.forecast);
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
