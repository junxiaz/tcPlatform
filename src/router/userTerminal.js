let headerMenus = [
    { path: '/home', name: '首页', component: rb => require(['../pages/Home/Home.vue'], rb) },
    { path: '/about', name: '关于', component: rb => require(['../pages/Common/404.vue'], rb) },
    {
        path: '/design',
        name: '设计服务',
        children: [
            { path: 'logo', name: 'logo设计', component: rb => require(['../pages/Common/404.vue'], rb) },
            { path: 'vi', name: 'VI设计', component: rb => require(['../pages/Common/404.vue'], rb) },
            { path: 'agency', name: '机构设计', component: rb => require(['../pages/Common/404.vue'], rb) },
            { path: 'pro', name: '产品效果图', component: rb => require(['../pages/Common/404.vue'], rb) },
        ]
    },
    { path: '/package', name: '包装印刷', component: rb => require(['../pages/Common/404.vue'], rb), },
    {
        path: '/special',
        name: '特种材料',
        children: [
            { path: 'cloud', name: '云膜材料', component: rb => require(['../pages/Common/404.vue'], rb) },
            { path: 'full', name: '全印模', component: rb => require(['../pages/Common/404.vue'], rb) },
            { path: 'laser', name: '镭射', component: rb => require(['../pages/Common/404.vue'], rb) },
            { path: 'cat', name: '猫眼', component: rb => require(['../pages/Common/404.vue'], rb) },
        ]
    },
    { path: '/hall', name: '需求大厅', component: rb => require(['../pages/Hall/Hall.vue'], rb) },
]

let userTerminal = [
    { path: '/',  redirect: '/home' },
    { path: '/login', name: '登录', component: rb => require(['../pages/Login/Login.vue'], rb) },
    { path: '/label', name: '提交需求', component: rb => require(['../pages/Label/Label.vue'], rb) },
    { path: '/demand', component: rb => require(['../pages/Demand/Demand.vue'], rb) },
    { path: '/release', component: rb => require(['../pages/Release/Release.vue'], rb) },
    { path: '/register', component: rb => require(['../pages/Register/Register.vue'], rb) },
]

export {
    headerMenus,
    userTerminal
}