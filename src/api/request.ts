import axios from 'axios'
import { jsonp } from './jsonp'

const http:any = axios.create()

http.jsonp = jsonp

http.interceptors.request.use((config:any) => {
  return config
})
http.interceptors.response.use((res:any) => {
  return res
})
export default http
