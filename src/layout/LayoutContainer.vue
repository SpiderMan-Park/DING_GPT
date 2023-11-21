<script setup>
import SliderContainer from './silder/SliderContainer.vue'
import SliderFooter from './SliderFooter.vue'
import ChatHeader from '@/views/chat/components/ChatHeader.vue'
import ChatInput from '@/views/chat/components/ChatInput.vue'

import { onMounted, ref } from 'vue'
import { setScroll } from '@/utils/setScroll.js'

import { useThemeStore } from '@/stores'
const useStore = useThemeStore()

const { scrollHeight, updateScrollHeight } = setScroll()
onMounted(() => {
    updateScrollHeight()
})
const isSliderHide = ref(false)
const overflowSilder = () => {
    if (isSliderHide.value == true) {
        isSliderHide.value = false
    } else {
        isSliderHide.value = true
    }
}
const isMask = ref(false)
const showMask = () => {
    isMask.value = true
}
const hideMask = () => {
    isMask.value = false
}
</script>
<template>
    <a-layout>
        <a-layout>
            <a-layout-sider :class="[isSliderHide ? 'hide' : 'block']">
                <div :class="[isMask ? 'mask' : '']">
                    <a-scrollbar style="overflow: auto;" :style="{ height: scrollHeight - 70 + 'px' }">
                        <slider-container></slider-container>
                    </a-scrollbar>
                    <slider-footer></slider-footer>
                </div>
            </a-layout-sider>
            <a-layout-content :class="[useStore.currentTheme == 'dark' ? 'dark' : 'light']">
                <div class="overflow">
                    <div class="overflow_item" @click="overflowSilder" :class="[isSliderHide ? 'btnExpand' : '']"
                        @mousemove="showMask" @mouseleave="hideMask">
                        <div class="up"></div>
                        <div class="down"></div>
                    </div>
                </div>
                <chat-header></chat-header>
                <RouterView />
                <chat-input></chat-input>
            </a-layout-content>
        </a-layout>
    </a-layout>
</template>
<style lang="scss">
.hide {
    display: none;
}

.block {
    display: block;
}

.mask {
    opacity: .6;
}

.arco-layout-sider {
    width: 320px !important;
    background: #000;
    height: 100vh;

    .arco-layout-sider-children {
        overflow: hidden !important; //去掉浏览器默认滚动条
    }
}

.arco-layout-content {
    height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
}

.dark {
    background: $chatWindowDarkColor;
}

.light {
    background: $chatWindowLightColor;

    .overflow .overflow_item .up,
    .overflow .overflow_item .down {
        background: #000;
    }
}

.arco-scrollbar-thumb-bar {
    background: rgba(34, 34, 34, 1) !important;

    &:hover {
        background: rgba(170, 170, 170, .5) !important;
    }
}

.overflow {
    position: fixed;
    top: 50%;
    width: 32px;
    height: 72px;
    z-index: 999;

    .overflow_item {
        display: flex;
        align-items: center;
        flex-direction: column;
        opacity: .35;

        .up {
            width: 5px;
            height: 14px;
            background: #eee;
            border-radius: 9999px;
            transform: translateY(2.4px) rotate(0deg) translateZ(0px);
        }

        .down {
            width: 5px;
            height: 14px;
            background: #eee;
            border-radius: 9999px;
            transform: translateY(-2.4px) rotate(0deg) translateZ(0px);
        }

        &:hover {
            cursor: pointer;
            opacity: .9;

            .up {
                transform: translateY(2.4px) rotate(15deg) translateZ(0px);
                transition: all .4s;
            }

            .down {
                transform: translateY(-2.4px) rotate(-15deg) translateZ(0px);
                transition: all .4s;
            }
        }
    }
}

.btnExpand {
    .up {
        transform: translateY(2.4px) rotate(-15deg) translateZ(0px) !important;
        transition: all .4s;
    }

    .down {
        transform: translateY(-2.4px) rotate(15deg) translateZ(0px) !important;
        transition: all .4s;
    }

    &:hover {
        cursor: pointer;
        opacity: 1;
    }
}
</style>