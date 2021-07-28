<template>
  <button type="button" @click="state.count++">
    count is: {{ state.count }}
  </button>
</template>

<script >
import { reactive } from "vue";
   
export default {
  setup() {
    const state = reactive({ count: 0 });
    return { state };
  },
};
</script>

<style scoped>
a {
  color: #42b983;
}
</style>
