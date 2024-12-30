import Vue from 'vue'
import App from './App.vue'
import HelloWorld from './components/HelloWorld.vue'
Vue.config.productionTip = false
Vue.component('HelloWorld', HelloWorld)
new Vue({
  el: '#app',
  render: h => h(App),
})
