import Vue from 'vue'
import Router from 'vue-router'

// Pages
import Home from '@/pages/Home'
import AboutUs from '@/pages/AboutUs'

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
    }
  ]
})
