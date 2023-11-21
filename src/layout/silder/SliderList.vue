<script setup>
import { onMounted, ref } from 'vue'
import { useChatListStore } from '@/stores'
const chatListStore = useChatListStore()
import DeleteModal from './components/DeleteModal.vue'
import EditModal from './components/EditModal.vue'
import { useRouter } from 'vue-router'
const router = useRouter()
const currentIndex = ref()
const selectedListItem = ref(false)
const selected = (index, id) => {
    currentIndex.value = index
    selectedListItem.value = true
    chatListStore.chatDetail(id)

}
const deleteRef = ref()
const editRef = ref()
onMounted(() => {
    chatListStore.getList()
})
</script>
<template>
    <div class="container">
        <div class="chat_item" v-for="item in chatListStore.list" :key="item">
            <h3 v-if="item.children.length != 0">{{ item.days }}</h3>
            <router-link v-for="i in item.children" :key="i.id" :to="`/chat/${i.id}`" style="text-decoration: none;">
                <a-list :bordered="false" size="medium" :split="false" class="list">
                    <a-list-item @click="selected(i.idx, i.id)" :class="{ 'active': i.idx === currentIndex }">
                        <div class="list_item">
                            <!-- 标题 -->
                            <span>{{ i.title }}</span>
                            <!-- 渐变背景 -->
                            <div class="gradient"></div>
                            <!-- 操作面板 -->
                            <a-popover position="rt" trigger="click" content-class="popPanel" arrow-class="arrow">
                                <div class="panel"
                                    :style="i.idx === currentIndex && selectedListItem == true ? 'display: block' : 'display: none'">
                                    <icon-more class="panel_item" />
                                </div>
                                <template #content>
                                    <div class="rename" @click="editRef.open(i)">
                                        <icon-pen-fill class="icon" />
                                        <span class="title">Rename</span>
                                    </div>
                                    <div class="delete" @click="deleteRef.open(i)">
                                        <icon-delete class="icon" />
                                        <span class="title">Delete chat</span>
                                    </div>
                                </template>
                            </a-popover>
                        </div>
                    </a-list-item>
                </a-list>
            </router-link>
        </div>
        <div class="no_chats" v-if="chatListStore.length == 0">No Chats</div>
        <delete-modal ref="deleteRef"></delete-modal>
        <edit-modal ref="editRef"></edit-modal>
    </div>
</template>
<style lang="scss" scoped>
.no_chats {
    color: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 85vh;
}

.chat_item {
    h3 {
        margin-left: 20px;
        margin-bottom: 5px !important;
        font-size: 14px;
        color: #666;
    }

    .arco-list {
        .arco-list-item {
            color: #ccc !important;
            font-weight: 700;
            white-space: nowrap;

            &:hover {
                cursor: pointer;
                background: rgba(170, 170, 170, .2);
                border-radius: 8px;

                .gradient {
                    background: linear-gradient(to right, rgba(34, 34, 34, 0) 30%, rgba(34, 34, 34, 1) 88%) !important;
                }
            }

            .arco-list-item-content {
                .list_item {
                    display: flex;
                    justify-content: space-between;
                    overflow: hidden;
                    position: relative;
                    width: 250px !important;

                    .gradient {
                        position: absolute;
                        top: 0;
                        right: 0;
                        bottom: 0;
                        width: 42px;
                        height: 20px;
                        background: linear-gradient(to right, rgba(29, 29, 31, 0)30%, #000 100%);
                    }

                    .panel {
                        position: absolute;
                        right: 0;
                        width: 42px;
                        height: 22px;
                        background: linear-gradient(to right, rgba(34, 34, 34, 0) 0%, rgba(34, 34, 34, 1) 50%);

                        .panel_item {
                            position: absolute;
                            right: 0;
                            font-size: 20px;

                            &:hover {
                                color: #fff;
                            }
                        }
                    }

                }

            }
        }
    }
}



.active {
    background: rgba(170, 170, 170, .2);
    border-radius: 8px;
}
</style>
<style lang="scss">
.popPanel {
    width: 200px;
    height: 100px;
    background: #202123;
    border-color: rgb(64, 65, 79);
    padding: 5px 10px !important;

    .rename,
    .delete {
        padding: 8px;
        border-radius: 4px;
        cursor: pointer;

        .title {
            margin-left: 12px;
            font-size: 16px;
        }

        .icon {
            font-size: 18px;
        }

        &:hover {
            background: rgba(170, 170, 170, .2);
        }
    }

    .rename {
        color: #fff;
    }

    .delete {
        color: rgb(239, 68, 68);
    }
}

.arrow {
    width: 0;
    height: 0;
    border: none;
}
</style>