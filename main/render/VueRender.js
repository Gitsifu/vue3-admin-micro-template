import Vue from 'vue/dist/vue.esm';

function vueRender({ loading }) {
  return new Vue({
    template: `
      <div class="mainapp">
        <!-- 标题栏 -->
        <header class="mainapp-header">
          <h1>QianKun</h1>
        </header>
        <div class="mainapp-main">
          <!-- 侧边栏 -->
          <ul class="mainapp-sidemenu">
            <li @click="push('/app1')">app1</li>
            <li @click="push('/app2')">app2</li>
          </ul>
          <!-- 子应用  -->
          <div class="subapp-container">
            <h4 v-if="loading" class="subapp-loading">Loading...</h4>
            <div id="subapp-viewport"></div>
          </div>
        </div>
      </div>
    `,
    el: '#app-container',
    data() {
      return {
        loading,
      };
    },
    methods: {
      push(subapp) { window.history.pushState(null, subapp, subapp) }
    }
  });
}

let app = null;

export default function render({ loading }) {
  if (!app) {
    app = vueRender({ loading });
  } else {
    app.loading = loading;
  }
}
