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
    </div>
    <div class="btn">
      <van-button type="primary" native-type="submit" @click="submit"
        >登录</van-button
      >
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

import { login } from '@/api/Login/login'

import useLogin from '@/store/Login/Login'

const loginForm = reactive({
  loginAccount: 'hengszh',
  password: '0000'
})

const Base64 = require('js-base64').Base64

const useLoginStore = useLogin()

const submit = () => {
  login({
    loginAccount: loginForm.loginAccount,
    password: Base64.encode(loginForm.password)
  }).then((res) => {
    if (res.data.status == 200) {
      useLoginStore.setLoginInfo(res.data)
    }
  })
}
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 45px;
  box-sizing: border-box;
  .logo {
    width: 96px;
    height: 96px;
    background: #0066ff;
    border-radius: 20px;
    margin-bottom: 48px;
  }
  .text {
    font-style: normal;
    h1 {
      font-weight: 400;
      color: #2d3442;
      font-size: 48px;
      line-height: 63px;
      margin-bottom: 16px;
    }
    p {
      font-size: 28px;
      line-height: 37px;
      color: #586684;
    }
  }

  .forms {
    margin: 80px 0;
    .form {
      width: 100%;
      margin-bottom: 70px;
      position: relative;
      .ipt {
        width: 100%;
        border: 0;
        border-bottom: 1px solid #d9d9d9;
        padding-bottom: 20px;
        &:-internal-autofill-selected {
          background-color: transparent;
        }
        &::-webkit-input-placeholder {
          font-style: normal;
          font-weight: 400;
          font-size: 28px;
          line-height: 42px;
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
  }
  .btn {
    .van-button {
      cursor: pointer;
      width: 684px;
      height: 88px;
      background: #0066ff;
      border-radius: 20px;
    }
  }
}
</style>
