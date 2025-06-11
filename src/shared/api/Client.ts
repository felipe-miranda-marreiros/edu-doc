import axios from 'axios'

export const BASE_URL = 'http://edu-doc/api'

export const client = axios.create({
  baseURL: BASE_URL
})
