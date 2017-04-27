// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import router from './router'
import resource from 'vue-resource'
import Layout from './Layout.vue'

Vue.config.productionTip = false

Vue.use(resource)
Vue.use(router)


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<Layout/>',
  components: { Layout }
})
