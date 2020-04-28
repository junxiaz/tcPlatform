let headerMenus = [
    { path: '/home', name: '首页', component: rb => require(['../pages/Home/Home.vue'], rb) },
    // { path: '/about', name: '关于', component: rb => require(['../pages/Common/404.vue'], rb) },
    {
        path: '/special',
        name: '特种材料',
        component: rb => require(['@/pages/Layout/Layout.vue'], rb),
        children: [
            { path: 'cloud', name: '云膜', component: rb => require(['@/pages/Special/SpecialClound'], rb), },
            { path: 'full', name: '全印模', component: rb => require(['@/pages/special/SpecialFull.vue'], rb), },
            { path: 'laser', name: '镭射', component: rb => require(['@/pages/special/SpecialLaser.vue'], rb), },
        ]
    },
    {
        path: '/package',
        name: '包装印刷',
        component: rb => require(['@/pages/Layout/Layout.vue'], rb),
        children: [
            { path: 'wine', name: '酒类', component: rb => require(['@/pages/Design/DesignWine.vue'], rb), },
            { path: 'smoke', name: '烟类', component: rb => require(['@/pages/Design/DesignSmoke.vue'], rb), },
            { path: 'makeup', name: '化妆品', component: rb => require(['@/pages/Design/DesignMakeUp.vue'], rb), },
        ]
    },
    {
        path: '/design',
        name: '设计服务',
        component: rb => require(['@/pages/Layout/Layout.vue'], rb),
        children: [
            { path: 'logo', name: 'logo设计', component: rb => require(['@/pages/Design/DesignLogo.vue'], rb), },
            // { path: 'vi', name: '包装设计', component: rb => require(['@/pages/Design/DesignVi.vue'], rb),  },
            { path: 'package', name: '包装设计', component: rb => require(['@/pages/Design/DesignPackage.vue'], rb),  },
            { path: 'pro', name: '产品效果图', component: rb =>  require(['@/pages/Design/DesignPro.vue'], rb),  },
        ]
    },
    // { path: '/package', name: '包装印刷', component: rb => require(['../pages/Common/404.vue'], rb), },
    { path: '/hall', name: '需求大厅', component: rb => require(['../pages/Hall/Hall.vue'], rb) },
]

let userTerminal = [
    { path: '/',  redirect: '/home' },
    { path: '/login', redirect: '/login/login', name: '登录', component: rb => require(['../pages/Login/Login.vue'], rb),
      children: [
        { path: 'login', name: 'login', component: rb => require(['../components/LoginForm/LoginForm.vue'], rb)},
        { path: 'register', name: 'register', component: rb => require(['../components/LoginForm/LoginForm.vue'], rb) },
      ]
    },
    { path: '/label', name: '提交需求', component: rb => require(['../pages/Label/Label.vue'], rb) },
    { path: '/demand', component: rb => require(['../pages/Demand/Demand.vue'], rb) },
    { path: '/release', component: rb => require(['../pages/Release/Release.vue'], rb) },
    { path: '/order/:id', component: rb => require(['../pages/Order/Order.vue'], rb) },
    { path: '/register', component: rb => require(['../pages/Register/Register.vue'], rb) },
    { path: '/comment', component: rb => require(['../pages/Comment/Comment.vue'], rb) },
    { path: '/service', component: rb => require(['../pages/Service/Service.vue'], rb) },
]

export {
    headerMenus,
    userTerminal
}