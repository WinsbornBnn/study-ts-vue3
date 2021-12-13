<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <h1>我的第一个TypeScript程序</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
export default defineComponent({
  name: '',
  components: {},
  props: {
    aaaaa: {
      type: Object,
      default: () => {
        return {
          a: '1',
          b: '2'
        }
      }
    }
  },
  setup (props) {
    const state = reactive({
      loading: false
    })
    onMounted(() => {
      console.log(props.aaaaa)
    })
    return {
      ...toRefs(state)
    }
  }
})
</script>
<style lang='scss' scoped>
</style>
