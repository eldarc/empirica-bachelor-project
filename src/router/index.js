import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/pages/Home'
import AboutUs from '@/pages/AboutUs'
import Engineering from '@/pages/Engineering'
import Business from '@/pages/Business'
import Ecampus from '@/pages/Ecampus'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/about-us',
      component: AboutUs
    },
    {
      path: '/study-programmes',
      redirect: '/study-programmes/engineering'
    },
    {
      path: '/study-programmes/engineering',
      component: Engineering
    },
    {
      path: '/study-programmes/business',
      component: Business
    },
    {
      path: '/ecampus',
      component: Ecampus
    }
  ]
})
