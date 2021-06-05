import {createApp} from 'vue';
import App from './App.vue'
// import {Button,Card} from 'ant-design-vue';
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

function vueRender({loading}) {
    return createApp(
        {
            ...App,
            data() {
                return {
                    loading
                }
            }
        }, {loading})
        .use(Antd)
        // .use(Button)
        // .use(Card)
        .mount('#app-container');
}

let app = null;

export default function render({loading}) {
    if (!app) {
        app = vueRender({loading});
    } else {
        app.loading = loading;
    }
}
