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
import {defineComponent, reactive, toRefs} from "vue";
import {useRouter} from "vue-router";

export default defineComponent({
    name: "AsideMenu",
    components: {MenuItem},
    props: {
        collapsed: Boolean
    },
    setup() {

        // 获取当前打开的子菜单
        const getOpenKeys = () => {
            const prefixApp = location.pathname.slice(1).split('/')[0]
            return [prefixApp]
        }

        const state = reactive({
            openKeys: getOpenKeys(),
            selectedKeys: ['/app1']
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
            },
            {
                "name": "app2",
                "meta": {
                    "title": "应用app2",
                    "hidden": false,
                },
                "children": [
                    {
                        "name": 'app2-home',
                        "meta": {
                            "title": 'home',
                            "hidden": false,
                        }
                    },
                    {
                        "name": 'app2-about',
                        "meta": {
                            "title": 'about',
                            "hidden": false,
                        }
                    }
                ]
            }
        ]

        // 点击菜单
        const clickMenuItem = ({item, key, keyPath}) => {
            if (/http(s)?:/.test(key)) {
                window.open(key)
            } else {
                const path = '/' + key.replaceAll('-','/')
                history.pushState(null, path, path)
            }
        }
        return {
            ...toRefs(state),
            clickMenuItem,
            menus
        }
    }
})
</script>

<style scoped>

</style>
