<template>
    <a-menu
        v-model:openKeys="openKeys"
        v-model:selectedKeys="selectedKeys"
        mode="inline"
        theme="dark"
        :inline-collapsed="collapsed"
        @click="clickMenuItem"
    >
        <template v-for="item in menus" :key="item.name">
            <menu-item :menuInfo="item"/>
        </template>
    </a-menu>
</template>

<script>
import MenuItem from "./menu-item.vue";
import {defineComponent, reactive, toRefs, watch} from "vue";
import {useRouter, useRoute} from "vue-router";

export default defineComponent({
    name: "AsideMenu",
    components: {MenuItem},
    props: {
        collapsed: Boolean
    },
    setup(props) {
        // 当前路由
        const currentRoute = useRoute()
        const router = useRouter()
        // 获取当前打开的子菜单
        const getOpenKeys = () => {
            const prefixApp = location.pathname.slice(1).split('/')[0]
            return [prefixApp,currentRoute.matched[0]?.name]
        }

        const state = reactive({
            openKeys: getOpenKeys(),
            selectedKeys: [currentRoute.name]
        })

        const menus = [
            {
                "name": "app1",
                "meta": {
                    "title": "应用app1",
                    "hidden": false,
                },
                "children": [
                    {
                        "name": 'app1-home',
                        "meta": {
                            "title": 'home',
                            "hidden": false,
                        }
                    },
                    {
                        "name": 'app1-about',
                        "meta": {
                            "title": 'about',
                            "hidden": false,
                        }
                    }
                ]
            }
        ]


        // 监听菜单收缩状态
        watch(
            () => props.collapsed,
            (newVal) => {
                state.openKeys = newVal ? [] : getOpenKeys()
                state.selectedKeys = [currentRoute.name]
            }
        )

        // 跟随页面路由变化，切换菜单选中状态
        watch(
            () => currentRoute.fullPath,
            () => {
                if (currentRoute.name == 'login' || props.collapsed) return
                state.openKeys = getOpenKeys()
                state.selectedKeys = [currentRoute.name]
            }
        )

        // 点击菜单
        const clickMenuItem = ({item, key, keyPath}) => {
            console.log(item,key,keyPath)
            if (/http(s)?:/.test(key)) {
                window.open(key)
            } else {
                if (window.__POWERED_BY_QIANKUN__) {
                    const path = keyPath[0].split('-').join('/')
                    history.pushState(null, path, path)
                } else {
                    router.push({name: key})
                }
            }
        }
        return {
            currentRoute,
            ...toRefs(state),
            clickMenuItem,
            menus
        }
    }
})
</script>

<style scoped>

</style>
