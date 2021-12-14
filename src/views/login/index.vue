<template>
   <div>
     <div class="container" :class="[isRegist ? 'right-panel-active' : '']">
      <!-- 登 录 -->
      <div class="container__form container--signin">
        <div class="logo">
           <el-button class="btn" @click="goHome">goHome</el-button>
        </div>
      </div>
      <!-- 注 册 -->
      <div class="container__form container--signup">
        <div class="logo">
        </div>
      </div>

      <!-- Overlay -->
      <div class="container__overlay">
        <div class="overlay">
          <div class="overlay__panel overlay--left">
            <el-button class="btn" @click="isRegist = false">登 录</el-button>
          </div>
          <div class="overlay__panel overlay--right">
            <el-button class="btn" @click="regist">注 册</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="versions">
      <span>Copyright &copy; 2021</span>
    </div>
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
      aaa: '',
      isRegist: false
    })
    onMounted(() => {
      state.aaa = '22222222'
      getAxis()
    })
    const getAxis = () => {
      // console.log('aaa', state.aaa)
    }
    // 注册按钮
    const regist = () => {
      state.isRegist = true
    }
    const goHome = () => {
      router.push({ path: '/video' })
    }
    return {
      ...toRefs(state),
      goHome,
      regist
    }
  }
})
</script>
<style lang='scss' scoped>
@import '../../assets/css/style.css';
.versions {
  position: absolute;
  left: 45%;
  bottom: 15px;
  color: #fff;
}
</style>
