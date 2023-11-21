<script setup>
import { ref } from 'vue'
import General from './tabs/General.vue'
import DataControl from './tabs/DataControl.vue'

const visible = ref(false);
const open = () => {
    visible.value = true
}
defineExpose({
    open
})
const tabIndex = ref("1")
</script>
<template>
    <a-modal v-model:visible="visible" :hide-cancel="true" title-align="start" width="720px" title="Settings">
        <div class="main">
            <a-tabs direction="vertical" v-model:active-key="tabIndex">
                <a-tab-pane key="1">
                    <template #title>
                        <icon-calendar />
                        <span class="title">General</span>
                    </template>
                    <general :index="tabIndex"></general>
                </a-tab-pane>
                <a-tab-pane key="2">
                    <template #title>
                        <icon-clock-circle />
                        <span class="title">Data control</span>
                    </template>
                    <data-control :index="tabIndex"></data-control>
                </a-tab-pane>
            </a-tabs>
        </div>
    </a-modal>
</template>
<style lang="scss">
.arco-modal {
    background: $chatWindowLightColor !important;
}
.arco-modal-header {
    height: 68px;
    padding: 20px;

    .arco-modal-title {
        font-weight: 700;
    }

    .arco-modal-close-btn {
        font-size: 18px;
    }
}

.arco-modal-body {
    padding: 15px;
}

.arco-modal-footer {
    display: none;
}

.main {
    min-height: 300px;

    .arco-tabs-nav-ink {
        //蓝色标签
        display: none;
    }

    .arco-tabs-nav::before {
        display: none;
    }

    .arco-tabs-nav-tab {
        // tab选项
        min-width: 140px;

        .arco-tabs-tab .arco-tabs-tab-active {
            padding: 8px 6px;
        }

        .arco-tabs-tab-active,
        .arco-tabs-tab-active:hover {
            color: #000;
            background: #ececf1;
            border-radius: 8px;
            font-weight: normal;
        }
    }

    .title {
        //tab标题
        margin-left: 10px;
        color: #000;
    }

    .arco-tabs-nav-type-line .arco-tabs-tab-title::before {
        //标题hover
        display: none;
    }

    .arco-tabs-nav-vertical.arco-tabs-nav-type-line .arco-tabs-tab {
        //tab选项padding
        padding: 8px 6px 8px 15px;
        margin-top: 0;
    }

    .arco-tabs-left.arco-tabs-vertical .arco-tabs-content {
        padding-left: 30px;
    }
}
</style>
<style scoped>
.active {
    background: #ececf1;
}
</style>