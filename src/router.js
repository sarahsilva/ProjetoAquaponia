import Vue from 'vue'
import Router from 'vue-router'
import Login from './views/Login.vue'
import DemoVariaveis from './views/DemoVariaveis.vue'
import Produtos from './views/Produtos.vue'
import PassoaPasso from './views/PassoaPasso.vue'
import Producoes from './views/Producoes.vue'
import Objetivos from './views/Objetivos.vue'
import Administrador from './views/Administrador.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/demo',
      name: 'Variaveis',
      component: DemoVariaveis
    },
    {
      path: '/produtos',
      name: 'Produtos',
      component: Produtos
    },
    {
      path: '/passoapasso',
      name: 'PassoaPasso',
      component: PassoaPasso
    },
    {
      path: '/producoes',
      name: 'Producoes',
      component: Producoes
    },
    {
      path: '/objetivos',
      name: 'Objetivos',
      component: Objetivos
    }
    ,
    {
      path: '/administrador',
      name: 'Administrador',
      component: Administrador
    }
  ]
})
