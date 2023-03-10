import { defineStore } from 'pinia'

import router from '@/router/index.js'

const useLogin = defineStore('login', {
  state: () => ({
    token: localStorage.getItem('Token') ? localStorage.getItem('Token') : ''
  }),
  getters: {},
  actions: {
    setLoginInfo(payload) {
      const token = payload.msg
      this.token = token
      localStorage.setItem('Token', token)

      // cookie 存储 token
      document.cookie = `"token"=${token}`

      router.push('/home')
    }
  }
})

export default useLogin
