<template>
  <div class="wrap">
    <video class="vid" src="@/assets/video/smoke.mp4" autoplay muted></video>
    <div class="mask">
      <span>欢</span>
      <span>迎</span>
      <span>联</span>
      <span>系</span>
      <span>我</span>
      <span>们</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
export default defineComponent({
  name: '',
  components: {},
  setup () {
    const state = reactive({
      loading: false
    })
    onMounted(() => {
      console.log(11111)
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>
<style lang='scss' scoped>
@import './video.scss';
</style>
