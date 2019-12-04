/**
 * 用户模块接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from './https'; // 导入http中创建的axios实例
import qs from 'qs'; // 根据需求是否导入qs模块

const user = {
    // 注册用户类型   
    userType() {
        return axios.post(`${base.sq}/user/listClientUserType`,{});
    },
    // 新闻详情,演示    
    // articleDetail(id, params) {
    //     return axios.get(`${base.sq}/topic/${id}`, {
    //         params: params
    //     });
    // },
    // post提交    
    login(params) {
        return axios.post(`${base.sq}/user/clientUserLogin`, params);
    },
    register(params) {
        return axios.post(`${base.sq}/user/registerClientUser`, params);
    },
}

export default user;