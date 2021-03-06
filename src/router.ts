import Vue from 'vue';
import Router from 'vue-router';
import Actions from './views/Actions.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: { name: 'actions' },
    },
    {
      path: '/actions',
      name: 'actions',
      component: Actions,
    },
  ],
});
