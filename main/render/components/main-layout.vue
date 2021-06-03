<template>
    <div id="components-layout-custom-trigger">
        <a-layout>
            <slot name="menu"></slot>
            <sider-menu :collapsed="collapsed"></sider-menu>
            <a-layout>
                <a-layout-header style="background: #fff; padding: 0">
                    <div class="header">
                        <menu-unfold-outlined
                                v-if="collapsed"
                                class="trigger"
                                @click="() => (collapsed = !collapsed)"
                        />
                        <menu-fold-outlined v-else class="trigger" @click="() => (collapsed = !collapsed)" />

                        <a-dropdown>
                            <a-avatar :size="32">
                                <template #icon><UserOutlined /></template>
                            </a-avatar>
                            <template #overlay>
                                <a-menu>
                                    <a-menu-item>
                                        <a href="javascript:;">个人资料</a>
                                    </a-menu-item>
                                    <a-menu-item>
                                        <a href="javascript:;">退出登录</a>
                                    </a-menu-item>
                                </a-menu>
                            </template>
                        </a-dropdown>
                    </div>
                </a-layout-header>
                <a-layout-content
                        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
                >
                   <slot name="content"></slot>
                </a-layout-content>
            </a-layout>
        </a-layout>
    </div>

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
import SiderMenu from "./sider-menu.vue";
export default defineComponent({
    components: {
        SiderMenu,
        UserOutlined,
        VideoCameraOutlined,
        UploadOutlined,
        MenuUnfoldOutlined,
        MenuFoldOutlined,
    },
    setup() {
        return {
            selectedKeys: ref(['1']),
            collapsed: ref(false),
        };
    },
});
</script>

<style lang="less" scoped>
#components-layout-custom-trigger{
    .header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 24px;
    }

    .trigger {
        font-size: 18px;
        line-height: 64px;
        cursor: pointer;
        transition: color 0.3s;
    }
    .trigger:hover {
        color: #1890ff;
    }

    .site-layout .site-layout-background {
        background: #fff;
    }
}


</style>
