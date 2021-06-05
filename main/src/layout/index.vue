<template>
    <a-layout class="layout">
        <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible class="layout-sider">
            <logo :collapsed="collapsed"/>
            <aside-menu :collapsed="collapsed"/>
        </a-layout-sider>

        <a-layout>
            <a-layout-header class="layout-header">
                <page-header v-model:collapsed="collapsed"/>
            </a-layout-header>

            <a-layout-content class="layout-content">
                <slot name="content"></slot>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>

<script>
import {defineComponent, ref} from "vue";
import AsideMenu from './menu/menu.vue'
import PageHeader from "./header/index.vue";
import Logo from "./logo/index.vue";

export default defineComponent({
    name: "Layout",
    components: {Logo, PageHeader, AsideMenu},
    setup() {
        const selectedKeys = ref(['/app1'])
        const collapsed = ref(false)
        return {
            selectedKeys,
            collapsed
        }
    }
})
</script>

<style lang="less" scoped>
.layout {
    height: 100vh;

    .layout-sider {
    }

    .layout-header {
        background: #fff;
        padding: 0;
    }

    .layout-content {
        background-color: #fff;
        margin: 10px;
        padding: 10px;
        border-radius: 5px;
    }
}
</style>
