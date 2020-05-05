import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

import navBar from './nav-bar.vue'
import Content from './contentPage.vue'
import Filter from './filter.vue'
import Service from './services.vue'
import Property from './properties.vue'
import Footer from './footer.vue'
import ownerEntry from './ownerEntry.vue'
import Portal from './portal.vue'
import VueRouter from 'vue-router'
import Routes from './routes'

import 'bootstrap/dist/css/bootstrap.css'
// import 'jquery/src/jquery.js'
// import 'bootstrap-vue/dist/bootstrap-vue.css'
// import VueFire from 'vuefire'
// Vue.use(VueFire)

Vue.use(VueRouter);

const router= new VueRouter({
    routes:Routes,
    mode: 'history'
  
});



Vue.use(BootstrapVue)

Vue.component('navbar',navBar);
Vue.component('content-page',Content);
Vue.component('Filterr',Filter);
Vue.component('service',Service);
Vue.component('property',Property);
Vue.component('footeR',Footer);
Vue.component('ownerEntry',ownerEntry);
Vue.component('portal',Portal)

new Vue({
  el: '#app',
  render: h => h(App),
  router:router
})
