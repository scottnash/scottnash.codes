import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store/';
import firebase from 'firebase';
import { database } from './database';
import VueFire from 'vuefire'

Vue.use(VueFire)
Vue.config.productionTip = false;

firebase.auth().onAuthStateChanged(() => {
  new Vue({
    router,
    store,
    database,
    render: h => h(App)
  }).$mount('#app');
});
