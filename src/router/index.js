import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Contact from '../views/Contact.vue'
// import WorkDetail from '../components/WorkDetail.vue'
// import Worklist from '../components/Worklist.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    // children: [
    //   { //workのトップ
    //     path: '/',
    //     name: 'Worklist',
    //     component: Worklist
    //   },
    //   { //workの個別詳細ページ  認識されない
    //     path: '/:slug',
    //     name: 'WorkDetail',
    //     component: WorkDetail
    //   }
    // ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact
    
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
