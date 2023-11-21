<script setup>
import { ref } from 'vue'
import { GetModels } from '@/api/chat.js'
import { useThemeStore } from '@/stores'
const useStore = useThemeStore()

const showBackground = ref(false)
const selectItem = ref('')
const models = ref([])
const select = (item) => {
    selectItem.value = item.human_category_name
    showBackground.value = false
}
const getModels = async () => {
    const res = await GetModels()
    selectItem.value = res.categories[0].human_category_name //默认值
    models.value = res.categories
}

getModels()
</script>
<template>
    <div class="chat_header" :class="[useStore.currentTheme == 'dark' ? 'dark' : 'light']">
        <div class="sticky">
            <a-trigger trigger="click" position="bottom" v-model:popup-visible="showBackground" :popup-translate="[55, 10]">
                <a-button :class="{ 'active': showBackground }" @click="showBackground = true"><span
                        style="font-size: 16px;">{{ selectItem }}</span>
                    <icon-up class="icon" v-show="showBackground" />
                    <icon-down class="icon" v-show="showBackground == false" />
                </a-button>
                <template #content>
                    <div class="userPanel">
                        <div class="gpt_models" v-for="item in models" @click="select(item)">
                            <i><icon-thunderbolt /></i>
                            <span class="title">{{ item.human_category_name }}</span>
                        </div>
                    </div>
                </template>
            </a-trigger>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.dark {
    background: $chatHeaderDarkColor;
}

.light {
    background: $chatHeaderLightColor;

    .arco-btn {
        color: #000;
    }
}

.chat_header {
    position: sticky;
    // z-index: 9999;
    top: 0;
    height: 56px;
    width: 100%;
    // margin-bottom: 6px;
    line-height: 56px;
    padding: 0 15px;
    margin-bottom: 10px;

    .icon {
        margin-left: 5px;
        color: #999;
        font-size: 16px;
    }
}

.arco-btn {
    background: transparent !important;
    color: #fff;
    height: 40px;
    border-radius: 8px !important;

    &:hover {
        background: rgba(34, 34, 34, .5) !important;
        color: #fff;
    }
}

.userPanel {
    width: 220px;
    background: rgba(34, 34, 34, .5);
    border-radius: 8px;
    margin-bottom: 4px;
    color: #fff;
    padding: 5px;

    .gpt_models {
        height: 40px;
        display: flex;
        align-items: center;
        font-size: 16px;
        padding: 5px 10px;

        .title {
            margin-left: 15px;
        }

        &:hover {
            cursor: pointer;
            background: rgba(170, 170, 170, .2);
            border-radius: 8px;
        }
    }
}

.active {
    background: rgba(34, 34, 34, .5) !important;
}
</style>