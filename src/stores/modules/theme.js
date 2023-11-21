import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useThemeStore = defineStore(
  'theme',
  () => {
    const currentTheme = ref('dark')
    const setTheme = (t) => currentTheme.value = t
    return {
      currentTheme,
      setTheme
    }
  },
  {
    persist: {
      enabled: true,
      strategies: [
        { key: 'theme', storage: localStorage },
      ]
    }
  }
)
