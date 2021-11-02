// src/boot/axios.js

import { boot } from 'quasar/wrappers'
import axios from 'axios'
import { GET_TOKEN } from 'src/store/usuario/types'

const api = axios.create({ baseURL: 'http://ec2-107-20-23-84.compute-1.amazonaws.com/tap' })

export default boot(({ app,store }) => {
  // for use inside Vue files (Options API) through this.$axios and this.$api

  app.config.globalProperties.$axios = axios
  // ^ ^ ^ this will allow you to use this.$axios (for Vue Options API form)
  //       so you won't necessarily have to import axios in each vue file

  app.config.globalProperties.$api = api
  // ^ ^ ^ this will allow you to use this.$api (for Vue Options API form)
  //       so you can easily perform requests against your app's API
  api.interceptors.request.use(function (config) {
    const token = store.getters['usuario/'+GET_TOKEN]
    config.headers.Authorization = 'Bearer '+token
  
    return config
  })

})

export { axios, api }