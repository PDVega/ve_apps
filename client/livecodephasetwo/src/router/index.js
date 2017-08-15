import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MainContent from '@/components/MainContent'
import ArticleDetail from '@/components/ArticleDetail'
import SignIn from '@/components/SignIn'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Home,
      children: [
        {
          path: '',
          component: MainContent
        },
        {
          path: '/:id',
          component: ArticleDetail,
          props: true
        }
      ]
    },
    {
      path: '/login',
      name: 'SignIn',
      component: SignIn
    }
  ]
})
