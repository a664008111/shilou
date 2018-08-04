// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false
Vue.use(ElementUI);  //ui css框架

  router.afterEach((to,from)=>{
    if (to.meta.title) {
      document.title = to.meta.title;
    }
  })
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
