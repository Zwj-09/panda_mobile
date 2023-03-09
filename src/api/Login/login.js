import request from '../request.js'

export const login = (payload) => {
  return request.post('/auth/login', {
    loginAccount: payload.loginAccount,
    password: payload.password
  })
}
