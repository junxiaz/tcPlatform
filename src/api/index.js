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
// 文章模块接口
import user from '@/api/user';
// 其他模块的接口……

// 导出接口
export default {
    user,
    // ……
}