<script setup>
import { ref } from 'vue';
import { useThemeStore,useChatListStore } from '@/stores'
import { DeleteChat } from '@/api/chat'
const themeStore = useThemeStore()
const chatListStore = useChatListStore()
const visible = ref(false);
const title = ref('')
const id = ref('')
const open = (row) => {
    if (row.id) {
        visible.value = true
        title.value = row.title
        id.value = row.id
    }
}
const onDelete = async() => {
    await DeleteChat(id.value)
    chatListStore.getList()
    visible.value = false
}
defineExpose({
    open
})
</script>
<template>
    <q-dialog v-model="visible">
        <q-card class="card" :class="[themeStore.currentTheme == 'dark' ? 'dark' : 'light']">
            <q-card-section class="row items-center q-pb-none">
                <div class="text-h6">Delete chat?</div>
            </q-card-section>

            <q-card-section class="content">
                <div class="tip">This will delete
                    <span>{{ title }}</span>
                </div>
                <div class="btn_group">
                    <q-btn label="Cancel" text-color="white" style="background: #343541;" v-close-popup />
                    <q-btn label="Delete" text-color="white" style="background: #b91c1c;" @click="onDelete" />
                </div>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>
<style lang="scss" scoped>
.dark {
    .row {
        background: rgba(20, 21, 21);
        border-bottom: 1px solid rgb(171, 170, 170, .1);
        color: #d0e1e9;
    }

    .content {
        background: rgb(20, 21, 21);
        color: #d0e1e9;
    }
}

.light {
    .row {
        border-bottom: 1px solid rgb(171, 170, 170, .1);
    }
}

.card {
    width: 450px;

    .row {
        padding-bottom: 16px;
        padding-left: 30px;
    }

    .tip {
        font-size: 16px;
        margin: 10px 0 20px 15px;

        span {
            font-weight: 700;
        }
    }

    .btn_group {
        display: flex;
        justify-content: end;

        .q-btn:first-child {
            margin-right: 10px;
        }
    }
}
</style>