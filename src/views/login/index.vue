<template>
  <div>
    <div class="container" :class="[isRegist ? 'right-panel-active' : '']">
      <!-- 登 录 -->
      <div class="container__form container--signin">
        <div class="logo">
          <el-image
            style="width: 80px; height: 80px; border-radius: 5px"
            :src="logoUrl"
            fit="fill"
          ></el-image>
          <b>世上键仙三百万</b>
        </div>
        <el-form
          ref="loginForm"
          :model="loginForm"
          label-width="120px"
          class="demo-ruleForm form"
        >
          <el-form-item label="账号">
            <el-input v-model="loginForm.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="loginForm.passWord"></el-input>
          </el-form-item>
          <el-form-item label="验证码">
            <el-input v-model="loginImg"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="btn" @click="loginSubmit">登 录</el-button>
          </el-form-item>
        </el-form>
      </div>
      <!-- 注 册 -->
      <div class="container__form container--signup">
        <div class="logo">
          <el-image
            style="width: 80px; height: 80px; border-radius: 5px"
            :src="logoUrl"
            fit="fill"
          ></el-image>
          <b>遇我也需尽低眉</b>
        </div>
        <el-form
          ref="registerForm"
          :model="registerForm"
          label-width="120px"
          class="demo-ruleForm form"
        >
          <el-form-item label="账号">
            <el-input v-model="registerForm.userName"></el-input>
          </el-form-item>
          <el-form-item label="密码">
            <el-input v-model="registerForm.passWord"></el-input>
          </el-form-item>
          <el-form-item label="验证码">
            <el-input v-model="registerImg"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button class="btn" @click="registerSubmit">注 册</el-button>
          </el-form-item>
        </el-form>
      </div>

      <!-- Overlay -->
      <div class="container__overlay">
        <div class="overlay">
          <div class="overlay__panel overlay--left">
            <el-button class="btn" @click="goLogin">登 录</el-button>
          </div>
          <div class="overlay__panel overlay--right">
            <el-button class="btn" @click="goRegistre">注 册</el-button>
          </div>
        </div>
      </div>
    </div>
    <div class="versions">
      <span>Copyright &copy; 2022</span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  name: '',
  components: {},
  setup () {
    const router = useRouter()
    const state = reactive({
      logoUrl: require('@/assets/logo.png'),
      isRegist: false,
      loginForm: {
        userName: '',
        passWord: ''
      },
      registerForm: {
        userName: '',
        passWord: ''
      },
      registerImg: '',
      loginImg: ''
    })
    onMounted(() => {
      getAxis()
    })
    const getAxis = () => {
      // console.log('aaa', state.aaa)
    }
    // 注册按钮
    const goRegistre = () => {
      state.isRegist = true
    }
    const goLogin = () => {
      state.isRegist = false
    }
    const loginSubmit = () => {
      router.push({ path: '/home' })
    }
    const registerSubmit = () => {
      console.log('register')
    }
    return {
      ...toRefs(state),
      goRegistre,
      goLogin,
      registerSubmit,
      loginSubmit
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
