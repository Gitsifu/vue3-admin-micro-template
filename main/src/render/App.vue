<template>
    <Layout>
        <template v-slot:content>
<!--            <h1 v-if="loading">Loading...</h1>-->
            <div id="main-viewport"></div>
        </template>
    </Layout>
</template>

<script>
import { defineComponent} from 'vue'
import Layout from "../layout/index.vue";
export default defineComponent({
    name: "App",
    components: {Layout},
    props: {
      loading: Boolean
    },
    // setup(props){
    //     const {loading} = toRefs(props)
    //
    //     return {
    //         loading
    //     };
    // }
})
</script>

<style scoped>

</style>
