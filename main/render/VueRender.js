import {createApp} from 'vue';
import App from './App.vue'
import {Button,Card} from 'ant-design-vue';

function vueRender({ loading }) {
  return createApp(App,{loading})
      .use(Button)
      .use(Card)
      .mount('#app-container');
}

let app = null;

export default function render({ loading }) {
  if (!app) {
    app = vueRender({ loading });
  } else {
    app.loading = loading;
  }
}
