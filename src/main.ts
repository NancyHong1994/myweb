import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.config.productionTip = false
const vuetifyOpts = {
  theme: {
    themes: {
      light: {
        primary: '#424242',
        secondary: '#FFFFFF',
        keyBar: '#A1887F'
      }
    }
  }
}
Vue.use(Vuetify)
new Vue({
  vuetify: new Vuetify(vuetifyOpts),
  router,
  store,
  render: h => h(App)
}).$mount('#app')
