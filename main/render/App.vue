<template>
    <div class="mainapp">
        <!-- 标题栏 -->
        <header class="mainapp-header">
            <h1>Vue3-Micro</h1>
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
                <div id="main-viewport"></div>
            </div>
        </div>
    </div>
</template>

<script>
import { toRef, ref, reactive } from 'vue'
export default {
    name: "App",
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
