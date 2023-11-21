<script setup>
import { ref } from 'vue'
import SettingModal from './silder/components/SettingModal.vue'
const settingModalRef = ref()
const showBackground = ref(false)
const selectPanel = (e) => {
    console.log(e.target.outerText);
    showBackground.value = false
}
</script>
<template>
    <div class="footer">
        <a-trigger trigger="click" position="top" v-model:popup-visible="showBackground">
            <div class="content" :class="{ 'active': showBackground }" @click="showBackground = true">
                <div style="width: 32px;height: 32px;">
                    <a-avatar :size="32">
                        <img alt="avatar"
                            src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp" />
                    </a-avatar>
                </div>
                <div class="username">echo GPT</div>
            </div>
            <template #content>
                <div class="userPanel" @click="selectPanel">
                    <div class="setting" @click="settingModalRef.open()">
                        <i><icon-settings /></i>
                        <span class="title">Settings</span>
                    </div>
                    <div class="logout">
                        <i><icon-export /></i>
                        <span class="title">Log out</span>
                    </div>
                </div>
            </template>
        </a-trigger>
        <setting-modal ref="settingModalRef"></setting-modal>
    </div>
</template>
<style lang="scss" scoped>
.userPanel {
    width: 300px;
    background: rgba(32, 33, 35, 1);
    border-radius: 8px;
    margin-bottom: 4px;
    color: #fff;

    .setting,
    .logout {
        height: 54px;
        display: flex;
        align-items: center;
        font-size: 16px;
        padding: 5px 10px;

        .title {
            margin-left: 15px;
        }

    }

    .setting {
        &:hover {
            cursor: pointer;
            background: rgba(170, 170, 170, .2);
            border-top-right-radius: 8px;
            border-top-left-radius: 8px;
        }
    }

    .logout {
        &:hover {
            cursor: pointer;
            background: rgba(170, 170, 170, .2);
            border-bottom-right-radius: 8px;
            border-bottom-left-radius: 8px;
        }
    }
}

.footer {
    position: sticky;
    bottom: 0;
    height: 70px;
    background: #000;
    margin: 0 10px;

    .content {
        height: 52px;
        display: flex;
        align-items: center;
        padding-left: 6px;
        color: #fbfbfd;

        &:hover {
            cursor: pointer;
            background: rgba(170, 170, 170, .2);
            border-radius: 8px;
        }

        .username {
            margin-left: 10px;
            font-weight: 700;
        }
    }
}

.active {
    background: rgba(170, 170, 170, .2);
    border-radius: 8px;
}
</style>