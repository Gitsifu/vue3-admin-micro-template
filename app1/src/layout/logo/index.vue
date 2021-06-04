<template>
  <div class="logo"/>
</template>

<script>
import {defineComponent} from "vue";

export default defineComponent({
  name: "Logo",
  props: {
    collapsed: Boolean
  },
  setup() {
    return {}
  }
})
</script>

<style scoped>
.logo {
  height: 32px;
  background: rgba(255, 255, 255, 0.3);
  margin: 16px;
}
</style>
