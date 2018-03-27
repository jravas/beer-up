// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueResource from 'vue-resource'
import VTooltip from 'v-tooltip'
import VeeValidate from 'vee-validate'
import PrettyCheckbox from 'pretty-checkbox-vue'
import VueProgressBar from 'vue-progressbar'
import Notifications from 'vue-notification'

// form validation
Vue.use(VeeValidate)
// HTTP requests
Vue.use(VueResource)
// tooltip for displaying beer names
Vue.use(VTooltip)
// styled checkboxes and radio buttons
Vue.use(PrettyCheckbox)
// progress bar
Vue.use(VueProgressBar, {
  color: '#FFC80A',
  failedColor: 'red',
  height: '10px'
})
// notifications
Vue.use(Notifications)
// dragula
// Vue.mixin({
//   methods: {
//     dragula (data) {
//       return dragula(data)
//     }
//   }
// })
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
