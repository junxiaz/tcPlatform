// import axios from 'axios'
// import * as util from '../assets/js/util.js';

// const instance = axios.create({
//     // baseURL: 'http://rap2api.taobao.org/app/mock/224',
//     baseURL: 'http://192.168.1.65:8093/platform/',
//     timeout: 10000
// });

// instance.defaults.headers.post['Content-Type'] = 'application/json';
// //错误处理
// instance.interceptors.response.use(function (response) {
//     return response;
// }, util.catchError);

// export default instance;


/** 
 * api接口的统一出口
 */
import user from '@/api/user';
import demand from '@/api/demand'

// 导出接口
export default {
    user,
    demand
}