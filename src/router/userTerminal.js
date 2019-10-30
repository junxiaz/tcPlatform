export default [
// {
//     path: '/',
//     name: '首页',
//     redirect: '/home',
//     component: () => import('@/pages/Home/Home')
// },
{
    path: '/home',
    name: '首页',
    component: () => import('@/pages/Home/Home')
},
{
    path: '/label',
    name: '提交需求',
    meta: {
        name: '天臣-提交需求'
    },
    component: () => import('@/pages/Label/Label')
},
{
    path: '/hall',
    name: '需求大厅',
    component: () => import('@/pages/Hall/Hall')
},
{
    path: '/demand',
    component: () => import('@/pages/Demand/Demand')
},
]