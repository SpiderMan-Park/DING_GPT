import { createPinia } from 'pinia'
import piniaPluginPersist from 'pinia-plugin-persist'
const pinia = createPinia()
pinia.use(piniaPluginPersist)

export default pinia
export * from './modules/theme.js'
export * from './modules/elementHeight.js'
export * from './modules/user.js'
export * from './modules/chatList.js'