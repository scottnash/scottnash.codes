import Vue from 'vue';
import Router from 'vue-router';
import firebase from 'firebase';
import Home from './views/Home.vue';

Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/login',
      name: 'login',
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    },
    {
      path: '/edit',
      name: 'edit',
      component: () => import(/* webpackChunkName: "edit" */ './views/Edit.vue'),
      meta: {
        requiresAuth: true
      }
    },
    {
      path: '*',
      name: 'home',
      component: Home
    },
  ]
})


router.beforeEach((to, from, next) => {
  const currentUser = firebase.auth().currentUser;
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if (requiresAuth && !currentUser) {
    next('login');
  } else {
    next();
  }
});

export default router;
