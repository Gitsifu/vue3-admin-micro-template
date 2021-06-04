<template>
  <menu-unfold-outlined
      v-if="collapsed"
      class="trigger"
      @click="() => $emit('update:collapsed', !collapsed)"
  />
  <menu-fold-outlined v-else class="trigger" @click="() => $emit('update:collapsed', !collapsed)"/>
</template>

<script>
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from "@ant-design/icons-vue";
import {defineComponent} from "vue";

export default defineComponent({
  name: "PageHeader",
  components: {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
  },
  props: {
    collapsed: Boolean
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.trigger {
  font-size: 18px;
  line-height: 64px;
  padding: 0 24px;
  cursor: pointer;
  transition: color 0.3s;
}

.trigger:hover {
  color: #1890ff;
}
</style>
