const routers = [
  {
    path: '/',
    meta: {
      title: '',
    },
    component: (resolve) => require(['./pages/index.vue'], resolve)
  },
  {
    path: '/bind',
    meta: {
      title: '',
      description: "defineProperty示例"
    },
    component: (resolve) => require(['./pages/bind.vue'], resolve)
  },
  {
    path: '/page-next',
    meta: {
      title: '',
      description: "翻页控件示例"
    },
    component: (resolve) => require(['./pages/pageNext.vue'], resolve)
  },
  {
    path: '/page-next-simple',
    meta: {
      title: '',
      description: "简单化的翻页控件示例"
    },
    component: (resolve) => require(['./pages/pageNextSimple.vue'], resolve)
  },
  {
    path: '/select-bind-object',
    meta: {
      title: '',
      description: "Select绑定Object"
    },
    component: (resolve) => require(['./pages/SelectBindObject/index.vue'], resolve)
  },
  {
    path: '/read-city',
    meta: {
      title: '',
      description: "世界国家地址信息处理,转换"
    },
    component: (resolve) => require(['./pages/CityData/index.vue'], resolve)
  },
  {
    path: '/v-model',
    meta: {
      title: '',
      description: "v-model使用示例"
    },
    component: (resolve) => require(['./pages/v-model-use/v-model-use.vue'], resolve)
  }
];
export default routers;
