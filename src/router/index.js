import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld.vue';
import Login from '@/components/Login.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
      meta: {
        auth: true
      }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: {
        auth: false
      }
    }
  ]
});
