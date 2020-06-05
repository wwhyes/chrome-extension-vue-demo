import Vue from 'vue'
import Router from 'vue-router'
import {
  BasicLayout
} from './layouts'
import Home from './views/Home.vue'
import Login from './views/Login.vue'

// hack router push callback
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login',
      component: BasicLayout,
      children: [
        {
          path: 'home',
          name: 'Home',
          component: Home
        },
        {
          path: 'login',
          name: 'Login',
          component: Login
        }
      ]
    }
  ]
})
