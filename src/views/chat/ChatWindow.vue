<script setup>
import { onMounted, onUnmounted, ref, watch } from 'vue';
import { useThemeStore, useChatListStore } from '@/stores'
const themeStore = useThemeStore()
const chatWindowStore = useChatListStore()

const toBottom = ref(false)
const winRef = ref(null)
const scrollTop = ref(0);
const handleScroll = () => {
    if (winRef.value) {
        scrollTop.value = winRef.value.scrollTop;
    }
};
onMounted(() => {
    if (winRef.value) {
        winRef.value.addEventListener('scroll', handleScroll);
    }
})
onUnmounted(() => {
    if (winRef.value) {
        winRef.value.removeEventListener('scroll', handleScroll);
    }
});
watch(scrollTop, (newValue) => {
    if (winRef.value) {
        const containerHeight = winRef.value.offsetHeight;
        const scrollHeight = winRef.value.scrollHeight;
        if (newValue + containerHeight >= scrollHeight) {
            //触底
            toBottom.value = false
        } else if (newValue + containerHeight <= scrollHeight) {
            // 非触底
            toBottom.value = true
        }
    }
});
const scrollToBottom = () => {
    if (winRef.value) {
        winRef.value.scrollTop = winRef.value.scrollHeight
    }
}
</script>
<template>
    <div class="container" :class="[themeStore.currentTheme == 'dark' ? 'dark' : 'light']">
        <div class="chat_win" ref="winRef">
            <div class="msg_win">
                <div class="self">
                    <div class="self_avatar">
                        <img src="@/assets/logo.png">
                    </div>
                    <div class="self_content">
                        <div class="role">You</div>
                        <div class="question">
                            Here is the image of a serene landscape with a tranquil river flowing through a lush green
                            forest, as you requested.
                        </div>
                    </div>
                </div>
                <div class="robot">
                    <div class="robot_avatar">
                        <img src="@/assets/logo.png">
                    </div>
                    <div class="robot_content">
                        <div class="role">ChatGPT</div>
                        <div class="answer">
                            我是ChatGPT，一个由OpenAI开发的大型语言模型。很高兴为您提供帮助！如果您有任何问题或需要帮助，请随时告诉我。
                        </div>
                    </div>
                </div>
            </div>
            <div class="toBottom_cycle" @click="scrollToBottom" v-if="toBottom">
                <i><icon-arrow-down style="font-size: 18px;" /></i>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
/* 修改滚动条轨道样式 */
::-webkit-scrollbar-track {
    background: transparent;
}

/* 修改滚动条的样式 */
::-webkit-scrollbar {
    width: 8px;
    /* 滚动条的宽度 */
}

/* 修改滚动条滑块的样式 */
::-webkit-scrollbar-thumb {
    background: rgba(100, 100, 100, .5) !important;
    border-radius: 8px;
}

/* 当滚动条滑块被悬停或点击时 */
::-webkit-scrollbar-thumb:hover {
    background: rgba(170, 170, 170, .5) !important;
}

.dark {
    .msg_win .self_avatar {
        background: #fff;
    }

    .msg_win .self_content {

        .role,
        .question {
            color: #fff;
        }
    }

    .msg_win .robot_content {

        .role,
        .answer {
            color: #fff;
        }
    }

    .chat_win {
        color: #fff;
    }

    .chat_win .toBottom_cycle {
        color: #fff;
        background: rgba(100, 100, 100, .5);
    }
}

.light {


    .msg_win .self_avatar {
        background: rgba(170, 170, 170, .5);
    }

    .msg_win .self_content {

        .role,
        .question {
            color: #000;
        }
    }

    .msg_win .robot_content {

        .role,
        .question {
            color: #000;
        }
    }

    .chat_win .toBottom_cycle {
        color: #000;
        background: #eee;
    }

}

.container {
    min-width: 42rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    overflow: hidden;

    .chat_win {
        overflow-y: auto;
        flex: 1;

        .toBottom_cycle {
            position: sticky;
            bottom: 14px;
            left: 50%;
            width: 30px;
            height: 30px;
            line-height: 32px;
            text-align: center;
            border-radius: 9999px;
            cursor: pointer;
            border: 1px solid rgba(170, 170, 170, .5);
        }

        .msg_win {
            display: flex;
            flex-direction: column;

            .self {
                display: flex;
                margin-bottom: 24px;

                .self_avatar {
                    width: 24px;
                    height: 24px;
                    border-radius: 9999px;

                    img {
                        width: 24px;
                        height: 24px;
                    }
                }

                .self_content {
                    display: flex;
                    flex-direction: column;
                    align-items: left;
                    margin-left: 10px;

                    .role {
                        font-weight: 700;
                        font-size: 16px;
                        margin-bottom: 10px;
                    }

                    .question {
                        font-size: 16px;
                        flex: 1;
                        line-height: 26px;
                    }
                }
            }

            .robot {
                display: flex;
                margin-bottom: 24px;

                .robot_avatar {
                    width: 24px;
                    height: 24px;
                    border-radius: 9999px;
                    background: rgb(171, 104, 255);

                    img {
                        width: 24px;
                        height: 24px;
                    }
                }

                .robot_content {
                    display: flex;
                    flex-direction: column;
                    align-items: left;
                    margin-left: 10px;

                    .role {
                        font-weight: 700;
                        font-size: 16px;
                        margin-bottom: 10px;
                    }

                    .answer {
                        font-size: 16px;
                        flex: 1;
                        line-height: 26px;
                    }
                }
            }
        }
    }


}

@media screen and (min-width:1024px) {

    .chat_win .msg_win {
        max-width: 42rem;
        width: 42rem;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>