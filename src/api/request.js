import axios from 'axios'

import baseURL from './baseURL'

const request = axios.create({
  baseURL: baseURL,
  timeout: 30000
})

request.interceptors.request.use(
  (config) => {
    let token = null
    let cookieList = document.cookie.split(';')
    for (let i in cookieList) {
      if (cookieList[i].indexOf('token') != -1) {
        token = cookieList[i].split('"token"=')[1]
      }
    }

    //携带统一token
    config.headers['token'] = token
    return config
  },
  (error) => {
    Promise.reject(error)
  }
)
request.interceptors.response.use(
  (response) => {
    return response
  },
  (error) => {
    Promise.reject(error)
  }
)

export default request
