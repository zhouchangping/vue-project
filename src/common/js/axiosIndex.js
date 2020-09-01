import axios from 'axios';
 axios.interceptors.response.use((res)=>{
 return res.data; // 在这里统一拦截结果 把结果处理成res.data
});
export function getLists() {
  return axios.get('/api/list');
}