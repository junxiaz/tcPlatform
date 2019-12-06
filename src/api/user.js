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
    verifyUserByPerson(params) {
        return axios.post(`${base.sq}/user/verifyUserByPerson`, params);
    },
    verifyUserByEnterprise(params) {
        return axios.post(`${base.sq}/user/verifyUserByEnterprise`, params);
    },
    // 首页 服务商
    listClientUser(params) {
        return axios.post(`${base.sq}/user/listClientUser`, params);
    },
    getUserInfo(params) {
        return axios.post(`${base.sq}/user/getClientUser`, params);
    },
    reqStatistics() {
        return axios.post(`${base.sq}/statistics/historyStatistics`, {});
    },
}

export default user;