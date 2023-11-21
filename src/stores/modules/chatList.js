import { defineStore } from 'pinia';
import { ref } from 'vue';
import { GetChatList, GetChatDetail } from '@/api/chat'
export const useChatListStore = defineStore(
    'chatList',
    () => {
        const newChat = ref(true)
        const addChat = (status) => {
            newChat.value = status
        }
        const list = ref([])
        const getList = async (res) => {
            res = await GetChatList()
            // 遍历原始数组，根据日期分类
            const now = new Date().getTime();
            const categorizedArray = res.items.reduce((result, item, index) => {
                const itemTime = new Date(item.create_time).getTime();
                // 计算日期差值
                const dayDifference = Math.floor((now - itemTime) / (24 * 60 * 60 * 1000));
                item['idx'] = index
                // 分类
                if (dayDifference === 0) {
                    // 今天
                    result.today.push(item);
                } else if (dayDifference === 1) {
                    // 昨天
                    result.yesterday.push(item);
                } else if (dayDifference <= 7) {
                    // 7天前
                    result.last7Days.push(item);
                } else if (dayDifference <= 30) {
                    // 30天前
                    result.last30Days.push(item);
                }

                return result;
            }, { today: [], yesterday: [], last7Days: [], last30Days: [] });

            // 构造最终结果数组
            const arr = [
                { days: 'Today', children: categorizedArray.today },
                { days: 'Yesterday', children: categorizedArray.yesterday },
                { days: 'Previous 7 Days', children: categorizedArray.last7Days },
                { days: 'Previous 30 Days', children: categorizedArray.last30Days }
            ];
            list.value = arr
        }
        const selectedChatID = ref(null)
        const chatDetail = async (id) => {
            selectedChatID.value = await id
            const res = await GetChatDetail(id)
            console.log(res);
            newChat.value = false
        }
        return {
            list,
            getList,
            newChat,
            addChat,
            selectedChatID,
            chatDetail
        }
    }
)
