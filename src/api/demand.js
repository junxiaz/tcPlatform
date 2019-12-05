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
    // 获取需求范围
    reqProvince() {
        return axios.post(`${base.sq}/demand/listProvince`, {});
    },
    // 获取需求列表---需求大厅
    reqListDemand(params) {
        return axios.post(`${base.sq}/demand/listDemand`, params);
    },
    // 获取需求列表---需求大厅
    reqDemand(params) {
        return axios.post(`${base.sq}/demand/getDemand`, params);
    },
    reqListNewDemand(params) {
        return axios.post(`${base.sq}/demand/listNewDemand`, params);
    },
}

export default demand;