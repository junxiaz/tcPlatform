/*
 * @Author: your name
 * @Date: 2019-12-06 10:07:36
 * @LastEditTime: 2020-05-14 10:18:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \tc_platform\src\router\sellerPages\index.js
 */
export default {
  path:'/seller',
  redirect:'/seller/home',
  name:"商家",
  meta:{
    hidden:false,
  },
  component: () => import('@/sellerPages/home'),
  children:[
    {
      path: "home",
      name:"我的首页",
      meta:{
        icon:"el-icon-my-home",
        hidden: false
      },
      component : ()=> import('@/sellerPages/home/homes.vue')
    },
    {
      path: "demandHall",
      name:"需求大厅",
      meta:{
        icon:"el-icon-my-demand",
        hidden: false
      },
      redirect: '/hall',
      component : ()=> import('@/pages/Hall/Hall.vue')
    },
    {
      path: "myOrder",
      name:"我的发布",
      meta:{
        icon:"el-icon-my-order",
        hidden: false
      },
      component : ()=> import('@/sellerPages/myOrder/list.vue')
    },
    {
      path: "myTender",
      name:"我的投标",
      meta:{
        icon:"el-icon-my-order",
        hidden: false
      },
      component : ()=> import('@/sellerPages/myTender/list.vue')
    },
    {
      path: "myWinning",
      name:"我的中标",
      meta:{
        icon:"el-icon-my-order",
        hidden: false
      },
      component : ()=> import('@/sellerPages/myWinning/list.vue')
    },
    {
      path: "enterpriseSet",
      name:"基本信息",
      meta:{
        icon:"el-icon-my-enterprise",
        hidden: false
      },
      component : ()=> import('@/sellerPages/enterpriseSet/list.vue')
    }
  ]

}