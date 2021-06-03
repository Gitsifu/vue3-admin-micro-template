<template>
    <main-layout>
        <template v-slot:content>
<!--            <h1 v-if="loading">Loading...</h1>-->
            <div id="main-viewport"></div>
        </template>
    </main-layout>
</template>

<script>
import { toRef, ref, reactive,toRefs } from 'vue'
import MainLayout from "./components/main-layout.vue";
export default {
    name: "App",
    components: {MainLayout},
    props: {
      loading: Boolean
    },
    setup(props){
        const {loading} = toRefs(props)

        return {
            loading
        };
    }
}
</script>

<style scoped>

</style>
