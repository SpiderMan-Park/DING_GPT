<script setup>
import { useChatListStore } from '@/stores'
const chatListStore = useChatListStore()

</script>
<template>
    <div class="header">
        <router-link :to="'/'" style="text-decoration: none;">
            <div class="content">
                <div class="left">
                    <img src="@/assets/logo.png" style="width: 53.57px;height: 50px;">
                    <div>echo GPT</div>
                </div>
                <div class="right">
                    <a-tooltip content="New Chat" position="right" background-color="#000">
                        <icon-plus-circle />
                    </a-tooltip>
                </div>
            </div>
        </router-link>
    </div>
</template>
<style lang="scss" scoped>
.header {
    height: 54px;
    position: sticky;
    top: 0;
    z-index: 1100;
    padding-top: 20px;
    background: #000;
    margin-bottom: 20px;

    .content {
        height: 54px;
        display: flex;
        justify-content: space-between;
        padding: 6px;
        color: #fbfbfd;
        background: #000;
        align-items: center;

        &:hover {
            cursor: pointer;
            background: rgba(32, 33, 35, 1);
            border-radius: 8px;
        }
    }

    .left {
        line-height: 40px;
        display: flex;
        align-items: center;

        div {
            margin-left: 10px;
            font-weight: 700;
        }
    }

    .right {
        font-size: 22px;
        line-height: 40px;
    }
}
</style>