const routers = [
  {
    path: '/',
    meta: {
      title: ''
    },
    component: (resolve) => require(['./pages/index.vue'], resolve)
  },
  {
    path: '/bind',
    meta: {
      title: ''
    },
    component: (resolve) => require(['./pages/bind.vue'], resolve)
  },
  {
    path: '/page-next',
    meta: {
      title: ''
    },
    component: (resolve) => require(['./pages/pageNext.vue'], resolve)
  },
  {
    path: '/page-next-simple',
    meta: {
      title: ''
    },
    component: (resolve) => require(['./pages/pageNextSimple.vue'], resolve)
  },
  {
    path: '/select-bind-object',
    meta: {
      title: ''
    },
    component: (resolve) => require(['./pages/SelectBindObject/index.vue'], resolve)
  },
  {
    path: '/read-city',
    meta: {
      title: ''
    },
    component: (resolve) => require(['./pages/CityData/index.vue'], resolve)
  },
  {
    path: '/v-model',
    meta: {
      title: ''
    },
    component: (resolve) => require(['./pages/v-model-use/v-model-use.vue'], resolve)
  }
];
export default routers;
