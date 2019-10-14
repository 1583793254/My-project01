import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/router/Home'
import Home2 from '@/router/Home2'
import Home3 from '@/router/Home3'
import Home4 from '@/router/Home4'
import Home5 from '@/router/Home5'
Vue.use(Router)

export default new Router({
  mode: 'hash',

  routes: [
    {path:"/",redirect:"/home1"},
    Home,
    Home2,
    Home3,
    Home4,
    Home5

    
  ]
})
