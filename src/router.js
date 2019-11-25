import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

export default new VueRouter({
  routes: [
    {
      path: '/',
      component: () => import('./views/HomeHasNav.vue'),
      children: [
        { path: '/', component: () => import('./views/Home.vue'), meta: { tabNumber: 0 } },
        { path: 'category', component: () => import('./views/Category.vue'), meta: { tabNumber: 1 } },
        { path: 'cart', component: () => import('./views/Cart.vue'), meta: { tabNumber: 2 } },
        { path: 'user', component: () => import('./views/User.vue'), meta: { tabNumber: 3 } }
      ]
    },
    { path: '/detail', component: () => import('./views/Detail.vue') },
    { path: '/Login', component: () => import('./views/Login') }
  ]
})
