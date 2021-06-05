<template>
    <Layout>
        <template v-slot:content>
            <div v-if="loading" class="loading">
                <a-spin size="large" />
            </div>

            <div id="main-viewport"></div>
        </template>
    </Layout>
</template>

<script>
import {defineComponent, onMounted, ref} from 'vue'
import Layout from "../layout/index.vue";

export default defineComponent({
    name: "App",
    components: {Layout},
    props: {
        // loading: Boolean
    },
    data() {
        return {
            loading: true
        }
    },
    setup(props) {
        // const loading = ref(true)
        // onMounted(() => {
        //   const interval = setInterval(() => {
        //     if(document.getElementById('main-viewport').innerHTML !== ''){
        //       loading.value = false
        //       clearInterval(interval)
        //     }
        //   }, 1000)
        // })
        //
        // return {
        //   loading
        // }

    }
})
</script>

<style scoped>
.loading{
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>
