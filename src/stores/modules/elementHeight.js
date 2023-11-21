import { defineStore } from 'pinia';
import { ref } from 'vue';
export const useElementHeightStore = defineStore(
    'elementHeight',
    () => {
        const height = ref(0)
        const setHeight = (newHeight) => {
            height.value = newHeight
        }
        return {
            height,
            setHeight
        }
    }
)
