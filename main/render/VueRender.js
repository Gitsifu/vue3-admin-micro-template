import {createApp} from 'vue';
import App from './App.vue'
function vueRender({ loading }) {
  return createApp(App,{loading}).mount('#app-container');
}

let app = null;

export default function render({ loading }) {
  if (!app) {
    app = vueRender({ loading });
  } else {
    app.loading = loading;
  }
}
