import { defineStore } from 'pinia'
import router from '@/router/index.js'
import storage from '@/utils/storage'

const useLogin = defineStore('login', {
  state: () => ({
    token: storage.get('Token') ? storage.get('Token') : ''
  }),
  getters: {},
  actions: {
    setLoginInfoAction(payload) {
      const token = payload.msg

      this.token = token
      storage.set('Token', token)

      storage.set('roleId', payload.data.roleId)
      storage.set('roleList', JSON.stringify(payload.data.roleListVOList))
      storage.set('menuList', JSON.stringify(payload.data.menuListVOList))

      // cookie 存储 token
      document.cookie = `"token"=${token}`

      router.push('/home')
    },
    setLoginOutAction() {
      storage.clear()
      router.push('/login')
    }
  }
})

export default useLogin
