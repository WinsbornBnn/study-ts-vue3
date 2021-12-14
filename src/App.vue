<template>
  <div>
    <router-link to="/"></router-link>
    <router-view v-if="isRouterAlive"></router-view>
  </div>
</template>
<script lang="ts">
import { defineComponent, reactive, toRefs } from 'vue'
export default defineComponent({
  name: '',
  setup () {
    const state = reactive({
      isRouterAlive: true
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>
<style>
body,
html,
#app {
  width: 100%;
  height: 100%;
  overflow: hidden;
  padding: 0;
  margin: 0;
}
</style>
