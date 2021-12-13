<template>
  <div class="home">
    <img alt="Vue logo" src="@/assets/logo.png" />
    <h2>我的第一个TypeScript程序</h2>
    <h4>{{hello}}</h4>
  </div>
</template>

<script lang="ts">
import { hello } from '@/utils/test'
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
      loading: false,
      hello: hello
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
