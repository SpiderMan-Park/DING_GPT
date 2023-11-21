<script setup>
import { ref } from 'vue';
import { useThemeStore, useChatListStore } from '@/stores'
import { EditChat } from '@/api/chat'
const chatListStore = useChatListStore()
const themeStore = useThemeStore()
const visible = ref(false);
const title = ref('')
const id = ref('')
const text = ref('')
const open = (row) => {
    if (row.id) {
        visible.value = true
        title.value = row.title
        id.value = row.id
        text.value = row.title
    }
}
const onEdit = async () => {
    await EditChat(id.value, text.value)
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
            <q-card-section class="row items-center q-pb-none title">
                <div class="text-h6">Rename chat</div>
            </q-card-section>

            <q-card-section class="content">
                <div class="tip">
                    <q-input v-model="text" label="Title" color="grey"
                        :class="[themeStore.currentTheme == 'dark' ? '' : 'not_scoped_light']" />
                </div>
                <div class="btn_group">
                    <q-btn label="Cancel" text-color="white" style="background: #343541;" v-close-popup />
                    <q-btn label="Edit" text-color="white" style="background: teal;" @click="onEdit" />
                </div>
            </q-card-section>
        </q-card>
    </q-dialog>
</template>
<style lang="scss" scoped>
.dark {
    .title {
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
    .title {
        border-bottom: 1px solid rgb(171, 170, 170, .1);
    }

    .q-field__native,
    .q-field__input {
        color: #000 !important;

    }

    .q-field__label {
        color: #000 !important;
    }
}

.card {
    width: 450px;

    .title {
        padding-bottom: 16px;
        padding-left: 30px;
    }

    .tip {
        font-size: 16px;
        margin: 10px 30px;
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
<style lang="scss">
.q-field__native,
.q-field__input {
    color: #fff !important;

}

.q-field__label {
    color: #fff !important;
}

.not_scoped_light {

    .q-field__native,
    .q-field__input {
        color: #000 !important;

    }

    .q-field__label {
        color: #000 !important;
    }
}
</style>