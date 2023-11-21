import { ref } from 'vue'

export function setScroll() {
    const scrollHeight = ref(0)
    const updateScrollHeight = () => {
        // 获取浏览器可视区域高度
        const windowHeight = window.innerHeight;
        // 设置滚动条高度
        scrollHeight.value = windowHeight;
    }
    return {
        scrollHeight,
        updateScrollHeight
    }
}