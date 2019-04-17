import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    { path: '/', component: () => import('./views/Home.vue')
   
  },
  { path: '/detail', component: () => import('./views/Detail.vue') },
    { path: '/category', component: () => import('./views/Category.vue') },
    { path: '/cart', component: () => import('./views/Cart.vue') },
    { path: '/user', component: () => import('./views/User.vue') }
  ]
})
