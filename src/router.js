import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      component: () => import('./views/404Page.vue')
    },
    {
      path: '/',
      name: 'main',
      component: () => import('./views/Main.vue')
    },
    {
      path: '/signup',
      name: 'signup',
      component: () => import('./views/Signup.vue')
    },
    {
      path: '/signin',
      name: 'signin',
      component: () => import('./views/Signin.vue')
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: () => import('./views/Dashboard.vue'),
      meta: {
        auth: true
      }
    },
    {
      path: '/clock',
      name: 'clock',
      component: () => import('./views/Clock.vue'),
      meta: {
        auth: true
      }
    },
    {
      path: '/daily',
      name: 'daily',
      component: () => import('./views/Daily.vue'),
      meta: {
        auth: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {

  var usuario = localStorage.getItem("Logged");
  var autenticacion = to.matched.some(record => record.meta.auth);

  if(!usuario && autenticacion){

    next('signin');
  }
  else if (usuario && !autenticacion){

    if(to.name == "dashboard"){
      next('dashboard');
    }
    else if(to.name == "clock"){
      next('clock');
    }
    else if(to.name == "daily"){
      next('daily');
    }
    else {
      next('dashboard');
    }
  }
  else {
    next();
  }
})


export default router;