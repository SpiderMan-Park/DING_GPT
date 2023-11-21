<script setup>
import { ref, watchEffect } from 'vue';
const promptMessage = ref('')
const buttonStatus = ref(false)

import { useThemeStore } from '@/stores'
const themeStore = useThemeStore()
watchEffect(() => {
    if (promptMessage.value !== '') {
        buttonStatus.value = true
    } else {
        buttonStatus.value = false
    }
})

</script>
<template>
    <div class="container" :class="[themeStore.currentTheme == 'dark' ? 'dark' : 'light']">
        <div class="content" ref="textareaRef">
            <a-textarea auto-size class="prompt_textarea" placeholder="Message echo GPT…" v-model="promptMessage" />
            <a-tooltip content="Send message" position="top" background-color="#000">
                <button class="send" :class="{ 'active': buttonStatus }"><icon-arrow-up style="font-size: 16px;" /></button>
            </a-tooltip>
        </div>
        <div class="copyright">
            <span>ChatGPT can make mistakes. Consider checking important information.</span>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.dark {

    .prompt_textarea,
    .copyright {
        color: #fff !important;
    }

    .send {
        background: $chatInputBtnDarkColor;
    }

    .active {
        background: rgba(255, 255, 255, 1) !important;
        cursor: pointer;
    }
}

.light {

    .prompt_textarea,
    .copyright {
        color: #000 !important;
    }

    .send {
        background: $chatInputBtnDarkColor;
        color: $chatInputBtnLightColor;
    }

    .active {
        background: #000 !important;
        cursor: pointer;
    }
}

.content {
    margin-top: 10px;
    margin-bottom: 10px;
    position: relative;
    border-radius: 8px;
    display: flex;
    border: 1px solid $chatInputLightColor;

    .prompt_textarea {
        border-radius: 8px;
        overflow-y: auto;
        max-height: 220px;
        background: transparent;
        min-height: 56px;
        padding-top: 9px;
        padding-right: 40px;

        &::-webkit-scrollbar {
            width: 5px;
            background: transparent;
        }

        &::-webkit-scrollbar-thumb {
            background: rgba(100, 100, 100, .5) !important;
            border-radius: 8px;
            padding: 2px 0;

            &:hover {
                background: rgba(170, 170, 170, .5) !important;
            }
        }
    }

    .send {
        border: none;
        width: 34px;
        height: 34px;
        border-radius: 8px;
        position: absolute;
        bottom: 11px;
        right: 14px;
    }

}

.copyright {
    padding: 0 60px;
    text-align: center;
    font-size: 12px;
    padding: 10px;
}

@media screen and (min-width:1024px) {

    .container {
        max-width: 42rem;
        width: 42rem;
        margin-left: auto;
        margin-right: auto;
        margin-top: 20px;
    }
}

.arco-textarea-focus {
    border-color: #5d5cde !important;
    border-radius: 8px !important;
}
</style>
<style>
.arco-textarea {
    font-size: 18px !important;
}
</style>