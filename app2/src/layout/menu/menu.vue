<template>
  <a-menu
      v-model:selectedKeys="selectedKeys"
      mode="inline"
      theme="dark"
      :inline-collapsed="collapsed"
      @click="clickMenuItem"
  >
    <template v-for="item in menus" :key="item.name">
      <menu-item :menuInfo="item" />
    </template>
  </a-menu>
</template>

<script>
import MenuItem from "./menu-item.vue";
import {defineComponent, reactive, toRefs} from "vue";
import {useRouter} from "vue-router";
export default defineComponent({
  name: "AsideMenu",
  components: {MenuItem},
  props: {
    collapsed: Boolean
  },
  setup() {
    const router = useRouter()
    const state = reactive({
      selectedKeys: ['/app1']
    })

    const menus = [
      {
        "name": "app2",
        "meta": {
          "title": "应用app2",
          "hidden": false,
        },
        "children": [
          {
            "name": 'app2-home',
            "meta": {
              "title": 'home',
              "hidden": false,
            }
          },
          {
            "name": 'app2-about',
            "meta": {
              "title": 'about',
              "hidden": false,
            }
          }
        ]
      }
    ]

    // 点击菜单
    const clickMenuItem = ({ item, key, keyPath }) => {
      if (/http(s)?:/.test(key)) {
        window.open(key)
      } else {
        if(window.__POWERED_BY_QIANKUN__){
          history.pushState(null, key, key)
        }else {
          router.push(key)
        }
      }
    }
    return {
      ...toRefs(state),
      clickMenuItem,
      menus
    }
  }
})
</script>

<style scoped>

</style>
