<template>
  <template v-if="!menuInfo.meta.hidden">
    <a-sub-menu v-if="menuInfo.children?.length" :key="menuInfo.name" v-bind="$attrs">
      <template #title>
        <span>
          <user-outlined />
          <span>{{ menuInfo.meta.title }}</span>
        </span>
      </template>
      <template v-for="item in menuInfo.children" :key="item.name">
        <template v-if="!item.children">
          <a-menu-item :key="item.name">
            <user-outlined />
            <span>{{ item.meta.title }}</span>
          </a-menu-item>
        </template>
        <template v-else>
          <menu-item :key="item.name" :menu-info="item" />
        </template>
      </template>
    </a-sub-menu>
    <a-menu-item v-else :key="menuInfo.name">
      <user-outlined />
      <span>{{ menuInfo.meta.title }}</span>
    </a-menu-item>
  </template>
</template>

<script>
import {UserOutlined} from "@ant-design/icons-vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "MenuItem",
  components: {
    UserOutlined,
  },
  props: {
    menuInfo: {
      type: Object,
      default: () => ({})
    }
  }
})
</script>

<style scoped>

</style>
