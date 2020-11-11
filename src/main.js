import Vue from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/tailwind.css' 
import VueScrollReveal from 'vue-scroll-reveal'
import { KinesisContainer, KinesisElement} from 'vue-kinesis'
import VAnimateCss from 'animate.css';
import LightTimeline from 'vue-light-timeline';

Vue.use(LightTimeline);
Vue.use(VAnimateCss);

Vue.config.productionTip = false
// Vue.use(VueScrollReveal);
Vue.use(VueScrollReveal, {
  class: 'v-scroll-reveal',
  duration: 800,
  scale: 1,
  distance: '10px',
  mobile: false
});

Vue.component('kinesis-container', KinesisContainer);
Vue.component('kinesis-element', KinesisElement);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
