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
    reqDemandType() {
        return axios.post(`${base.sq}/demand/listDemandType`, {});
    },
    reqProvince() {
        return axios.post(`${base.sq}/demand/listProvince`, {});
    },
}

export default demand;