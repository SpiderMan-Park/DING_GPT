<script setup>
import { ref } from 'vue'
import DeleteAllChatsModal from '../DeleteAllChatsModal.vue';
import { useThemeStore } from '@/stores'
const themeStore = useThemeStore()
const deleteAllRef = ref()
defineProps({
    index: {
        required: true,
        type: String
    }
})
const handleSelect = (val) => {
    themeStore.setTheme(val)
}

</script>
<template>
    <div v-if="index == '1'">
        <div class="row">
            <div>Theme</div>
            <a-dropdown @select="handleSelect">
                <a-button class="drop">{{ themeStore.currentTheme }} <i><icon-down style="margin-left: 5px;" /></i></a-button>
                <template #content>
                    <a-doption>dark</a-doption>
                    <a-doption>light</a-doption>
                </template>
            </a-dropdown>
        </div>
        <div class="row">
            <div>Clear all chats</div>
            <a-button class="clear" @click="deleteAllRef.open()">Clear</a-button>
            <delete-all-chats-modal ref="deleteAllRef"></delete-all-chats-modal>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.row {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &:first-child {
        border-bottom: 1px solid #ccc;
        padding-bottom: 12px;
    }

    &:last-child {
        padding-top: 12px;
    }

    .drop {
        // color: #ececf1;
        color: rgba(34, 34, 34, .9);
    }

    .clear {
        background: #b91c1c !important;
        color: #ececf1;
    }
}

.arco-btn {
    background: transparent !important;
    border-radius: 8px;

    &:hover {
        background: rgba(170, 170, 170, .5) !important;
    }
}
</style>