<script setup>
import { useThemeStore } from '@/stores'
const themeStore = useThemeStore()

</script>
<template>
    <div class="container" :class="[themeStore.currentTheme == 'dark' ? 'dark' : '']">
        <div class="tip_win">
            <img src="@/assets/logo.png">
            <div>How can I help you today?</div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.dark {
    .tip_win {
        color: #fff;
    }
}


.container {
    // min-width: 42rem;
    height: 100%;

    .tip_win {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        font-weight: 500;
        font-size: 30px;

        img {
            width: 100px;
            height: 100px;
        }
    }


}

@media screen and (min-width:1024px) {

    .container {
        max-width: 42rem;
        width: 42rem;
        margin-left: auto;
        margin-right: auto;
    }
}
</style>