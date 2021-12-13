<template>
   <div>
     <button @click="goHome">去往Home</button>
     <button v-if="loading">{{aaa}}</button>
   </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: '',
  components: { },
  setup () {
    const router = useRouter()
    const state = reactive({
      loading: false,
      aaa: ''
    })
    onMounted(() => {
      state.aaa = '22222222'
      getAxis()
    })
    const getAxis = () => {
      // console.log('aaa', state.aaa)
    }
    const goHome = () => {
      router.push({ path: '/home' })
    }
    return {
      ...toRefs(state),
      goHome
    }
  }
})
</script>
<style lang='scss' scoped>
</style>
