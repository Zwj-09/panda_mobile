<template>
  <div class="container">
    <div class="logo"></div>
    <div class="text">
      <h1>登录</h1>
      <p>开放式创新科研管理系统</p>
    </div>
    <div class="forms">
      <div class="form">
        <input
          autocomplete="off"
          class="ipt"
          placeholder="请输入账号"
          v-model="loginForm.loginAccount"
        />
      </div>
      <div class="form">
        <input
          class="ipt"
          autocomplete="new-password"
          type="password"
          placeholder="请输入密码"
          v-model="loginForm.password"
        />
      </div>
      <div class="erros" :class="{ shake: isShake }">
        {{ errMsg }}
      </div>
    </div>
    <div class="btn">
      <van-button
        type="primary"
        :loading="isLoading"
        loading-text="登录中..."
        native-type="submit"
        @click="submit"
        :disabled="isLoading"
      >
        登录
      </van-button>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'

import { login } from '@/api/Login/login'

import useLogin from '@/store/Login/Login'

const errMsg = ref('')
const isShake = ref(false)

const loginForm = reactive({
  loginAccount: 'ceszh',
  password: '0000'
})

const isLoading = ref(false)

const Base64 = require('js-base64').Base64

const useLoginStore = useLogin()

const submit = () => {
  isLoading.value = true
  if (!loginForm.loginAccount) {
    isShake.value = true
    isLoading.value = false
    errMsg.value = '请输入账号'
    const timer = setTimeout(() => {
      isShake.value = false
      clearTimeout(timer)
    }, 820)
  } else if (!loginForm.password) {
    isShake.value = true
    isLoading.value = false
    errMsg.value = '请输入密码'
    const timer = setTimeout(() => {
      isShake.value = false
      clearTimeout(timer)
    }, 820)
  } else {
    errMsg.value = ''
    login({
      loginAccount: loginForm.loginAccount,
      password: Base64.encode(loginForm.password)
    }).then((res) => {
      if (res.data.status == 200) {
        useLoginStore.setLoginInfoAction(res.data)
        isLoading.value = false
      } else {
        isLoading.value = false
        errMsg.value = res.data.msg
      }
    })
  }
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 20px;
  box-sizing: border-box;
  .logo {
    width: 98px;
    height: 98px;
    background: #0066ff;
    border-radius: 10px;
    margin-bottom: 20px;
  }
  .text {
    font-style: normal;
    font-weight: 400;
    h1 {
      font-size: 48px;
      line-height: 63px;
      color: #2d3442;
      margin-bottom: 16px;
    }
    p {
      font-size: 28px;
      line-height: 37px;
      color: #586684;
    }
  }

  .forms {
    margin: 60px 0;
    .form {
      width: 100%;
      margin-bottom: 20px;
      position: relative;
      .ipt {
        width: 100%;
        border: 0;
        border-bottom: 1px solid #d9d9d9;
        padding-bottom: 10px;
        &:-internal-autofill-selected {
          background-color: transparent;
        }
        &::-webkit-input-placeholder {
          font-style: normal;
          font-weight: 400;
          font-size: 18px;
          line-height: 21px;
          color: #b6c0d3;
        }
      }
      .err {
        display: block;
        font-family: 'OPPOSans-H';
        position: absolute;
        bottom: -30px;
        font-size: 20px;
        color: red;
      }
    }
    .erros {
      color: red;
      font-size: 16px;
      width: 100%;
      height: 50px;
    }
  }
  .btn {
    .van-button {
      cursor: pointer;
      width: 100%;
      height: 88px;
      background: #0066ff;
      border-radius: 20px;
      font-size: 32px;
    }
  }
}

.shake {
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
}

@keyframes shake {
  10%,
  90% {
    transform: translate3d(-1px, 0, 0);
  }

  20%,
  80% {
    transform: translate3d(2px, 0, 0);
  }

  30%,
  50%,
  70% {
    transform: translate3d(-4px, 0, 0);
  }

  40%,
  60% {
    transform: translate3d(4px, 0, 0);
  }
}
</style>
