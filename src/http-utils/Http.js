import axios from 'axios'

export const http = axios.create({
  baseURL: `${process.env.VUE_APP_HOST}`
})
http.interceptors.request.use((config) => {
  const token =  window.localStorage.getItem('token')

  if (token) {
    config.headers.Authorization = `Bearer ${token}`
    return config
  }

  return config
},(error) => {
  return Promise.reject(error)
})
