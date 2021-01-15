import Vue from 'vue'
import App from './App.vue'
import ViewUI from 'view-design';
import VueRouter from 'vue-router'
import Routers from './router';

// import style
import 'view-design/dist/styles/iview.css';

Vue.use(VueRouter)
Vue.use(ViewUI);
Vue.config.productionTip = false

// 路由配置
const RouterConfig = {
  mode: 'history',
  routes: Routers
};
const router = new VueRouter(RouterConfig);

new Vue({
  router: router,
  render: h => h(App),
}).$mount('#app')
