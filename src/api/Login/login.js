import request from '../request.js'

/**
 * @interface /auth/login
 * @desc 登录接口
 * @param { loginAccount , password }
 */
export const login = (payload) => {
  return request.post('/auth/login', {
    loginAccount: payload.loginAccount,
    password: payload.password
  })
}

/**
 * @interface /logout
 * @desc 退出登录
 * @param
 */
export const loginOut = () => {
  return request.get('/logout')
}

/**
 * @interface /sys/getUserInfo
 * @desc 获取登录用户信息
 * @param
 */
export const getCurrentLoginUserInfo = () => {
  return request.post('/sys/getUserInfo')
}
