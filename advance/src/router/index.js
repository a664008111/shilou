import Vue from 'vue'
import Router from 'vue-router'
import Nav from '@/components/nav'
import AboutUs from '@/components/AboutUs'
import Product from '@/components/product'
import Contactus from '@/components/contactus'
import Scenarios from '@/components/Scenarios'
 
Vue.use(Router)

export default new Router({
  routes: [
        {
          path: '/navhome',
          name: 'Nav',
          component: Nav,
          meta:{
              title:"晋石钢业"
          }
        },
        {
          path: '/AboutUs',
          name: 'AboutUs',
          component: AboutUs,
          meta:{
            title:"关于我们"
          }
        },
        {
          path: '/scenarios',
          name: 'Scenarios',
          component: Scenarios,
          meta:{
            title:"产品中心"
          }
        },
        {
          path: '/navhome',
          name: 'Nav',
          component: Nav,
          meta:{
              title:"应用场景"
          }
        },
        {
          path: '/contactus',
          name: 'Contactus',
          component: Contactus,
          meta:{
            title:"联系我们"
          }
    }
  ]
})
