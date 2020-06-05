/*
 * @Author: your name
 * @Date: 2019-12-04 15:40:39
 * @LastEditTime: 2020-05-14 10:29:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tc_platform\src\api\demand.js
 */
/**
 * 用户模块接口列表
 */

import base from './base'; // 导入接口域名列表
import axios from './https'; // 导入http中创建的axios实例

const demand = {
    // 新增需求
    addDemand(params) {
        return axios.post(`${base.sq}/demand/addDemand`, params);
    },
    // 获得需求类型
    reqDemandType() {
        return axios.post(`${base.sq}/demand/listDemandType`, {});
    },
    // 获得需求状态--需求大厅
    reqWebDemandStatus() {
        return axios.post(`${base.sq}/demand/listWebDemandStatus`, {});
    },
    // 获得需求状态--我的订单
    reqDemandStatus() {
        return axios.post(`${base.sq}/demand/listDemandStatus`, {});
    },
    // 获取需求范围--省份
    reqProvince() {
        return axios.post(`${base.sq}/demand/listProvince`, {});
    },
    // 获取需求列表---需求大厅
    reqListDemand(params) {
        return axios.post(`${base.sq}/demand/listDemand`, params);
    },
    // 获取省份列表---需求大厅----省份筛选
    reqListDemandProvince() {
        return axios.post(`${base.sq}/demand/listDemandProvince`);
    },

    // 获取需求详情--立即投标
    reqDemand(params) {
        return axios.post(`${base.sq}/demand/getDemand`, params);
    },

    // 获取最新8条需求--首页
    reqListNewDemand(params) {
        return axios.post(`${base.sq}/demand/listNewDemand`, params);
    },
    // 获取投标列表
    reqListTenderDemand(params) {
        return axios.post(`${base.sq}/demand/listTenderDemand`, params);
    },
    // 获取中标
    winTenderDemand(params) {
        return axios.post(`${base.sq}/demand/winTenderDemand`, params);
    },
    // 结单
    finishDemand(params) {
        return axios.post(`${base.sq}/demand/finisheDemand`, params);
    },
    // 立即投标
    tenderDemand(params) {
        return axios.post(`${base.sq}/demand/tenderDemand`, params);
    },

    // 新增留言--用户留言
    addMessage(params) {
        return axios.post(`${base.sq}/other/addMessage`, params);
    },

    // 获取服务商详情
    reqService(params) {
      return axios.post(`${base.sq}/enterpeiseDetail/detail`, params);
    },

    // 获取服务商详情--服务案例
    reqServiceCase(params) {
      return axios.post(`${base.sq}/enterpeiseDetail/demandList`, params);
    },

    // 获取服务商详情--服务评价
    reqServiceComment(params) {
      return axios.post(`${base.sq}/enterpeiseDetail/commentList`, params);
    },
    // 获取服务商详情--推荐服务商
    reqRecommendList(params) {
      return axios.post(`${base.sq}/enterpeiseDetail/recommendList`, params);
    },
    //商家端-添加评论
    addDemandComment(params) {
      return axios.post(`${base.sq}/demandComment/add`, params);
    },
    // 商家端--获取我的投标列表
    reqMyListTenderDemand(params) {
      return axios.post(`${base.sq}/tenderDemand/listTendDemand`, params);
    },
}

export default demand;