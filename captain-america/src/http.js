//自己做的axios
import axios from 'axios'

const ajax =axios.create({
  baseURL:'http://127.0.0.1:5000/'
})

//拦截器
ajax.interceptors.request.use((config)=>config);

export default ajax;


export const getSwiper = () =>ajax.get('/news')

