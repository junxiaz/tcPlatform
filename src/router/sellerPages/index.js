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
      name:"我的订单",
      meta:{
        icon:"el-icon-my-order",
        hidden: false
      },
      component : ()=> import('@/sellerPages/myOrder/list.vue')
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