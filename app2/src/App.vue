<template>
  <div>
    <template v-if="isMicro">
      <router-view/>
    </template>
    <Layout v-else>
      <template v-slot:content>
        <div id="main-viewport">
          <router-view/>
        </div>
      </template>
    </Layout>
  </div>

</template>

<script>
import {defineComponent, ref} from "vue";
import Layout from "@/layout";

export default defineComponent({
  name: 'App',
  components: {Layout},
  setup(){
    const isMicro = ref(!!window.__POWERED_BY_QIANKUN__)
    return {
      isMicro
    }
  }
})
</script>

<style lang="scss">

</style>
