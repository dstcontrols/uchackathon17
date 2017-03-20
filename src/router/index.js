import Vue from 'vue';
import Vuetify from 'vuetify';
import Router from 'vue-router';
import Hello from '@/components/BarrickDash';

// import TodoList from '@/components/TodoList';

Vue.use(Vuetify);
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'BarrickDash',
      component: Hello,
    },
  ],
});
