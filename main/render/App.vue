<template>
<!--    <div class="mainapp">-->
<!--        &lt;!&ndash; 标题栏 &ndash;&gt;-->
<!--        <header class="mainapp-header">-->
<!--            <h1>Vue3-Micro</h1>-->
<!--        </header>-->
<!--        <div class="mainapp-main">-->
<!--            &lt;!&ndash; 侧边栏 &ndash;&gt;-->
<!--            <ul class="mainapp-sidemenu">-->
<!--                <li @click="push('/app1')">app1</li>-->
<!--                <li @click="push('/app2')">app2</li>-->
<!--            </ul>-->
<!--            &lt;!&ndash; 子应用  &ndash;&gt;-->
<!--            <div class="subapp-container">-->
<!--                <a-button>aa</a-button>-->
<!--                <a-card title="Default size card" style="width: 300px">-->
<!--                    <template #extra><a href="#">more</a></template>-->
<!--                    <p>card content</p>-->
<!--                    <p>card content</p>-->
<!--                    <p>card content</p>-->
<!--                </a-card>-->
<!--                <h4 v-if="loading" class="subapp-loading">Loading...</h4>-->
<!--                <div id="main-viewport"></div>-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
    <main-layout></main-layout>
</template>

<script>
import { toRef, ref, reactive } from 'vue'
import MainLayout from "./components/main-layout.vue";
export default {
    name: "App",
    components: {MainLayout},
    setup(props){
        const loading = reactive(props.loading)

        const push = (subapp) => {
            window.history.pushState(null, subapp, subapp)
        }

        return { loading, push };
    }
}
</script>

<style scoped>

</style>
