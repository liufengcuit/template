import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const hello = r => require.ensure([], () => r(require('@/components/HelloWorld')), 'hello')

export default new Router({
  routes: [
    {
      path: '/',
      name: 'hello',
      component: hello
    }
  ]
})
