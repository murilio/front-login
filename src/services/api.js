import axios from 'axios'
import { getToken } from './auth'

const api = axios.create({
  // baseURL: process.env.REACT_APP_API_URL
  baseURL: 'http://localhost:3001'
})

api.interceptors.request.use(async config => {
  const token = getToken()

  if (token) {
    config.headers.Authorization = `Login ${token}`
  }

  return config
})

export default api
