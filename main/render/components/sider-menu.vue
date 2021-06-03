<template>
    <a-layout-sider v-model:collapsed="collapsed" :trigger="null" collapsible class="sider">
        <div class="logo" />
        <a-menu @click="onClickMenu" theme="dark" mode="inline" v-model:selectedKeys="selectedKeys">
            <a-menu-item key="/app1">
                <user-outlined />
                <span>app1</span>
            </a-menu-item>
            <a-menu-item key="/app2">
                <video-camera-outlined />
                <span>app2</span>
            </a-menu-item>
        </a-menu>
    </a-layout-sider>
</template>

<script>
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MenuUnfoldOutlined,
    MenuFoldOutlined,
} from '@ant-design/icons-vue';
import { defineComponent, ref } from 'vue';
export default defineComponent({
    components: {
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
        MenuUnfoldOutlined,
        MenuFoldOutlined,
    },
    setup(props) {
        const onClickMenu = ({item,key,keyPath}) => {
            console.log({item,key,keyPath})
            window.history.pushState(null, key, key)
        }

        return {
            selectedKeys: ref(['/app1']),
            collapsed: ref(props.collapsed),
            onClickMenu
        };
    },
});
</script>

<style scoped>
.sider{
    height: 100vh;
}
.logo {
    height: 32px;
    background: rgba(255, 255, 255, 0.3);
    margin: 16px;
}
</style>
